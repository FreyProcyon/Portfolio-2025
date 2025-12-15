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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
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
