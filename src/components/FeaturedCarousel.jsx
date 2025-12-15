import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../projectsData'

function FeaturedCarousel() {
  // 1) 只取 featured 项目，避免你以后项目变多还要手工改轮播
  const featured = useMemo(
    () => projects.filter((p) => p.featured),
    []
  )

  // 2) index 表示当前展示第几个
  const [index, setIndex] = useState(0)

  // 3) 防御：如果 featured 为空，直接不渲染
  if (!featured.length) return null

  const current = featured[index]

  // 4) 上一张/下一张：用取模让它循环
  const goPrev = () => setIndex((i) => (i - 1 + featured.length) % featured.length)
  const goNext = () => setIndex((i) => (i + 1) % featured.length)

  return (
    <section className="carousel">
      <div className="carousel-shell">
        {/* 点击整张图跳转到项目详情 */}
        <Link to={`/projects/${current.slug}`} className="carousel-media" aria-label={`Open ${current.title}`}>
          <img src={current.cover} alt={current.title} />
        </Link>

        <div className="carousel-content">
          <div className="carousel-title-row">
            <h2 className="carousel-title">{current.title}</h2>
            <div className="carousel-controls">
              <button type="button" className="icon-btn" onClick={goPrev} aria-label="Previous">
                ‹
              </button>
              <button type="button" className="icon-btn" onClick={goNext} aria-label="Next">
                ›
              </button>
            </div>
          </div>

          <p className="carousel-desc">{current.shortDescription}</p>

          <div className="tag-row">
            {current.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 小圆点指示器 */}
      <div className="carousel-dots" aria-label="Carousel navigation">
        {featured.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${p.title}`}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedCarousel
