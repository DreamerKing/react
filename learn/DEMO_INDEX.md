# Demo 代码索引

按学习阶段排列，路径均相对于 `learn/src/`。

## 基础

| Demo | 路径 | 说明 |
| --- | --- | --- |
| Hello | `components/Hello.js` | 最简函数组件 |
| Props | `base/PropMutator.tsx` | Props 传递与变更 |
| Counter | `views/Counter.tsx` | useState + 事件 |
| SetState | `components/TestSetState.js` | useState 基础 |
| SetState 2 | `components/TestSetState2.js` | 函数式更新 |
| RenderNull | `components/RenderNull.js` | 条件渲染 return null |
| FileInput | `components/FileInput.js` | useRef + 非受控文件输入 |
| 状态提升 | `components/StatePromote/Calculator.js` | 温度转换器 |

## Hooks

| Demo | 路径 | 说明 |
| --- | --- | --- |
| useEffect | `components/TestUseEffect.js` | 副作用与清理 |
| UserEffect | `components/UserEffect.js` | 数据获取副作用 |
| useContext | `components/TestUseContext.js` | Context 消费 |
| Context 专题 | `views/Context.tsx` | Context 模式 |
| useReducer | `components/TestReducer.js` | reducer 模式 |
| useRef | `components/TestUseRef.js` | DOM ref |
| useMemo | `components/TestUseMemo.js` | 缓存计算 |
| useCallback | `views/useCallback/App.tsx` | 缓存回调 |
| useDebugValue | `components/TestUseDebugValue.tsx` | 自定义 Hook 调试 |
| useImperativeHandle | `views/hooks/TestUseImperativeHandle.tsx` | 暴露 ref 方法 |
| useSyncExternalStore | `views/hooks/UseSyncExternalStore.tsx` | 外部 store 订阅 |
| useActionState | `views/hooks/UseActionState.tsx` | React 19 表单 action |
| Timer | `views/hooks/Timer.tsx` | 定时器 Hook |
| 在线状态 | `hooks/useOnline.ts` | 自定义 Hook |
| Todo Store | `views/hooks/todoStore.ts` | 外部 store 示例 |

## 组件模式

| Demo | 路径 | 说明 |
| --- | --- | --- |
| forwardRef | `components/TestForwardRef.js` | Ref 转发 |
| forwardRef 2 | `components/TestForwardRef2.js` | 进阶 ref |
| Portal | `components/TestPortal.js` | 传送门 |
| Fragment | `views/builtin/TestFragment.tsx` | Fragment |
| Wrapper | `views/builtin/Wrapper.tsx` | 组合模式 |
| Render Props | `components/Mouse.js` | 鼠标追踪 |
| ColorContext | `components/ColorContext.js` | Context Provider |
| BlickRender | `components/BlickRender.js` | 渲染相关实验 |
| StyledComponent | `base/StyledComponent.tsx` | CSS-in-JS / CSS Modules |

## 路由

| Demo | 路径 | 说明 |
| --- | --- | --- |
| 主路由 | `router/index.tsx` | createBrowserRouter（待启用） |
| 嵌套路由 | `router/root.tsx` | loader/action |
| Contact | `router/contact.tsx` | 动态路由 |
| Edit | `router/edit.tsx` | 编辑页 |
| 旧路由实验 | `learn-router/` | 早期 Router 练习 |

## 状态管理

| Demo | 路径 | 说明 |
| --- | --- | --- |
| Redux App | `redux-app/ReduxApp.tsx` | RTK 完整示例 |
| Counter Slice | `features/counter/counterSlice.ts` | createSlice |
| Zustand App | `zustand/ZApp.tsx` | Zustand store |
| Zustand Store | `zustand/store.ts` | store 定义 |

## 其他

| Demo | 路径 | 说明 |
| --- | --- | --- |
| VTable | `views/VTable.tsx` | 表格可视化 |
| Accordion | `views/Accordion.tsx` | 手风琴组件 |
| Blog | `views/builtin/Blog.tsx` | 内置组件实验 |
| Mock API | `mock/userApi.js` | 模拟接口 |

## 待补充 Demo

- [ ] TanStack Query 数据请求（`views/react-query/`）
- [ ] useTransition / useDeferredValue
- [ ] Error Boundary
- [ ] lazy + Suspense 代码分割
- [ ] 单元测试示例
