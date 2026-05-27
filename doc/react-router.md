# React Router

## 安装

```bash
pnpm add react-router
# 或
pnpm add react-router-dom
```

React Router 7 将 `react-router` 作为核心包，`react-router-dom` 在 Web 项目中提供 DOM 绑定。

## 核心概念

- **Client Side Routing** — 不刷新页面切换视图
- **嵌套路由** — 父路由渲染 `<Outlet />`，子路由渲染在 outlet 中
- **Loader / Action** — 在渲染前加载数据、处理表单提交（Data Router 模式）

## 基础用法（Data Router）

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

<RouterProvider router={router} />
```

## 常用 API

| API | 用途 |
| --- | --- |
| `Link` / `NavLink` | 声明式导航 |
| `useNavigate` | 命令式导航 |
| `useParams` | 读取 URL 参数 |
| `useSearchParams` | 读取/修改 query string |
| `useLoaderData` | 读取 loader 返回的数据 |
| `useActionData` | 读取 action 返回的数据 |
| `Outlet` | 渲染子路由 |

## 项目内 Demo

- 当前入口路由：`learn/src/main.tsx`
- 完整 Data Router 实验：`learn/src/router/index.tsx`（部分路由待启用）
- Loader/Action 示例：`learn/src/router/root.tsx`

## 学习建议

1. 先掌握 `Routes` + `Route` 声明式路由
2. 再学习嵌套路由与 `<Outlet />`
3. 最后学习 Loader/Action 数据模式
4. 参考 [LEARNING_PLAN.md](../LEARNING_PLAN.md) 阶段 4
