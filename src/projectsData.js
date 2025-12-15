// src/projectsData.js
import lunarCover from './assets/covers/lunar-construction-simulator.png'
import wearwellCover from './assets/covers/wearwell.png'
import wildlifeCover from './assets/covers/explore-wildlife.png'
import visionCover from './assets/covers/vision-bright.png'
import socialCover from './assets/covers/social-justice-action-hub.png'
import footballCover from './assets/covers/stereotypes-in-football.png'
import earlyCover from './assets/covers/early-portfolio-2022-2023.png'
import stepCover from './assets/covers/step-together.png'



export const projects = [
  {
    slug: 'lunar-construction-simulator',
    title: '月球建造模拟 – 3D 风格 VR 建模工具',
    shortDescription:
      '基于Meta Quest开发的Minecraft风格 VR 建模工具，模拟工程师通过 VR 远程在月面规划与搭建结构。',
    year: '2025',
    tags: ['XR Interaction', 'Unity 3D', 'VR'],
    mdFile: 'Lunar_Construction_Simulator.md',
    cover: lunarCover,
    featured: true,
  },
  {
    slug: 'wearwell',
    title: 'WearWell – 社交化跑步伙伴平台',
    shortDescription:
      '围绕“找跑步伙伴 + 约时间太麻烦”设计的社交跑步平台，串起“穿戴数据 → 跑步档案 → 伙伴匹配 → 共同目标”。',
    year: '2025',
    tags: ['Wearable deviece', 'HTML+CSS', 'Javascript'],
    mdFile: 'WearWell.md',
    cover: wearwellCover,
    featured: true,
  },
  {
    slug: 'step-together',
    title: 'Step Together – 公交站互动地砖游戏',
    shortDescription:
      '围绕 UQ Lakes 公交站候车体验设计的团队协作地砖游戏，用互动游戏增进弱社交，同时通过全场变红和屏幕提示防止错过巴士。',
    year: '2025',
    tags: ['React native', 'Expo', 'Javascript'],
    mdFile: 'WearWell.md',
    cover: stepCover,
  },
  {
    slug: 'explore-wildlife',
    title: 'Explore & Conserve Wildlife – 野生动物探索与保护平台',
    shortDescription:
      '在澳大利亚昆士兰公开生态数据基础上做的交互式网页平台，用户可以在地图上查看当地物种分布、了解保护状态，并通过上传目击记录参与公共科研贡献。',
    year: '2024',
    tags: ['HTML+CSS', 'Javascript', 'Interaction Design'],
    mdFile: 'explore-wildlife.md',
    cover: wildlifeCover,
  },
  {
    slug: 'vision-bright',
    title: 'Vision Bright – AR 智能眼镜交互端原型',
    shortDescription:
      '为集成眼动追踪、微手势与语音助手的 AR 智能眼镜设计交互界面，面向室内工作学习和室外科研实践等多任务场景，强调低干扰的信息呈现。',
    year: '2024',
    tags: ['AR', 'React', 'HCI Research'],
    mdFile: 'vision-bright.md',
    cover: visionCover,
  },
  {
    slug: 'social-justice-action-hub',
    title: 'Social Justice Action Hub – 青年社会议题行动平台',
    shortDescription:
      '一个面向 Z 世代的社会议题网站概念，用新闻API聚合最新气候行动、反歧视等内容，并用清晰的信息架构和响应式设计支持行动指南与资源查找。',
    year: '2024',
    tags: ['HTML+CSS', 'Javascript', 'Social Computing'],
    mdFile: 'social-justice-action-hub.md',
    cover: socialCover,
  },
  {
    slug: 'stereotypes-in-football',
    title: 'Stereotypes in Football – 足球位置刻板印象数据可视化',
    shortDescription:
      '用 Flourish 做的一套交互数据故事，探讨“某国擅长某个位置”的足球刻板印象与真实数据是否一致。从多源数据清洗出国家–位置–薪资结构，设计了四个互相串联的交互图表（地图、热力图、气泡图、Sankey）',
    year: '2025',
    tags: ['Data Storytelling'],
    mdFile: 'Stereotypes-in-Football.md',
    cover: footballCover,
    featured: true,
  },
  {
    slug: 'early-portfolio-2022-2023',
    title: 'Early Portfolio (2022–2023)',
    shortDescription:
      '来自前研究生阶段的交互设计、工业设计、建筑设计作品集，展示我不断迭代能力广度的过程。',
    year: '2022–2023',
    tags: ['Interaction Design', 'Industry Design', 'Architecture'],
    mdFile: null,
    cover: earlyCover,
    featured: true,
  },
]

  