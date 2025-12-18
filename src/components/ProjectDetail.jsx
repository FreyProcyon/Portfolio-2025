import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { projects } from '../projectsData'

// 1) 让 Vite 扫描 src/content 下所有 md 文件，并以“raw 文本”方式导入
//    as: 'raw' 表示导入结果是一个 string（markdown 原文）
const mdModules = import.meta.glob('../content/*.md', { as: 'raw' })

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  const [mdText, setMdText] = useState('')
  const [loading, setLoading] = useState(false)

  // 2) 根据项目的 mdFile 计算它在 mdModules 里的 key（路径必须匹配 glob 返回的 key）
  const mdKey = useMemo(() => {
    if (!project?.mdFile) return null
    return `../content/${project.mdFile}`
  }, [project])

  useEffect(() => {
    let cancelled = false

    async function loadMarkdown() {
      if (!mdKey || !mdModules[mdKey]) {
        setMdText('')
        return
      }

      setLoading(true)
      const loader = mdModules[mdKey]   // loader 是一个函数：() => Promise<string>
      const text = await loader()

      if (!cancelled) {
        setMdText(text)
        setLoading(false)
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
            // ✅ 1) 修复图片路径：/images/* -> BASE_URL + images/*
            img({ src = '', alt = '', ...props }) {
              const base = import.meta.env.BASE_URL
              const fixedSrc =
                src.startsWith('/images/') ? `${base}${src.slice(1)}` : src
        
              return <img src={fixedSrc} alt={alt} loading="lazy" {...props} />
            },
        
            // ✅ 2) 链接分流：站内路由 / 资源 / 外链
            a({ href, children, ...props }) {
              const safeHref = (href ?? '').trim()
              const base = import.meta.env.BASE_URL
        
              // 2.1 PDF：iframe 嵌入（同时修复 /docs 或 /xxx.pdf 的 base）
              const isPdf = safeHref.toLowerCase().endsWith('.pdf')
              if (isPdf) {
                const pdfSrc =
                  safeHref.startsWith('/') ? `${base}${safeHref.slice(1)}` : safeHref
        
                return (
                  <div className="embed embed-pdf">
                    <iframe src={pdfSrc} title="PDF" loading="lazy" />
                  </div>
                )
              }
        
              // 2.2 你的 embed:xxx 机制（同样修复 base）
              const text = Array.isArray(children)
                ? children.map((c) => (typeof c === 'string' ? c : '')).join('')
                : typeof children === 'string'
                  ? children
                  : ''
              const label = text.trim()
        
              if (label.startsWith('embed:')) {
                const type = label.slice('embed:'.length).trim()
                const embedSrc =
                  safeHref.startsWith('/') ? `${base}${safeHref.slice(1)}` : safeHref
        
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
        
              // 2.3 站内项目路由：/projects/... -> Link（HashRouter 下也正确）
              if (safeHref.startsWith('/projects/')) {
                return <Link to={safeHref}>{children}</Link>
              }
        
              // 2.4 站点静态资源：/images/* 或 /docs/* -> 自动加 BASE_URL
              if (safeHref.startsWith('/images/') || safeHref.startsWith('/docs/')) {
                const fixedHref = `${base}${safeHref.slice(1)}`
                return (
                  <a href={fixedHref} {...props} target="_blank" rel="noreferrer">
                    {children}
                  </a>
                )
              }
        
              // 2.5 其他情况：外链（含 http/https），新标签打开
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
