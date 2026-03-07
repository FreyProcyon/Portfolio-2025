import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { projects } from '../projectsData'

// 让 Vite 扫描 src/content 下所有 md 文件，并以“raw 文本”方式导入
const mdModules = import.meta.glob('../content/*.md', { as: 'raw' })

function normalizeStaticPath(path = '') {
  let s = path.trim()

  // images
  if (s.startsWith('../images/')) s = 'images/' + s.slice('../images/'.length)
  if (s.startsWith('./images/')) s = 'images/' + s.slice('./images/'.length)
  if (s.startsWith('/images/')) s = 'images/' + s.slice('/images/'.length)

  // pdfs
  if (s.startsWith('../pdfs/')) s = 'pdfs/' + s.slice('../pdfs/'.length)
  if (s.startsWith('./pdfs/')) s = 'pdfs/' + s.slice('./pdfs/'.length)
  if (s.startsWith('/pdfs/')) s = 'pdfs/' + s.slice('/pdfs/'.length)

  return s
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  const [mdText, setMdText] = useState('')
  const [loading, setLoading] = useState(false)

  const mdKey = useMemo(() => {
    if (!project?.mdFile) return null
    return `../content/${project.mdFile}`
  }, [project])

  useEffect(() => {
    let cancelled = false

    async function loadMarkdown() {
      if (!mdKey || !mdModules[mdKey]) {
        setMdText('')
        setLoading(false)
        return
      }

      setLoading(true)

      try {
        const loader = mdModules[mdKey]
        const text = await loader()

        if (!cancelled) {
          setMdText(text)
          setLoading(false)
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Failed to load markdown:', error)
          setMdText('')
          setLoading(false)
        }
      }
    }

    loadMarkdown()

    return () => {
      cancelled = true
    }
  }, [mdKey])

  if (!project) {
    return (
      <div className="container">
        <p>Project not found.</p>
        <Link to="/" className="back-link">← Back to home</Link>
      </div>
    )
  }

  return (
    <div className="container">
      <header className="project-detail-header">
        <h1>{project.title}</h1>
        <p className="meta">
          {project.year} · {project.tags && project.tags.join(' · ')}
        </p>
        <Link to="/" className="back-link">← Back to all projects</Link>
      </header>

      <section className="project-body">
        {loading && <p>Loading…</p>}

        {!loading && mdKey && mdModules[mdKey] && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img({ src = '', alt = '', ...props }) {
                const base = import.meta.env.BASE_URL
                const normalizedSrc = normalizeStaticPath(src)
                const fixedSrc = normalizedSrc.startsWith('images/')
                  ? `${base}${normalizedSrc}`
                  : normalizedSrc

                return (
                  <img
                    src={fixedSrc}
                    alt={alt}
                    loading="lazy"
                    {...props}
                  />
                )
              },

              a({ href, children, ...props }) {
                const safeHref = (href ?? '').trim()
                const base = import.meta.env.BASE_URL
                const normalizedHref = normalizeStaticPath(safeHref)

                // PDF：嵌入显示
                const isPdf = normalizedHref.toLowerCase().endsWith('.pdf')
                if (isPdf) {
                  const pdfSrc = normalizedHref.startsWith('pdfs/')
                    ? `${base}${normalizedHref}`
                    : normalizedHref

                  return (
                    <div className="embed embed-pdf">
                      <iframe
                        src={pdfSrc}
                        title="PDF"
                        loading="lazy"
                      />
                    </div>
                  )
                }

                // embed:xxx 机制
                const text = Array.isArray(children)
                  ? children.map((c) => (typeof c === 'string' ? c : '')).join('')
                  : typeof children === 'string'
                    ? children
                    : ''

                const label = text.trim()

                if (label.startsWith('embed:')) {
                  const type = label.slice('embed:'.length).trim()
                  const embedSrc =
                    normalizedHref.startsWith('images/') || normalizedHref.startsWith('pdfs/')
                      ? `${base}${normalizedHref}`
                      : normalizedHref

                  return (
                    <div className={`embed embed-${type}`}>
                      <iframe
                        src={embedSrc}
                        title={type}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )
                }

                // 站内项目路由
                if (safeHref.startsWith('/projects/')) {
                  return <Link to={safeHref}>{children}</Link>
                }

                // 站点静态资源
                if (normalizedHref.startsWith('images/') || normalizedHref.startsWith('pdfs/')) {
                  const fixedHref = `${base}${normalizedHref}`
                  return (
                    <a href={fixedHref} {...props} target="_blank" rel="noreferrer">
                      {children}
                    </a>
                  )
                }

                // 外链
                return (
                  <a href={safeHref} {...props} target="_blank" rel="noreferrer">
                    {children}
                  </a>
                )
              },
            }}
          >
            {mdText}
          </ReactMarkdown>
        )}

        {!loading && (!mdKey || !mdModules[mdKey]) && (
          <p>Markdown content not found for this project.</p>
        )}
      </section>
    </div>
  )
}

export default ProjectDetail