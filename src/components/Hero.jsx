import { useEffect, useMemo, useState } from "react";

function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 你给的关键词（中英混排看起来更“设计师作品集”）
  const skills = useMemo(
    () => [
      "前端", "Web", "React", "JavaScript","vite",
      "UX", "交互", "用户体验", "Figma", "原型开发", "Axure",
      "HCI", "数据迭代", "产品",
      "AIGC", "文生图", "文生视频", "Stable Diffusion", "ComfyUI",
      "XR", "VR", "Unity 3D", "AR", "U3D",
    ],
    []
  );

  // 生成 6 条轨道：交错方向 + 不同速度
  const lanes = useMemo(
    () => [
      { dir: "left",  dur: 46, size: "xl" },
      { dir: "right", dur: 58, size: "xl" },
    ],
    []
  );

  return (
    <section className="heroFrame">
      {/* 背景大字 */}
      <div
        className="heroBgText"
        style={{ transform: `translate3d(${-y * 0.5}px, 0, 0)` }}
        aria-hidden="true"
      >
        <div className="bgLine">ZHUOYANG PEI</div>
      </div>

      {/* 左上角身份 */}
      <div className="heroMeta left">
  <div className="kicker">昆士兰大学 · 交互设计硕士</div>
  <div className="kickerMuted">UQ - Interaction Design</div>

  <div className="researchWrap">
    <span className="researchLabel">研究方向：</span>
    <span className="researchLink">
      AI 驱动的 XR 意图式交互
      <span className="researchHint" aria-hidden> ⓘ</span>

      <span className="researchTooltip" role="tooltip">
        <div className="ttTitle">
          AI 驱动的 XR 意图式交互
          <span className="ttTitleSub">Intent-Based Interaction in XR</span>
        </div>

        <div className="ttBody">
          <p>
            我目前的研究聚焦于 AI 如何推动 XR 交互从“指令式（command-based）”向“意图式（intent-based）”转变。
            传统 XR 系统依赖按钮、菜单与模式切换，用户需要明确告诉系统“怎么做”；而在多模态 AI（语音理解、语义推断、上下文感知）加持下，
            XR 有机会转向更自然的交互：用户只需表达“想做什么”，系统自动推断并完成具体操作。
          </p>
          <p>
            在实践中，我围绕 <b>注视（Gaze）+ 手势（Gesture）+ 语音（Speech）</b> 等多模态输入，构建基于 AI 的 XR 交互 Demo，
            推断用户在空间环境中的操作意图（选择、移动、缩放、复制等），并在 AR / VR 场景中执行对应行为。
            系统以 Unity XR 为核心，并结合 OpenAI / Google 的多模态 API，以贴近真实产品开发的方式模拟 AI-native XR 交互体验。
          </p>
          <p>
            我同时关注交互效率、认知负荷、可控性与用户信任感，通过对比传统指令式交互与意图式交互，探索 AI 介入后 XR 体验的真实变化，
            为未来 AI-native XR 应用、空间编辑工具与沉浸式交互系统提供可落地的设计参考。
          </p>
        </div>

        <div className="ttTags">
          <span className="ttTag">XR / VR / AR</span>
          <span className="ttTag">Unity</span>
          <span className="ttTag">AI 交互</span>
          <span className="ttTag">多模态交互</span>
          <span className="ttTag">Intent-Based Interaction</span>
          <span className="ttTag">空间计算</span>
        </div>
      </span>
    </span>
  </div>
</div>


      {/* ✅ 弹幕层：背景字之上、人像之下 */}
      <div className="skillMarquee" aria-hidden="true">
        {lanes.map((lane, idx) => (
          <div
            key={idx}
            className={`skillLane ${lane.dir} ${lane.size}`}
            style={{ ["--dur"]: `${lane.dur}s`, ["--delay"]: `${-idx * 2.2}s` }}
          >
            {/* 为了无缝循环：内容复制两遍 */}
            <div className="skillTrack">
              {skills.map((s) => (
                <span key={`${idx}-${s}-a`} className="skillPill">{s}</span>
              ))}
              {skills.map((s) => (
                <span key={`${idx}-${s}-b`} className="skillPill">{s}</span>
              ))}
            </div>
          </div>
        ))}
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

      {/* 人像：最顶层 */}
      <div className="heroPortrait">
        <div className="portraitCard">
          <img src="src/assets/透明底.png" alt="Portrait" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
