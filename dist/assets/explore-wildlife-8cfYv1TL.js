const n=`# Explore & Conserve Wildlife – 野生动物探索与保护平台  \r
*交互式数据平台 · 数据可视化（Data Visualization）· Google Maps API · 团队项目 · 我担任组长*\r
\r
---\r
\r
## 🧭 项目概览  \r
\r
**Explore & Conserve Wildlife** 是一个结合 *野生动物探索* 与 *保护意识提升* 的交互式网页平台，核心目标是让公众能够轻松查看当地的动植物分布、了解物种保护状况，并通过上传记录参与公民科学（Citizen Science）。\r
\r
项目灵感来自澳大利亚在 2019–2020 山火后的生态危机，我们希望通过技术方式提升大众对本地生物多样性的了解。\r
\r
---\r
\r
## 👨‍💼 我在项目中的主要贡献（Team Leader & Developer）\r
\r
- **项目负责人（Team Leader）**：制定整体方向、分配任务、组织周会  \r
- **数据处理负责人（Data Processing）**：  \r
  - 清洗、筛选并整合来自政府公开数据 API 的生态数据  \r
  - 建立 *allowed species dataset* 并进行数据缓存策略（localStorage）  \r
- **核心功能开发（Front-end Development）**：  \r
  - Google Maps API 互动地图  \r
  - 自定义物种图标、信息窗口（InfoWindow）、鼠标悬浮展示  \r
  - 物种详情页跳转、URL 参数传递  \r
- **参与多页面结构开发（HTML/CSS/JS + PHP 基础功能）**\r
\r
> 我负责了项目中最关键的“数据 → 地图 → 用户交互”的链路开发，是整个网站能运作的核心技术部分。  \r
\r
---\r
\r
## 🌱 项目背景与目标  \r
\r
### 为什么要做这个平台？\r
- 气候变化导致生态环境恶化，本地动植物面临栖息地缩小与灭绝风险  \r
- 大众缺乏“认识物种 + 了解保护状况”的便捷工具  \r
- 公民科学（Citizen Science）在环保领域越来越重要  \r
\r
### 平台的愿景  \r
打造「人人都能探索、学习并贡献数据」的野生动物生态平台，促进：  \r
- 本地物种认知  \r
- 公共参与保护  \r
- 学术界与公众之间的信息桥梁  \r
\r
---\r
\r
## 🎯 目标用户（Target Audience）\r
\r
- 自然爱好者、户外旅行者  \r
- 学生与教育者（学校生态课程）  \r
- 保护组织、研究人员  \r
- 对野生动物有兴趣的普通公众  \r
\r
用户需要：  \r
- 直观查看物种分布  \r
- 获得简短易懂的科普信息  \r
- 通过手机随时探索并贡献记录  \r
- 建立自然相关的社区交流空间  \r
\r
---\r
\r
## 🧩 核心功能（Core Features）\r
\r
### 1. **互动地图（Interactive Map + Google Maps API）**\r
- 基于公开数据自动绘制物种位置  \r
- 点击图标查看名称、习性、保护状态  \r
- 悬浮显示自定义 InfoWindow  \r
- 通过 URL 参数跳转到物种详情页  \r
- 使用 localStorage 做数据缓存，提高加载速度  \r
\r
### 2. **地图导航（Map Navigation）**\r
- 用户在地图上设置起点 & 终点  \r
- 自动计算路线与距离  \r
- 使用 DirectionsService + DirectionsRenderer 绘制路线  \r
\r
### 3. **物种信息页（Species Information）**\r
- 搜索栏（Search）与自动滚动定位  \r
- 动态卡片：图片 / 时间 / 坐标 / 上传者 / 描述  \r
- Hover 预览（鼠标悬停显示简介）  \r
- 支持“报告动物目击”（Report Sighting）弹窗提交  \r
\r
### 4. **用户贡献内容（User-Generated Content）**\r
- 用户可上传照片、地点、描述  \r
- 形成公民科学记录库  \r
- 与社区论坛结合（Forum）构建自然爱好者交流空间  \r
\r
### 5. **物种保护数据可视化（Conservation Data Visualization）**\r
- 使用图表展示物种保护状态（如濒危比例、区域分布）  \r
- 提升公众对保护议题的认知\r
\r
---\r
\r
## 📝 设计与迭代过程（Design & Iteration）\r
\r
### 设计理念（Design Philosophy）\r
- 用户中心（User-Centered Design）  \r
- 信息简洁与视觉友好并重  \r
- 移动端优先（Responsive Design）  \r
- 强调“探索感”与“学习体验”  \r
\r
### 原型开发（Prototyping）\r
- 纸面原型（Paper Prototype） → Figma Lo-fi → Figma Hi-fi  \r
- MVP 包含三大页面：互动地图 / 导航 / 物种信息  \r
\r
### 用户测试（User Testing）\r
共 5 位用户参与测试，主要发现：\r
- 地图导航易用，但物种信息页过长  \r
- 上传入口需要更明确的提示  \r
- 用户强烈希望更丰富的教育内容  \r
\r
对应迭代改善：\r
- 调整物种信息布局、提升可读性  \r
- 上传表单加入确认反馈  \r
- 地图缩放体验优化  \r
\r
---\r
\r
## 💻 技术实现（Technical Implementation）\r
\r
### Google Maps 交互地图（核心亮点）\r
- 动态生成 marker、物种图标分类  \r
- 自定义 InfoWindow（显示简介 + 图片）  \r
- 鼠标悬停 / 点击事件触发跳转  \r
- 数据过滤（filterData）保证独特性（只显示一次）  \r
\r
### 数据缓存策略（Performance Optimization）\r
- 首次请求 → 缓存至 localStorage  \r
- 下次访问直接读取缓存  \r
- 显著减少网络延迟  \r
\r
### 物种搜索系统\r
- 输入名称 → 匹配 DOM → 自动滚动定位  \r
- 视觉高亮标记匹配内容  \r
\r
### 响应式标题（Responsive Headers）\r
- 屏幕宽度 < 720px 自动切换为短标题 “ECW”\r
\r
### PHP 页面（基础后端功能）\r
- 访客计数器：记录 & 展示访问次数  \r
- 使用文件系统（counter.txt）存储  \r
- HTML + CSS + PHP 打造小型数据展示页  \r
\r
---\r
\r
## 🔧 遇到的挑战与解决方案\r
\r
### 1. **平台互动性不足 → 增强功能深度**\r
- 评审建议增加沉浸体验  \r
- 我们扩展设想了 AR、AI 分析、生态变化可视化等长期路线  \r
\r
### 2. **目标用户定位不清 → 深化用户研究**\r
- 通过访谈和角色模型重新聚焦用户  \r
- 优化故事版、用户流（User Flow）  \r
\r
### 3. **环保主题表达弱 → 强化视觉与内容叙事**\r
- 增加保护状态图标、科普内容与图表  \r
- 明确“探索 → 认知 → 行动”的平台逻辑  \r
\r
### 4. **技术能力不足（JS & PHP 基础）→ 团队共学提升**\r
- 组织内部 code workshop  \r
- 分工互补，共同 Debug  \r
- 成功实现导航系统、数据缓存、用户提交等关键功能  \r
\r
---\r
\r
## 📊 反思与未来改进（Reflection & Future Improvements）\r
\r
### 已完成但需要加强的部分\r
- UI/UX 需要进一步统一风格与内容结构  \r
- 物种信息应分类（减少用户的短期记忆负担）  \r
- 两张地图页可整合为一个切换模式的单页  \r
\r
### 未来计划\r
- 用户贡献数据写入真实数据库（替代静态页面存储）  \r
- 完整上线 PHP 页面的数据可视化  \r
- 增加错误提示、表单字符限制  \r
- 主页加入“首次使用说明”（Onboarding）\r
\r
---\r
\r
## 🏁 项目总结  \r
\r
这个项目让我获得了从 **数据处理 → 前端交互 → 用户测试 → 团队管理** 的完整经验。\r
\r
我学到的核心能力包括：\r
\r
- 将政府开放数据转化为可探索的信息图层  \r
- 使用 Google Maps API 构建复杂交互  \r
- 运用 UCD 设计信息结构和视觉呈现  \r
- 在团队中领导任务分配、迭代节奏与版本管理  \r
\r
这个项目不仅展示了技术能力，也体现了我在**环境保护、数据可视化与交互设计**领域的热情与专业性。\r
\r
`;export{n as default};
