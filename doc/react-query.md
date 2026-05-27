# TanStack Query (React Query)

## 安装

```bash
pnpm add @tanstack/react-query
pnpm add -D @tanstack/react-query-devtools
```

## 三个核心概念

- **Queries** — 读取/缓存服务端数据
- **Mutations** — 创建、更新、删除数据
- **Query Invalidation** — 变更后使缓存失效并重新获取

## 常用 API

| API | 用途 |
| --- | --- |
| `QueryClient` | 管理所有 query 缓存 |
| `QueryClientProvider` | 向组件树注入 client |
| `useQuery` | 声明式数据获取 |
| `useMutation` | 声明式数据变更 |
| `useQueryClient` | 访问 client，用于 invalidate/refetch |
| `useInfiniteQuery` | 分页/无限滚动 |
| `useQueries` | 并行多个 query |

## Query 结果字段

- `isLoading` / `isPending` — 首次加载
- `isFetching` — 任意请求进行中
- `isError` / `isSuccess`
- `data` / `error`
- `status` — `pending` \| `error` \| `success`
- `fetchStatus` — `fetching` \| `paused` \| `idle`

## 关键配置

- **Query Keys** — 缓存标识，应稳定且可序列化
- **staleTime** — 数据被视为"新鲜"的时长，默认 0
- **gcTime** (原 cacheTime) — 未使用缓存的保留时间
- **Network Mode** — `online` \| `always` \| `offlineFirst`

## Devtools

```tsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
```

## 与 GraphQL 配合

- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- `graphql-request` 作为 fetcher

## 学习路径建议

1. 用 `useQuery` 替换 `useEffect + fetch`
2. 理解 staleTime / gcTime 与 refetch 策略
3. 用 `useMutation` + `invalidateQueries` 处理写操作
4. 在 `learn/` 项目中新增 `views/react-query/` 目录做练习
