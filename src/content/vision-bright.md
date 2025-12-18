# Vision Bright – AR 智能眼镜交互端原型（UQ HCI Lab 研究实习）

> *2025.01–2025.02 · 昆士兰大学 UQ HCI Lab · Research Intern（研究实习生）*  
> *Advisor: Dr. Peter Worthy · 项目代码：Vision Bright*  
> *项目地址：<https://github.com/FreyProcyon/Vision_bright>*

---

## 🧭 项目概览（Project Overview）

**Vision Bright** 是我在 **昆士兰大学 UQ Human-Computer Interaction Lab** 进行的 6 周暑期科研实习项目，目标是为一款集成 **眼动追踪（Eye Tracking） + 微手势（Micro Gestures）+ 语音助手（Voice Assistant）+ 增强现实（AR）** 的智能眼镜设计一套 **多模态交互界面原型**。

项目聚焦以下问题：

- 用户在 **多任务（multitasking）和高认知负荷场景** 下，很难在不打断当前任务的前提下切换应用、记录信息或获取辅助信息  
- 现有智能穿戴设备常见痛点：  
  - 操作流程复杂、交互不直观  
  - 在教室、图书馆、实验室等安静环境下，**语音控制社交负担大**  
  - AR 叠加信息容易造成视觉噪音和注意力分散

Vision Bright 的目标是：  
> 通过眼动 + 微手势 + 低干扰 HUD（Heads-Up Display）设计，  
> 为学习、科研与移动通勤场景提供 **高效、低打扰、可持续专注** 的交互体验。

---

## 👨‍💻 我的角色与职责（My Role）

在这次 6 周研究实习中，我主要承担：

- **用户研究负责人（User Research Lead）**
  - 设计问卷与半结构化访谈提纲  
  - 组织数据收集与整理，构建目标用户画像与典型使用场景
- **交互流程与多模态设计（Interaction & Multimodal Design）**
  - 设计基于 **眼动、手势与语音** 的组合交互流程  
  - 定义“凝视选择（gaze selection）”“眨眼拍照（blink to capture）”“微手势确认（micro-gesture confirm）”等核心交互模式
- **高保真原型与前端开发（Hi-fi Prototype & Front-end）**
  - 使用 Figma / 前端编码制作 **高保真交互原型**  
  - 在 **React.js** 基础上实现网页端原型，模拟智能眼镜的 HUD 视图与交互逻辑
- **设计文档撰写与 HCI 原则落地**
  - 撰写设计方案文档，系统化整理用户需求、交互模型与设计合理性  
  - 确保界面设计符合 **人机交互（HCI）原则** 与基本 **无障碍（Accessibility）** 要求  

---

## 👥 用户研究与需求洞察（User Research & Insights）

在实习早期，我主导了一轮 **用户研究（User-Centred Research）**，结合：

- **在线问卷（Survey）**：共收集 **39 份有效样本**，主要为 18–24 岁大学生与部分年轻从业者，聚焦他们在日常学习/工作中使用智能手表、智能眼镜等穿戴设备的习惯、痛点与期待
- **半结构化访谈（Semi-structured Interviews）**：共访谈 10 位参与者，涵盖本科生、研究生、实验室助理、内容创作者等，深入了解：  
  - 如何在真实场景中使用或想象使用智能穿戴  
  - 对语音 / 手势 / 眼动等交互方式的偏好与顾虑  
  - 对“多任务切换、专注维持、安静场景操作”的真实需求

> 🖼️ *插图占位：在此插入一张「问卷结果可视化图（年龄、职业、设备使用频率）」或 Miro Affinity Diagram 截图，用于展示用户研究规模与主题聚类。*

### 关键痛点（Key Pain Points）

根据问卷 + 访谈 + 产品评测梳理，我参与总结了以下核心主题： 

- **Workflow Efficiency（工作流效率）**  
  - 在实验室、写论文、写代码时频繁在不同 App / 屏幕间切换，容易“断线”
- **Ease of Use（易用性）**  
  - 现有交互方式（抬手点按、复杂手势）步骤多、不直观，尤其在多任务场景下负担重  
- **Social Comfort（社交舒适度）**  
  - 许多受访者表示：在图书馆、课上、会议中对使用语音助手非常抗拒  
- **Information Capture & Focus Maintenance（信息捕获与专注维持）**  
  - 很难在不打断当前任务的前提下 **快速记录关键信息**，之后又难以结构化回顾  
- **Hands-Free Interaction（免手操作）**  
  - 实验操作、骑行、搬运时双手被占用，仍希望能查看关键信息或执行简单操作  

> 🧾 *表格占位：可以插入文档中「Key Pain Points & Unmet Needs」表格截图，直观展示 Theme / Core Pain Point / Unmet Need 对应关系。*

---

## 🎯 设计目标与概念（Design Goals & Concept）

基于以上洞察，我与导师和团队一起，将 Vision Bright 的设计目标总结为：

1. **低干扰（Low-distraction）**  
   - 杜绝“整屏 AR 信息淹没视野”，HUD 只显示有限且与当前任务高度相关的信息  
2. **免手或微操作（Hands-free / Micro Gesture）**  
   - 以 **眼动 + 微手势** 为主输入渠道，语音为可选补充  
3. **支持专注与任务恢复（Focus & Context Restoration）**  
   - 自动记录任务关键节点，帮助用户在多任务切换后快速“找回刚才做到哪一步”  
4. **符合社交情境（Socially Acceptable）**  
   - 在图书馆、教室、实验室等环境中，用户可以使用 **微动作 / 凝视 / 眨眼** 完成操作，而不需要出声  

> 🖼️ *插图占位：在此放一张「目标用户画像 + 使用情境」示意图，例如学生在教室 / 研究生在实验室 / 骑手在路上佩戴眼镜的场景草图或 Storyboard。*

---

## 🧩 交互与信息架构（Interaction & IA）

### 多模态输入设计（Multimodal Interaction）

在实习期间，我参与定义并优化了以下几类输入通道：

- **眼动与凝视（Gaze / Dwell）**
  - 短停留：预览或高亮目标  
  - 长停留 / 眨眼：确认或捕捉（例如“眨眼拍照（Blink to Capture）”）
- **微手势（Micro Gestures）**
  - 轻点镜腿、指尖合拢、轻微点头等，用于确认选择、翻页或收起面板
- **语音指令（Voice Command）**
  - 作为在私人环境中的补充，用于模式切换、复杂命令输入
- **HUD 面板（HUD Task Panel）**
  - 顶部或侧边浮动信息区域，用于显示当前任务、提醒、导航等轻量信息

> 🖼️ *插图占位：插入一张「概念结构图」，展示 Input Channels（Eyes / Gestures / Voice）→ HUD / AR Overlay → Logging/Analytics 的关系。*

### 典型 HUD 结构（HUD Layout）

我在原型中采用“**桌面类 HUD（Desktop-like HUD）+ 浮动工具条**”的隐喻设计：

- 右上角：任务状态、当前模式、时间  
- 视野边缘：浮动的 Quick Actions（拍照、识别、阅读模式切换）  
- 中央区域：尽量保持清洁，只在必要时呈现 AR 导航箭头或重点提示  

这既符合用户对桌面操作系统的 **既有心智模型（Mental Model）**，也有利于控制视觉负荷。

---

## 🧪 关键场景与交互示例（Key Scenarios & Interactions）

### 场景一：课堂/自习中的信息捕获

- 用户：大学生 Lisa  
- 痛点：老师讲解思路快、板书密集，拍照手机太打扰，手写跟不上  
- Vision Bright 提供：
  - **眨眼拍照（Blink to Capture）**  
  - 自动按课程/时间/地点为截图打标签，课后在 Timeline 中回顾

> 🖼️ *插图占位：插入“课堂场景 HUD 截图”，例如：黑板内容 + HUD 上显示“Captured: Design Class – Week 5”。*

### 场景二：多任务写作 / 编程中的任务恢复（Task Anchoring）

- 用户：研究生 Kevin  
- 痛点：频繁在论文、邮箱、资料间切换，经常忘了上一步做到哪里  
- Vision Bright 提供：
  - 每次任务切换前后自动记录“关键视图 + 位置”  
  - 再次回到任务时，在 HUD 提示“你上次看到这里”，支持一键回溯

### 场景三：安静环境下的“无声操作”

- 用户：在图书馆的 Amy  
- 痛点：不愿在安静环境中对设备说话，语音控制社交负担大  
- Vision Bright 提供：
  - 凝视单词 + 轻触镜腿 → 浮窗显示释义  
  - 眨眼翻页 / 短停留高亮段落，整个过程不需要发声

### 场景四：实验室 / 户外的 AR 辅助操作

- 用户：生物实验室博士 / 户外观察者 Sophie  
- 痛点：双手被占用时难以查步骤 / 识别物种  
- Vision Bright 提供：
  - AR 步骤条（实验模式）：在视野侧边显示下一步操作，完成后做一个微手势确认  
  - 物种识别模式：凝视目标 + 确认 → 显示名称、危险等级和简短说明

> 🖼️ *插图占位：插入“实验室 / 户外 AR overlay”界面图，如试管旁边的步骤提示或自然场景中的物种识别卡片。*

---

## 💻 原型实现与技术栈（Prototype & Tech Stack）

在原型实现阶段，我参与了 **高保真交互原型制作**，并基于 **React.js** 实现了一个网页端模拟界面：

- **技术栈**
  - React.js（组件化实现 HUD 与各模式视图）
  - HTML / CSS / JavaScript（布局与交互动效）
- **核心原型模块**
  - Blink to Capture（眨眼拍照逻辑模拟）
  - Micro Gesture Simulation（微手势确认按钮）
  - Voice Command Input（语音命令输入框 / 模拟唤醒 “Hi Vision”）
  - HUD Task Panel（任务面板：任务列表 + 模式切换）
  - AR Navigation Overlay（导航叠加箭头）

> 🧩 *插图占位：插入 2–4 张 React 原型运行截图，例如：  
> 1）Blink to Capture 界面  
> 2）Quick Actions + HUD 面板  
> 3）识别模式输出卡片  
> 4）导航模式叠加箭头*

在网页端原型中，我通过 React 状态管理模拟了“模式切换 + HUD 更新 + 简单日志记录”的流程，让非技术背景的用户也能在浏览器中体验 Vision Bright 的交互逻辑。

---

## 🧠 设计原则与无障碍考虑（HCI & Accessibility）

在设计过程中，我系统性地参考并应用了多项 **HCI 经典原则** 与 **无障碍设计（Accessibility）** 要求： 

- **Fitts’s Law**：通过眼动与微手势缩短“指向目标 → 完成操作”的路径  
- **Miller’s Law**：HUD 中同时呈现的信息控制在 3–5 组，避免短期记忆过载  
- **Jakob’s Law**：大量借用用户熟悉的桌面 / 手机隐喻（如相机、任务栏）  
- **Gestalt Principles**：通过分组、对齐和空间距离强化信息结构感  
- **Accessibility**
  - 高对比度 HUD 配色，适应不同光照环境  
  - 支持非语音输入方式，照顾在安静场景 / 语言障碍 / 听力障碍的用户  
  - 通过减少步骤和视觉噪音，降低认知负荷

---

## 🌱 收获与反思（Reflection）

这次 6 周的 UQ HCI Lab 研究实习，让我在以下方面得到系统训练：

- **从 0 到 1 的用户研究执行力**
  - 独立规划问卷 + 访谈 → 主题归纳 → 用户需求表与 User Stories  
- **多模态交互设计能力**
  - 将眼动、微手势、语音与 AR HUD 整合在一个统一的交互模型下  
- **研究与工程的连接**
  - 把研究洞察真正“落地”为 **可运行的 React 原型**，而不是停留在 Figma 和文档
- **团队协作与科研表达**
  - 在导师的指导下撰写设计文档，学习如何用学术化、结构化的方式阐述设计决策与 HCI 原则支撑

在我的个人网站中，这个项目将作为「**科研实习 + 多模态交互设计 + React 原型开发**」的代表，展示我在 **人机交互研究、前端原型与智能硬件交互设计** 方向的综合能力。

---
