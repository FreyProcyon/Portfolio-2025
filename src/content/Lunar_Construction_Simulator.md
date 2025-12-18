# 月球建造模拟 – 3D 风格 VR 建模工具（个人项目）

> *2025.07 – 2025.10 · Unity（C#）+ Meta Interaction SDK · 个人项目*  
> *项目链接：<https://github.com/FreyProcyon/DECO7230_project>*  
> *演示视频：<https://www.bilibili.com/video/BV12cUCBHEha>*

---

## 🧭 项目概览（Project Overview）
![lunar-construction-simulator](/images/lunar-construction-simulator.png)

**月球建造模拟（Lunar Construction Simulator）** 是一个运行在 **Meta Quest 3** 上的沉浸式 VR 建模工具，灵感来自 Rhino/CAD 的建模流程，面向未来 **月球工程与远程建造** 场景。

设想用户是远程操作月球 3D 打印车（3D-printing rover）的工程师，通过第一人称视角在月面环境中完成类似 Minecraft 的 **几何建造与结构规划**：

- 在三维空间中快速创建立方体、球体、圆柱和地面平面（cube/sphere/cylinder/plane）  
- 通过网格吸附（grid snapping）与堆叠（stacking）形成结构  
- 对已有结构进行移动（Move）、旋转（Rotate）、缩放（Scale）与删除（Delete）  
- 使用材质切换（Change Material）表达“支撑结构 / 外壳 / 金属接头”等工程语义  

---

## 👨‍💻 我的职责（My Role）

该项目为 **个人项目**，在 2025.07–2025.10 期间独立完成，主要工作包括：

- **系统架构与开发**
  - 使用 **Unity Hub + C#** 搭建整体工程  
  - 集成 **Meta XR Interaction SDK / Building Blocks** 实现手部交互、Poke 交互与 Teleport 移动  
  - 实现创建、选择、移动、旋转、缩放、删除与材质切换等完整建模流程
  - 设计基于 **Quick Actions UI + Poke Button** 的工具条  
  - 规划“先预览再放置”的建模闭环：Create → Preview/Snap → Place → Edit → Change Material  
- **用户测试与数据分析**
  - 设计并执行基于 Task-based + Think-aloud 的可用性测试（N=10）  
  - 通过问卷 Likert 量表收集易用性、Teleport 舒适度、预览/吸附帮助程度等评分  
  - 总结关键痛点并据此进行数据驱动迭代  
- **文档与反思**
  - 撰写测试计划（Test Plan）与最终报告（Final Report & Reflection），将发现与改进策略系统化整理  

项目在课程评审中被评价为展示了扎实的 VR 交互设计与工程实践能力，最终成绩 **High Distinction（7/7）**。

---

## 🌙 原始场景与设计目标（Context & Goals）

**场景设定：**  
> “想象你是一名远程操作工程师，通过 VR 接口控制月球上的 3D 打印车，为基地建造墙体与支撑结构。” 

传统桌面建模（如 Rhino / CAD）在这种场景下面临三个问题：

1. **空间感弱**：2D 屏幕难以直观感知结构尺度与相对位置  
2. **操作映射复杂**：鼠标+键盘的多模式操作对非专业建模人员有较高门槛  
3. **缺乏“在场感”与安全感**：无法实时感知建造对象与环境（地形、遮挡）的关系  

因此，本项目的设计目标是：

- 将 Rhino/CAD 式建模流程迁移到沉浸式 VR 场景中，让“**建 → 看 → 改**”在空间里自然发生  
- 通过 **网格吸附 + 预览放置** 降低错误成本，帮助非建模专业的用户也能稳定搭建结构  
- 保持操作负担在“**少按钮、强反馈**”的水平，支持 10–15 分钟内完成上手  
![lunar-construction-simulator](/images/lunar1.png)
---

## 🧩 核心功能与交互系统（Core Features & Interactions）

### 1. 建模闭环（Modeling Loop）

在当前版本中，工具支持以下完整建模闭环：  

1. **创建（Create）**  
   - 通过 Quick Actions 面板选择几何体类型：立方体 / 球体 / 圆柱 / 平面  
   - 生成对象预览（ghost object），与网格对齐便于定位  

2. **预览与网格吸附（Preview & Grid / Stack Snap）**  
   - 对象在落地前会自动吸附到 **0.1 / 0.2 / 0.5 米** 的网格层级，支持堆叠（stacking）  
   - 用户可以观察对齐情况，确认后再完成放置  

3. **编辑（Select → Move/Rotate/Scale → Delete）**  
   - 选中后显示 Gizmo（操作手柄），分别对应移动、旋转、缩放  
   - 支持删除（Delete）以清理错误对象  

4. **材质切换（Change Material）**  
   - 通过 Material Palette 在多种预设材质间切换（如 matte/matte metal 等），  
   - 让用户在视觉上区分“结构件 / 外壳 / 连接件”，而不只是换颜色

### 2. 交互手段（Interaction Techniques）

- **Poke 交互（Poke Interaction）**  
  - 通过手指或控制器“戳”世界空间中的 UI 面板，选取工具与材质  
- **Quick Actions UI**  
  - 在工具条中集中放置常用操作（Create / Edit / Delete / Change Material）  
  - 按钮尺寸大，方便在 VR 中快速命中  
- **Teleport 移动（Teleport Locomotion）**  
  - 使用官方 Teleport 模块实现空间移动，支持在场景中来回浏览与接近结构

---

## 🔬 用户测试与关键数据（User Testing & Findings）

### 测试设计（Test Plan）

- **参与者（Participants）：** N=10，包含无建模经验、入门与高级用户（40% / 20% / 40%）  
- **方法（Method）：**  
  - Task-based + Think-aloud（任务驱动 + 思维口述）  
  - 使用屏幕录制记录手部/控制器操作与 UI 状态  
- **任务（Tasks）：**
  1. 创建不同属性的对象（不同形状 + 不同尺寸 + 不同高度堆叠）  
  2. 对已有对象执行 Move → Rotate → Scale → Delete 完整编辑流程  
  3. 为选中对象切换多种明显不同的材质，确认“看起来像材质变化而不是仅仅颜色变化”  
- **目标（Targets）：**  
  - 任务成功率 ≥ 80%  
  - 主观易用性评分 ≥ 3.5/5  
  - “无需提示即可找到关键功能”比例 ≥ 70%  

### 量化结果（Quantitative Results）

- “我可以完成给定任务”主观评分平均约 **4.2/5**（n=10）
- 预览与网格吸附的“有帮助程度”平均约 **4.3/5**（n=10）  
- Teleport 易用性平均 **3.9/5**：多数人觉得舒适，但表示对“高层结构”观察略吃力
- 材质切换易用性在尝试过的用户中为 **5/5**（n=3），说明材质被理解为“材质性质变化”，而非仅颜色变化（样本较小，有待扩大）  

### 质性发现（Qualitative Insights）

代表性反馈包括：

- “旋转应该支持 X/Y/Z 轴单独控制，并带角度步进。”  
- “放置时的灵敏度有点高，落点不够稳。”  
- “材质切换看起来像真的换了材料，不只是换颜色。”  
- “Teleport 很好用，但看高处的结构有点难。”  
- “按钮够大，但提示文字太小，而且红色让人以为是错误信息。”  

---

## 🔁 数据驱动迭代（Data-Driven Iteration）

基于测试结果，我制定了下一轮的迭代方向：  

1. **精度控制（Precision Control）**  
   - 为旋转工具增加 **X/Y/Z 轴切换** 与角度步进（如 5°/15°）  
   - 降低放置时的“下落灵敏度”，增加明确的“已吸附（snapped）”视觉反馈  

2. **垂直移动（Vertical Mobility）**  
   - 在 Teleport 之上增加 **垂直步进（vertical step）或“楼层锚点（floor anchors）”**，  
   - 方便用户靠近并观察高处结构  

3. **可发现性与可读性（Discoverability & Readability）**  
   - 放大 UI 标签文本（≥32–36 pt），避免使用错误红色作为提示文字颜色  
   - 为 Delete 和 Material Palette 增加轻量入场动画与触觉/音效确认  

4. **测量机制（Instrumentation）**  
   - 在下一版本中将任务计时与“首次发现关键功能的时间”写入工具本身，以便更精确地评估任务时长与学习曲线  

---

## 🎥 演示视频（Demo Video）

[embed:bilibili](https://player.bilibili.com/player.html?bvid=BV12cUCBHEha)



---

## 🌱 反思与收获（Reflection）

通过这个月球建造模拟工具，我完成了一个从 **概念设定 → 交互设计 → 工程实现 → 用户测试 → 数据驱动迭代** 的完整闭环：  

- 认识到 XR 的优势不只是“把桌面功能搬进 3D”，而是让 **空间视角、实时反馈与身体动作** 成为建模流程的一部分  
- 学会在 VR 项目中结合 **Jerald（Human-centered VR）、Slater & Sanchez-Vives（presence）、Fleming（material perception）** 等研究，将材质感知、可发现性与在场感转化为具体设计决策  
- 在工程层面，熟悉了 **Meta Interaction SDK** 的 Poke、Quick Actions 与 Teleport 模块，以及在 Unity 中管理一整套建模状态机  
- 在研究方法层面，第一次把 **Task-based + Think-aloud** 与在线问卷结合起来，用量化指标和原始语句共同支撑设计迭代  

在我的个人网站上，这个项目将作为 **VR 交互设计 + Unity 工程实践 + 用户研究能力** 的代表作品，展示我如何针对未来“太空建造/远程操作”场景构建一个可用且可迭代的 XR 工具原型。

---
