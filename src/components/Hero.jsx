import { useEffect, useState } from "react";

function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="heroFrame">
      {/* 背景大字：跟随滚动移动（你要的“背后的名字在滚动”） */}
      <div
        className="heroBgText"
        style={{ transform: `translate3d(${-y * 0.25}px, 0, 0)` }}
        aria-hidden="true"
      >
        <div className="bgLine">ZHUOYANG PEI</div>
      </div>

      {/* 左上角身份 */}
      <div className="heroMeta left">
        <div className="kicker">交互设计 & 前端原型</div>
        <div className="kickerMuted">XR / Unity / Web · 面向实习</div>
      </div>

      {/* 右下角滚动提示 */}
      <div className="heroMeta right">
        <div className="scrollHint">
          Scroll down
          <span className="scrollIcon" aria-hidden>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="8" x2="12" y2="22" />
              <polyline points="19 15 12 22 5 15" />
            </svg>
          </span>
        </div>
      </div>

      {/* 前景人像：sticky，滚动时保持视觉中心 */}
      <div className="heroPortrait">
        <div className="portraitCard">
          <img src="src/assets/透明底.png" alt="Portrait" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
