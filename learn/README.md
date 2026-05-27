# learn — React 19 主学习项目

基于 **Vite + React 19 + TypeScript** 的交互式 Demo 集合，配合根目录 [LEARNING_PLAN.md](../LEARNING_PLAN.md) 使用。

## 启动

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # 生产构建
pnpm lint     # ESLint 检查
```

## 目录结构

```
src/
├── main.tsx              # 入口，当前挂载 Router
├── Root.tsx              # 首页 Demo
├── components/           # 基础组件 Demo（Hooks、模式）
│   └── StatePromote/     # 状态提升：温度转换器
├── views/                # 专题 Demo
│   ├── hooks/            # 进阶 Hooks
│   ├── useCallback/      # 性能优化
│   ├── builtin/          # Fragment、Wrapper 等
│   └── ...
├── router/               # React Router 实验（部分路由待启用）
├── redux-app/            # Redux Toolkit 示例
├── zustand/              # Zustand 示例
├── hooks/                # 自定义 Hooks
└── mock/                 # Mock API
```

完整 Demo 列表见 [DEMO_INDEX.md](./DEMO_INDEX.md)。

## 当前路由

| 路径 | 组件 | 说明 |
| --- | --- | --- |
| `/` | `Root.tsx` | useSyncExternalStore Todo |
| `/use-action-state` | `UseActionState.tsx` | React 19 useActionState |

更多路由在 `router/index.tsx` 中已写好，取消注释即可启用。

## 技术栈

| 依赖 | 版本 | 用途 |
| --- | --- | --- |
| react | 19 | UI 框架 |
| react-router | 7 | 路由 |
| zustand | 5 | 轻量状态管理 |
| immer | 10 | 不可变数据 |
| @visactor/vtable | 1.x | 表格可视化实验 |

## 学习建议

1. 按 [LEARNING_PLAN.md](../LEARNING_PLAN.md) 阶段顺序学习
2. 每学一个 Hook，打开对应 `components/` 或 `views/hooks/` 文件
3. 在 `main.tsx` 或 `router/index.tsx` 注册新 Demo 便于调试
4. 笔记同步到 [../doc/](../doc/)
