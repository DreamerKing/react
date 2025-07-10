# React 开发常用工具与插件

## 🚀 零、项目快速创建工具

| 工具                     | 适用场景                                           | 特点                                    |
| ---------------------- | ---------------------------------------------- | ------------------------------------- |
| **create-vite**        | 现代化 SPA 开发                                    | 极快启动、HMR、TypeScript、多框架支持           |
| **create-next-app**    | 全栈 React 应用、SSR/SSG                          | 文件路由、API Routes、SEO 友好、Vercel 部署   |
| **create-remix**       | 全栈 Web 应用、性能优先                               | 嵌套路由、数据加载、渐进增强、Web 标准             |
| **create-gatsby**      | 静态站点、博客、内容站                                  | GraphQL 数据层、插件生态、静态生成、PWA        |
| **create-expo-app**    | React Native 移动应用                             | 跨平台、热更新、开发工具链、原生模块              |
| **create-t3-app**      | 全栈 TypeScript 应用                              | Next.js + tRPC + Prisma + Tailwind  |
| **create-tauri-app**   | 桌面应用开发                                         | Rust 后端、轻量级、安全、跨平台               |
| **@redwoodjs/create**  | 全栈 JAMstack 应用                                | GraphQL、Prisma、Storybook、测试       |

### 选择指南

#### 🎯 **单页应用 (SPA)**

- **Vite** - 现代化、快速、简洁
- **Create React App** - 传统选择（不再推荐，维护缓慢）

#### 🌐 **全栈 Web 应用**

- **Next.js** - 最成熟、生态丰富、Vercel 优化
- **Remix** - 性能优先、Web 标准、嵌套路由
- **T3 Stack** - TypeScript 全栈、现代化技术栈

#### 📱 **移动应用**

- **Expo** - React Native 开发、跨平台、快速原型

#### 🖥️ **桌面应用**

- **Tauri** - 轻量级、安全、Rust 后端
- **Electron** - 成熟生态、资源占用较大

#### 📝 **静态站点/博客**

- **Gatsby** - 插件丰富、GraphQL、性能优化
- **Next.js (SSG)** - 灵活、可扩展、混合模式

#### 🏗️ **JAMstack 应用**

- **RedwoodJS** - 全栈框架、约定优于配置
- **Blitz.js** - 零 API 层、TypeScript 优先

### 模板对比

| 特性           | Vite        | Next.js     | Remix       | Gatsby      |
| ------------ | ----------- | ----------- | ----------- | ----------- |
| 启动速度       | ⚡ 极快       | 🚀 快        | 🚀 快        | 🐌 较慢       |
| 学习曲线       | 📈 简单       | 📊 中等       | 📊 中等       | 📈 较难       |
| SSR/SSG     | ❌ 需配置      | ✅ 内置       | ✅ 内置       | ✅ 静态生成     |
| API Routes  | ❌ 无        | ✅ 有        | ✅ 有        | ❌ 插件支持     |
| 文件路由       | ❌ 需配置      | ✅ 内置       | ✅ 内置       | ✅ 内置       |
| 部署复杂度      | 📦 简单       | 📦 简单       | 📦 中等       | 📦 简单       |
| 适用项目规模     | 小到大        | 小到大        | 中到大        | 小到中        |

---

---

## 🧰 一、开发辅助类工具

| 工具 / 插件                   | 功能简述                                            |
| ------------------------- | ----------------------------------------------- |
| **React Developer Tools** | Chrome/Firefox 插件，查看组件树、Hooks 状态等               |
| **VSCode 插件**             | React Snippets、ESLint、Prettier、React Refactor 等 |
| **React Refresh（HMR）**    | 热更新支持，开发时组件状态不丢失                                |
| **TypeScript**            | 强类型增强 React 开发体验（TSX、props 校验等）                 |
| **Storybook**             | 独立开发、展示、测试组件的 UI 工具                             |
| **Why Did You Render**    | 检测无意义重渲染，辅助性能调试                                 |

---

## ⚙️ 二、构建工具与集成

| 工具                      | 功能简述                            |
| ----------------------- | ------------------------------- |
| **Vite**                | 极快启动的构建工具，支持 React + TypeScript |
| **Webpack**             | 自定义配置强，适合大型项目                   |
| **Babel**               | 编译 JSX / 新语法成浏览器可运行代码           |
| **ESLint + Prettier**   | 代码风格规范与格式统一                     |
| **Husky + lint-staged** | Git 提交前自动检查与修复代码格式              |
| **dotenv**              | 管理环境变量                          |

---

## 🧪 三、测试类工具

| 工具                        | 功能简述                       |
| ------------------------- | -------------------------- |
| **Jest**                  | Facebook 出品的测试框架，支持单测与快照测试 |
| **React Testing Library** | 更贴近用户行为的 React 测试工具        |
| **Cypress**               | E2E 端到端自动化测试               |
| **Playwright**            | 跨浏览器 UI 自动化测试，更快更稳定        |

---

## 🚦 四、状态管理工具

| 工具                               | 说明                          |
| -------------------------------- | --------------------------- |
| **Zustand**                      | 轻量但功能强大的状态管理方案，替代 Redux     |
| **Redux Toolkit**                | Redux 推荐用法，简化配置、集成 DevTools |
| **Recoil / Jotai / Valtio**      | 面向 Hooks 的现代状态管理方案          |
| **React Query / TanStack Query** | 数据拉取与缓存管理库，异步状态利器           |

---

## 📦 五、常用 UI 库 / 样式工具

| 工具                               | 简述                        |
| -------------------------------- | ------------------------- |
| **Tailwind CSS**                 | 原子 CSS 工具类库，开发效率高，配合组件库使用 |
| **Ant Design / MUI / Chakra UI** | 成熟 UI 组件库                 |
| **clsx / classnames**            | 动态拼接 className 的工具        |
| **emotion / styled-components**  | CSS-in-JS 解决方案            |

---

## 📈 六、性能分析与优化工具

| 工具                                | 功能描述                     |
| --------------------------------- | ------------------------ |
| **React Profiler**                | 内建工具，查看组件渲染次数与耗时         |
| **Web Vitals（+ lighthouse）**      | 衡量性能核心指标，如 LCP、FCP、CLS 等 |
| **Bundle Analyzer（webpack/vite）** | 可视化打包大小结构，定位性能瓶颈         |
| **React Lazy + Suspense**         | 动态按需加载组件，提升首屏性能          |

---

## 🛡️ 七、安全与质量保障

| 工具                      | 功能简述                                |
| ----------------------- | ----------------------------------- |
| **Helmet**              | 设置安全相关的 HTTP 头部，防止 XSS、Clickjacking |
| **Snyk / npm audit**    | 检查依赖库中存在的安全漏洞                       |
| **Source Map Explorer** | 分析打包后产物，便于排查体积异常                    |
| **Bundlephobia**        | 评估 npm 包体积与依赖情况                     |

---

## ✨ Bonus：开发效率提升类

| 工具 / 插件             | 用途简述                          |
| ------------------- | ----------------------------- |
| **React Hook Form** | 简洁高效的表单处理库                    |
| **Formik + Yup**    | 表单状态管理 + 表单校验                 |
| **React Hot Toast** | 轻量美观的通知系统                     |
| **React i18next**   | 国际化解决方案                       |
| **Framer Motion**   | 优雅动画库，与 React 高度集成            |
| **React Helmet**    | 管理文档 `<head>`，如 title、meta 标签 |

---
