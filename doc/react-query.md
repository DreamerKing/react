yarn add @tanstack/react-query

三个核心概念

- Queries
- Mutations
- Query Invalidation

useQuery、useMutation、useQueryClient、QueryClient、QueryClientProvider

Devtools

yarn add @tanstack/react-query-devtools

- Floating Mode ReactQueryDevtools
- embedded Mode ReactQueryDevtoolsPanel

GraphQL-Codegen
graphql-request

Query 实例默认缓冲是不新鲜的 staleTime

Query Result

- isLoading
- isError
- isSuccess
- data
- error
- status loading|error|success
- fetchStatus fetching|paused|idle
- isFetching
- isPaused

Query Keys
Query Functions

QueryFunctionContext

- queryKey
- pageParam
- meta

Network Mode

- online
- always
- offlineFirst

useQuery()
useInfiniteQuery()
useQueries()
