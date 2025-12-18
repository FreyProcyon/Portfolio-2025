# Stereotypes in Football – 足球位置刻板印象数据可视化

> *DECO7220 Information Visualisation 课程项目 · 独立完成数据分析与可视化设计*  
> *在线版本：<https://public.flourish.studio/story/3133706/>*

---

## 🧭 项目概览（Project Overview）

本项目围绕一个常见却少被量化的问题展开：  
> **为什么我们会认为“意大利盛产中后卫、西班牙出中场大师、巴西产边锋”？**  

我基于超过 20,000 名职业球员的数据，结合国家、位置与薪资三类维度，  
设计了一套 **4 步交互式数据故事**，帮助读者从“刻板印象”回到可验证的数据事实。
整个 Flourish Story 采用 **Information Seeking Mantra（Overview → Zoom & Filter → Details-on-Demand）** 的叙事结构：  
1. 全球位置概览  
2. 国家 × 位置 × 薪资 热力图  
3. 个人顶薪球员气泡图  
4. 国家–位置人才流向 Sankey 图  

---

## 👨‍💻 我的职责（My Role）

- 独立完成 **数据获取与清洗**：  
  - FIFA 世界排名、Kaggle 球员能力数据、SalarySport 薪资数据
- 设计整体 **数据故事结构与页面叙事**（信息架构 + 交互顺序）
- 在 Flourish 中实现四个交互图表及 Story 串联  
- 根据 Tufte、Munzner 等可视化原则优化视觉编码、色彩与交互模式
- 撰写设计说明文档与注释海报，对每个图表的设计决策进行反思与论证

---

## 📚 数据与问题定义（Data & Question）

**数据来源：**:

1. FIFA 男足世界排名  
2. Kaggle “Football Players Data” – 球员基础信息与能力评分  
3. Salary Sport – 五大联赛及其他主流联赛球员周薪  
4. 课程讲义与教材：Macdonald & Cordeil（信息可视化）、Munzner、Tufte 等

**核心问题：**

- “某国擅长某个位置”的大众印象，与真实职业球员分布是否一致？  
- 不同国家在不同位置上的 **产量** 与 **平均薪资** 有何差异？  
- 最高薪球员在年龄、能力与位置上呈现什么结构性特征？  
- 哪些国家在特定位置上是全球的“人才源头”？  

---

## 🧩 叙事结构与四个交互图表（Narrative & Four Interactive Charts）

### 图表 1：全球位置分布气泡地图（Position Bubble Map）

**问题：** 不同国家在各个位置上实际培养了多少顶级球员？这与我们印象中的“传统强项”是否一致？  

在首页中，我使用 **气泡地图（Bubble Map）** 展示：  

- 每个国家在“最擅长位置”上的球员数量（气泡大小）  
- 11 个合并位置（GK/CB/LB/RB/DM/CM/AM/LW/RW/ST 等）用色相区分  
- 鼠标悬停可查看「国家–位置–球员数」三元信息（Details-on-Demand）  

视觉编码遵循“**位置 > 颜色 > 大小**”的有效性层级：  
底层是地理位置，叠加颜色类别，再用面积做数量对比，帮助读者快速识别哪些国家在某些位置上明显“超产”。气泡颜色的聚集也利用了“相似律（Similarity）”形成自然的视觉簇。  

> 📊 *此处预留：嵌入交互图表 1（Position Bubble Map）的 iframe*

---

### 图表 2：薪资–国籍–位置热力图（Salary–Nationality–Position Heat Map）

**问题：** 在不同国家 & 不同位置上，球员的平均薪资水平差异有多大？哪些位置在经济回报上更“值钱”？  

第二页使用 **矩阵热力图（Heat Map）**，将：  

- 行：位置类别（Position）  
- 列：国籍（Nationality）  
- 颜色深浅：对应平均周薪（Average weekly wage，0–20k €/week）  

我添加了一个 **薪资区间筛选器（Salary Range Dropdown）**，把球员分为 Low / Medium / High / Very High 四档。选择某一档时：  

- 热力图仅重新上色并高亮该薪资段内的数据格  
- 形成类似 *Filtering + Brushing* 的联动，避免信息过载  

色彩使用单调递增的 **Sequential Blue Scale**，固定映射到完整数值区间，既减少截断坐标轴和 Lie Factor 带来的误导风险，又符合 **色盲友好（Colour-blind Safe）** 的建议。
> 📊 *此处预留：嵌入交互图表 2（Salary Heat Map）的 iframe*

---

### 图表 3：顶薪球员气泡图（Top-Salary Bubble Chart）

**问题：** 最高薪的一小撮球员，在年龄、能力与位置上有什么结构性特征？是否印证某些“明星位置偏好”？  

第三页我选取 **全球薪资最高的 30 名球员**，用气泡图展示：  

- X 轴：能力评分（Overall Rating）  
- Y 轴：年龄（Age）  
- 气泡面积：周薪（Weekly Wage），确保面积与数值成比例（Lie Factor≈1）  
- 颜色：位置类别（Position）  

为提升 **Graphical Integrity & Data-Ink Ratio**：  

- 去掉背景网格和多余装饰，只保留坐标轴与必要标签  
- 将 Tooltip 设计为完整句子，包含 rank、position、wage、age、nationality 五个字段，让读者在悬停时获得丰富信息，而视觉上仍保持极简  

交互上提供 Position / Nationality / Salary Range 过滤器，切换时触发平滑动画（Animated Transition），维持 **对象恒常性（Object Constancy）**，减轻短期记忆负担。

> 📊 *此处预留：嵌入交互图表 3（Top-Salary Bubble Chart）的 iframe*

---

### 图表 4：国家–位置人才流向 Sankey 图（Nation-to-Position Sankey Diagram）

**问题：** 从“国家”到“位置”，全球的人才流向结构是什么样的？哪些国家在特定位置上是“输出大户”？  

第四页使用 **Sankey Diagram** 将：  

- 左侧节点：国家（最多展示 20 个主要输出国）  
- 右侧节点：合并位置类别（11 个）  
- 流线宽度：该国在该位置上输出的球员数量  

这是一个典型的 **Represent Multiple Dimensions** 例子：单个图表中同时编码了国籍、位置和数量。  

交互设计包括：  

- 位置筛选下拉框：选择任一 Position 后，仅保留与该位置相关的流线，帮助读者聚焦单一位置的人才来源  
- 悬停 Tooltip 用完整句式给出 “Nation → Position → Count” 的解释，避免在多层交叉信息中迷失  

该设计有意避免 3D 柱状图等装饰性编码，遵循 Munzner 的 “**No unjustified 3D**” 原则。
> 📊 *此处预留：嵌入交互图表 4（Nation-to-Position Sankey Diagram）的 iframe*

---

## 🎨 设计原则与可视化理论（Design Principles）

在设计与实现过程中，我有意识地将课堂理论应用到具体决策中：  

- **信息寻求箴言（Information Seeking Mantra）**：  
  Overview（地图）→ Filter（热力图 + 薪资筛选）→ Details-on-Demand（气泡图与 Sankey Tooltip）  
- **图形完整性（Graphical Integrity）**：  
  避免截断坐标轴与夸大差异，确保面积与数值成正比  
- **数据墨水比（Data-Ink Ratio）**：  
  清理掉多余网格和装饰，仅保留承载数据的视觉元素  
- **视觉变量选择与层级**：  
  位置/长度编码数值，色相编码类别，面积仅作为辅助手段  
- **Gestalt 原则**：  
  利用相似性、邻近性与良好延续组织图形布局  
- **无障碍与色彩设计（Accessibility & Colour Design）**：  
  采用色盲安全（colour-blind safe）的色板，并通过 Tooltip 补充文字说明  

---

## 🌱 反思与收获（Reflection）

通过这个项目，我系统地练习了从 **数据获取 → 问题建模 → 可视化编码 → 交互设计 → 理论反思** 的完整流程：  

- 学会如何用 **可视化故事（visual narrative）** 引导非专业读者逐步理解复杂数据  
- 在实际项目中真正“落地” Tufte、Munzner 等理论，而不是停留在概念层面  
- 提升了对 **图形完整性、色彩与交互模式** 的敏感度，避免“好看但误导”的图表  
- 更深入理解了足球产业中“刻板印象、位置分工与经济回报”的关系，也为后续做体育相关设计/可视化打下数据与叙事基础  

在我的个人网站中，这个项目将作为 **数据可视化与信息设计能力** 的代表作品之一，展示我如何将 HCI 理论与体育领域兴趣结合，构建可交互的数据叙事体验。

---
