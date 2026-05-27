# React 学习实验室

个人 React 学习与实验仓库，以 **React 19 + Vite + TypeScript** 为主线，配合笔记与参考项目系统学习。

## 目录结构

| 目录 | 说明 | 状态 |
| --- | --- | --- |
| [`learn/`](./learn/) | **主学习项目** — Hooks、Router、状态管理、可视化等 Demo | 活跃维护 |
| [`doc/`](./doc/) | 学习笔记与速查文档 | 活跃维护 |
| [`react-hooks/`](./react-hooks/) | Hooks 专项练习（独立 Git 仓库） | 参考 |
| [`react-hooks-in-action/`](./react-hooks-in-action/) | 《React Hooks in Action》书籍配套代码 | 参考 |
| [`react-js-foundations/`](./react-js-foundations/) | 《React JS Foundations》书籍配套代码 | 参考 |
| [`professional-reactjs/`](./professional-reactjs/) | Professional React 课程配套代码 | 参考 |
| [`pro-react-admin-main/`](./pro-react-admin-main/) | 企业级 Admin 模板（第三方，Webpack + Ant Design） | 参考 |

## 快速开始

```bash
cd learn
pnpm install
pnpm dev
```

浏览器访问 `http://localhost:5173`。

## 文档索引

| 文档 | 内容 |
| --- | --- |
| [doc/react.md](./doc/react.md) | React 核心概念（状态提升、组合、Context 等） |
| [doc/hooks.md](./doc/hooks.md) | Hooks 完整指南 |
| [doc/react-router.md](./doc/react-router.md) | React Router 速查 |
| [doc/redux.md](./doc/redux.md) | Redux / RTK 速查 |
| [doc/react-query.md](./doc/react-query.md) | TanStack Query 笔记 |
| [doc/tool-and-plugin.md](./doc/tool-and-plugin.md) | 脚手架与工具选型 |
| [doc/legacy-class-components.md](./doc/legacy-class-components.md) | Class 组件历史参考 |
| [LEARNING_PLAN.md](./LEARNING_PLAN.md) | **一周面试冲刺计划** |
| [learn/DEMO_INDEX.md](./learn/DEMO_INDEX.md) | Demo 代码索引 |

## 已清理的废弃内容

- **`blog/`** — 仅有编译产物与数据库，无源码，已删除
- **`base/`** — Create React App 旧项目，内容与 `learn/` 重复，已合并后删除

## 技术栈（主项目 learn）

- React 19
- Vite 7
- TypeScript 5
- React Router 7
- Zustand / Redux Toolkit（状态管理实验）
- ESLint 9

## 学习建议

**求职面试**：按 [LEARNING_PLAN.md](./LEARNING_PLAN.md) 的 7 天冲刺计划执行，优先 Hooks、手写题、项目话术。

**系统学习**：按 Demo 索引逐个练习，笔记更新到 `doc/`；书籍/课程仓库作为补充阅读。
