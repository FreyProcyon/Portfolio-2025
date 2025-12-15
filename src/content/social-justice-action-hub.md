# Social Justice Action Hub – 青年社会议题行动平台  
*个人前端项目 · HTML/CSS/JavaScript · News API · 响应式设计 · 无障碍设计（Accessibility, WCAG 2.2）*

---

## 🧭 项目概览

**Social Justice Action Hub** 是一个面向 Z 世代（Generation Z）的社会议题行动平台概念网站，核心目标是：

- 帮助年轻用户获取**气候行动、反种族歧视、性别平权**等左翼社会议题的最新资讯  
- 通过**行动指南和线上资源**鼓励他们参与真实世界的社会行动  
- 兼顾 **多元与包容（Diversity & Inclusion）** 与 **无障碍（Accessibility, WCAG 2.2）** 设计理念 :contentReference[oaicite:0]{index=0}  

这是我最早一批从**需求分析 → UX 设计 → 视觉规范 → HTML/CSS/JS 实现**完整走完流程的个人网站项目之一。

---

## 👩‍💻 我在项目中的角色与贡献

- **独立设计与开发**整套网站原型与静态实现（无框架，纯 HTML/CSS/JavaScript）
- 撰写 **Website Design Proposal** & **Implementation Rationale**，从客户简报、用户分析到实现偏差说明   
- 负责：
  - 网站信息架构与 Sitemap 设计（Home / Action Hub / Resources & Tools / Community Forum / About） :contentReference[oaicite:2]{index=2}  
  - 品牌视觉与 Style Guide（蓝色系品牌色、字号层级、按钮与卡片组件）
  - JavaScript **动态新闻模块**（News API 调用与卡片渲染）
  - **响应式导航栏与页脚**（Desktop 导航 + Mobile 汉堡菜单）
  - 基于 WCAG 2.2 的基础无障碍实践：颜色对比、表单可用性、可读排版

---

## 🌱 项目背景：客户与目标用户

### 客户与商业目标

- 客户是一位拥有多家线下门店的创业者，希望将业务扩展到线上  
- 采用 **Freemium 模式（免费 + 未来付费升级）**：  
  - 当前提供免费的内容与工具  
  - 保留未来扩展高级功能的空间 :contentReference[oaicite:3]{index=3}  

### 目标用户（Generation Z）

- 年龄：18–35 岁，以学生、青年社运者、教育工作者、社区组织者为主  
- 共同特征：
  - 关注气候行动、人权、女性主义、原住民权利等议题  
  - 习惯通过**社交媒体与数字平台**获取信息  
  - 希望快速、直观地了解“**我现在能做什么**”

---

## 🧩 网站结构与核心功能

### 1. 首页（Home）

- 聚焦一个核心信息：**“赋能年轻人参与社会行动”**  
- 模块包含：
  - 核心 Banner（主视觉 + 号召行动文案）
  - 最新博客 / 活动卡片（Card Layout）
  - 快速入口：Action Hub / Resources & Tools / Community Forum :contentReference[oaicite:4]{index=4}  

### 2. 行动中心（Action Hub）

- 设计为用户参与社会行动的核心页面：
  - 展示当前的活动、联署、志愿者机会
  - 以卡片 + 按钮形式呈现“立即参与”的具体步骤
- 技术上预留结构，方便未来接入真实活动数据（当前为静态示例）

### 3. 资源与工具（Resources & Tools）

- 为用户提供：
  - 议题背景文章、行动指南（How-to Guides）
  - 可下载资源（Downloadable Resources）
  - 交互式小工具（Interactive Tools）的位置结构预留 :contentReference[oaicite:5]{index=5}  

### 4. 社区论坛（Community Forum）

- 规划为：
  - 年轻用户交流经验、分享故事的空间  
  - 通过话题分类、标签与搜索帮助用户找到相关讨论  
- 在当前版本中以页面结构和导航入口形式表现，后续可接后端与真实登录系统

### 5. 关于与影响力（About & Impact）

- 介绍平台的使命、愿景、团队与合作伙伴  
- 展示过往活动成果与透明度（Transparency Reports），提升信任度

---

## 🎨 视觉与品牌设计（Style Guide）

### 品牌定位与 Logo

- Logo：简化的**举拳图标**，象征团结与抗争精神，但避免传统红旗等强意识形态符号，更贴近当代多元社会议题 :contentReference[oaicite:6]{index=6}  
- 设计目标：  
  - 现代、简洁、移动端友好  
  - 在不同分辨率与设备上保持清晰可辨识

### 字体与排版

- 字体：**Inter**（现代 Sans-serif，适合屏幕阅读）  
- 标题层级：
  - H1：40px / 44px
  - H2：32px / 36px
  - Sub-heading：24px / 28px
  - 正文：18px / 22px :contentReference[oaicite:7]{index=7}  

### 颜色系统

- 品牌蓝色系：  
  - 深蓝：`#102759`, `#0511F2`（信任、权威、严肃社会议题）  
  - 亮蓝：`#3E6BF2`, `#BDCBF2`（活力、年轻、数字化）  
- 辅助色：
  - 黑：`#000000` / 白：`#FFFFFF` / 灰：`#DFDFDF`  
- 高对比度设计以满足 **WCAG 对比度要求**，兼顾可读性与审美 :contentReference[oaicite:8]{index=8}  

### UI 组件

- 统一的按钮样式：
  - Primary / Secondary / Disabled 三种状态  
- 卡片（Card）组件：
  - 大图 + 标题 + 摘要 + 「Read More」按钮，用于新闻与博客列表  
- 表单与单选按钮（Radio Button）、Modal 弹窗、上传区域等组件均按 Style Guide 设计 :contentReference[oaicite:9]{index=9}  

---

## 💻 技术实现亮点（HTML/CSS/JavaScript）

### 1. News API 动态新闻流

- 使用 **JavaScript + Fetch API** 调用 **News API** 获取与社会正义相关的最新新闻 :contentReference[oaicite:10]{index=10}  
- 将返回数据转成：
  - 新闻卡片：标题 / 发布时间 / 图片 / 描述 / “Read More” 外链  
  - 动态插入 DOM，使首页与 Action Hub 保持“活内容”状态  
- 意义：
  - 满足 Gen Z 对“及时、有针对性信息”的需求  
  - 支持平台成为议题聚合入口，而不是静态宣传页

### 2. 响应式导航与页脚

- 顶部导航栏：
  - 桌面端：水平导航 + 清晰标签  
  - 移动端：折叠为 **汉堡菜单（Hamburger Menu）**，避免挤压空间   
- 固定顶部导航（Sticky Navigation），保持网站可达性与方向感  
- 页脚只保留必要信息：版权、组织简介、联系方式与社交媒体图标，避免杂乱

### 3. 响应式布局与可用性

- 使用 CSS 媒体查询（Media Queries）适配不同屏幕宽度  
- 表单、按钮、输入框：
  - 增大触控区域，提高移动端点击准确率  
  - 保证标签、占位提示与出错信息清晰可见   

### 4. 无障碍与多元设计（Accessibility & Diversity）

- 基本遵守 **WCAG 2.2** 指南：  
  - 文本与背景颜色高对比度  
  - 图像配置 `alt` 文本，方便屏幕阅读器使用  
  - 标题层级清晰（H1/H2/H3），利于助读工具解析  
- 内容层面避免刻板印象，体现在文案与图像选择上，强调文化多元性 :contentReference[oaicite:13]{index=13}  

---

## 🧠 遇到的挑战与解决方案

### 1. 第一次使用 JavaScript 做 API 集成

- 困难：
  - 不熟悉异步请求、JSON 数据解析与 DOM 动态渲染  
- 解决：
  - 将功能拆成小块：请求函数、渲染函数、错误处理  
  - 借助 ChatGPT 理解复杂代码片段含义，再手动重写与注释 :contentReference[oaicite:14]{index=14}  

### 2. 响应式与无障碍设计的复杂度

- 需要同时兼顾：
  - Desktop 布局美观  
  - Mobile 可用性  
  - 颜色对比、字号、交互提示等无障碍要求  
- 解决：
  - 通过持续调试 Media Queries 与对比度  
  - 参考 WCAG 说明，并根据老师与同学的反馈微调样式   

### 3. 时间管理与模块化开发

- 同期还有其他课程（如 DECO7180）作业，时间压力大 :contentReference[oaicite:16]{index=16}  
- 应对方式：
  - 将网站拆成模块：导航、新闻区、表单、页脚等分别开发  
  - 每个模块单独测试与文档化，保证可维护性与可扩展性

---

## 🔍 反思与收获

- 这是我第一次在**没有框架的情况下**，用原生 HTML/CSS/JS 完成带有 **动态内容与响应式布局** 的完整网站  
- 从这个项目中，我掌握了：
  - 如何从 **客户简报 → 用户研究 → 信息架构 → Style Guide → 前端实现** 的完整流程  
  - 如何用最基础的 JavaScript 技术实现 **API 数据获取与动态渲染**  
  - 如何在设计早期就考虑 **无障碍（Accessibility）与多元包容（Diversity & Inclusion）**  
- 这些经验在我后续的项目（如地图数据可视化、野生动物平台等）中，成为非常重要的技术与设计基础

---
