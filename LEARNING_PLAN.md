# React 一周面试冲刺计划

> **目标**：7 天内覆盖 React 前端面试 80% 高频考点，能讲清楚、能写代码、能聊项目。  
> **前提**：已有 JavaScript / ES6+ 基础。  
> **强度**：全职冲刺约 **8–10 小时/天**；在职约 **4 小时/天**，需严格按优先级裁剪。  
> **主仓库**：`learn/` + `doc/` + [learn/DEMO_INDEX.md](./learn/DEMO_INDEX.md)

---

## 使用方式

```
每天 = 上午（概念 + 读 Demo）+ 下午（手写代码）+ 晚上（背题 + 口述）
```

- 概念不懂 → 查 `doc/` 对应文档
- 代码不会 → 打开 `learn/src/` 对应 Demo，**关掉文件自己重写一遍**
- 每晚 30 分钟：对着镜子/录音回答当日「面试必答题」

---

## 总览

| 天 | 主题 | 面试权重 |
| --- | --- | --- |
| Day 1 | React 核心原理 + 基础语法 | ★★★★★ |
| Day 2 | Hooks 全家桶（最高频） | ★★★★★ |
| Day 3 | 组件设计 + 性能优化 | ★★★★★ |
| Day 4 | 状态管理 + 数据请求 | ★★★★☆ |
| Day 5 | 路由 + TypeScript + 工程化 | ★★★★☆ |
| Day 6 | 手写题冲刺 + 项目包装 | ★★★★★ |
| Day 7 | 模拟面试 + 查漏补缺 | ★★★★★ |

---

## Day 1：React 核心原理 + 基础（8h）

### 上午（3h）— 必须能讲

| 知识点 | 面试怎么说 | 资料 |
| --- | --- | --- |
| 虚拟 DOM | 用 JS 对象描述 UI，diff 后最小化真实 DOM 操作 | [doc/react.md](./doc/react.md) |
| Fiber | 可中断渲染、优先级调度，支持 Concurrent 特性 | 官方 blog |
| 单向数据流 | props 向下，事件向上；便于追踪 bug | [doc/react.md](./doc/react.md) |
| JSX | 语法糖，`React.createElement` 的返回值 | `components/Hello.js` |
| 受控 vs 非受控 | 值由 state 管 vs DOM 管；file input 永远非受控 | `components/FileInput.js` |
| key 的作用 | 帮助 diff 识别节点身份；别用 index 做动态列表 key | 口述 |
| 状态提升 | 共享 state 上提到最近公共父组件 | `components/StatePromote/Calculator.js` |

**必答题**

1. React 为什么快？虚拟 DOM 一定比直接操作 DOM 快吗？
2. setState 是同步还是异步？React 18 批处理（batching）是什么？
3. 函数组件 vs Class 组件，现在为什么都用函数组件？

### 下午（4h）— 必须能写

- [ ] 手写函数组件 Todo List（增删改、列表渲染、key）
- [ ] 手写受控表单（input + submit）
- [ ] 手写状态提升：两个输入框联动（温度转换器）

参考 Demo：`views/Counter.tsx`、`components/RenderNull.js`

### 晚上（1h）— 背诵

- [ ] 整理 5 条 Day 1 答案到笔记（每条 ≤ 1 分钟口述）
- [ ] 启动项目：`cd learn && pnpm dev`，浏览 [DEMO_INDEX.md](./learn/DEMO_INDEX.md)

---

## Day 2：Hooks 深入（8h）— 面试第一考点

### 上午（3h）

| Hook | 面试重点 | Demo |
| --- | --- | --- |
| useState | 闭包陷阱、函数式更新 `prev => ...` | `components/TestSetState.js` |
| useEffect | 依赖数组三种写法、cleanup、不能放 async | `components/TestUseEffect.js` |
| useRef | DOM 引用 vs 保存可变值（不触发渲染） | `components/TestUseRef.js` |
| useContext | 避免滥用；值变化导致所有消费者重渲染 | `views/Context.tsx` |
| useReducer | 复杂 state 逻辑；与 Redux 思想一致 | `components/TestReducer.js` |

**必答题**

1. useEffect 依赖写 `[]`、不写、写具体依赖，分别什么行为？
2. 为什么 Hooks 不能写在 if/for 里？（链表顺序）
3. useRef 和 useState 区别？

### 下午（4h）— 手写题

- [ ] **useFetch**：返回 `{ data, loading, error }`，支持 cleanup 防竞态
- [ ] **useDebounce**：输入防抖搜索
- [ ] **useLocalStorage**：state 与 localStorage 同步
- [ ] 用 useReducer 重写 Todo List

参考：`components/UserEffect.js`、`hooks/useOnline.ts`

### 晚上（1h）

- [ ] 各 Hook 使用场景一张表（Hook → 何时用 → 常见坑）
- [ ] 口述：「你在项目里怎么用过 useEffect？」（结合 mock 数据场景）

---

## Day 3：组件模式 + 性能优化（8h）

### 上午（3h）

| 主题 | 面试重点 | Demo |
| --- | --- | --- |
| useMemo | 缓存**计算结果**；别滥用 | `components/TestUseMemo.js` |
| useCallback | 缓存**函数引用**；配合 memo 子组件 | `views/useCallback/` |
| React.memo | 浅比较 props，避免无效渲染 | `views/useCallback/App.tsx` |
| forwardRef | 父组件访问子组件 DOM/方法 | `components/TestForwardRef.js` |
| Portal | Modal 挂载到 body，脱离父层 overflow/z-index | `components/TestPortal.js` |
| 组合 vs 继承 | React 推荐组合（children、render props） | `views/builtin/Wrapper.tsx` |

**必答题**

1. useMemo 和 useCallback 区别？什么时候才需要？
2. 如何定位 React 性能问题？（Profiler、why did you render）
3. 父组件 re-render，子组件一定 re-render 吗？

### 下午（4h）

- [ ] 实现 SearchList：`useMemo` 过滤 + `useCallback` 传回调 + `memo` 子项
- [ ] 实现 Modal（Portal + 点击遮罩关闭）
- [ ] 读 `views/hooks/UseSyncExternalStore.tsx`，理解外部 store 订阅

### 晚上（1h）

- [ ] React 18/19 新特性速记：Concurrent、useTransition、useDeferredValue、useActionState
- [ ] 看 Demo：`views/hooks/UseActionState.tsx`

---

## Day 4：状态管理 + 数据请求（8h）

### 上午（3h）

**选型题（必考）**

| 场景 | 回答 |
| --- | --- |
| 组件内 / 父子 | useState / 状态提升 |
| 跨多层、低频变更 | Context |
| 中等全局 UI 状态 | Zustand |
| 大型应用、中间件、时间旅行 | Redux Toolkit |
| 服务端数据 | **TanStack Query**（不是 Redux 的职责） |

资料：[doc/redux.md](./doc/redux.md)、[doc/react-query.md](./doc/react-query.md)

| Demo | 路径 |
| --- | --- |
| Zustand | `zustand/ZApp.tsx` |
| Redux Toolkit | `redux-app/ReduxApp.tsx` |

**必答题**

1. Redux 数据流？（dispatch → reducer → store → view）
2. 服务端状态 vs 客户端状态？
3. React Query 的 staleTime、cacheTime（gcTime）是什么？

### 下午（4h）

- [ ] 口述 Zustand 实现购物车（增删改、总价）
- [ ] 口述用 React Query 替换 `useEffect + fetch` 的流程
- [ ] 读 `mock/userApi.js`，能讲 axios 拦截器、错误处理、loading 态

### 晚上（1h）

- [ ] 准备回答：「你们项目状态管理怎么选的？为什么？」

---

## Day 5：路由 + TypeScript + 工程化（8h）

### 上午（3h）

| 主题 | 面试重点 | 资料 |
| --- | --- | --- |
| React Router | 嵌套路由、动态参数、导航 | [doc/react-router.md](./doc/react-router.md) |
| Loader/Action | 路由级数据加载（RR 6.4+） | `router/root.tsx` |
| TS 基础 | `FC` vs 直接写 props 类型、泛型组件 | `learn/` 中 `.tsx` 文件 |
| Vite vs Webpack | Vite 开发快（ESM + esbuild），生产 rollup | [doc/tool-and-plugin.md](./doc/tool-and-plugin.md) |

**必答题**

1. SPA 路由原理？（hash vs history API）
2. 路由鉴权怎么做？
3. `React.FC` 还要不要用？

### 下午（3h）

- [ ] 画一张路由结构图：Layout → 列表页 → 详情页 `:id`
- [ ] 给 Todo 组件写 TS 类型（Props、EventHandler）
- [ ] 浏览 `pro-react-admin-main/`：路由权限、Layout、Mock —— **只学架构话术，不必跑通**

### 晚上（2h）

- [ ] 工程化清单：ESLint、Prettier、Husky、CI 各自解决什么
- [ ] 了解 React Testing Library 基本思路（查元素像用户、不测实现细节）

---

## Day 6：手写题 + 项目包装（8h）

### 上午（4h）— 高频手写

按顺序独立完成，每题限时 20–40 分钟：

| # | 题目 | 考察点 |
| --- | --- | --- |
| 1 | Todo List | useState、列表、key |
| 2 | 防抖搜索 | useEffect、cleanup、自定义 Hook |
| 3 | 无限滚动 / 分页列表 | 状态、useEffect、IntersectionObserver |
| 4 | 表单校验 | 受控组件、错误提示 |
| 5 | Theme 切换 | Context + localStorage |
| 6 | 请求 Hook | loading/error/data、竞态取消 |

### 下午（3h）— 项目话术

用本仓库 `learn/` 包装成可讲的项目（即使未完成也可按此结构说）：

```
项目：React 学习实验平台
技术栈：React 19 + Vite + TypeScript + React Router + Zustand
职责：
  - 封装 useFetch / useOnline 等自定义 Hook
  - 实现 Hooks 可视化 Demo 目录，覆盖 20+ 场景
  - 对比 Zustand 与 Redux Toolkit 状态方案
  - 集成 VTable 数据可视化实验
难点 & 解决：
  - useEffect 竞态 → AbortController / ignore flag
  - 列表性能 → memo + useCallback
  - 路由数据预取 → Loader 模式
```

- [ ] 写 1 页项目介绍（STAR 法则：情境、任务、行动、结果）
- [ ] 准备 3 个「踩坑故事」

### 晚上（1h）

- [ ] 整理简历技术栈，与上述项目一致
- [ ] GitHub 仓库 README 可读（已有 [README.md](./README.md)）

---

## Day 7：模拟面试 + 查漏补缺（8h）

### 上午（3h）— 自测清单

**原理类（每题 2 分钟内答完）**

- [ ] 虚拟 DOM 与 Diff 策略（同级比较、key）
- [ ] React 18 自动批处理
- [ ] Hooks 规则与原理
- [ ] useEffect vs useLayoutEffect
- [ ] 错误边界（Error Boundary）能捕什么、不能捕什么
- [ ] Suspense 和 lazy 代码分割
- [ ] 受控/非受控组件
- [ ] Fiber 是什么（简述）

**工程类**

- [ ] 如何优化首屏加载？（lazy、分包、CDN、preload）
- [ ] 如何做权限控制？
- [ ] 前端安全：XSS、CSRF 基础

### 下午（3h）— 模拟面试

找朋友或用 AI 模拟，至少 2 轮：

1. **基础轮**（30min）：React 原理 + Hooks
2. **编码轮**（45min）：Todo / 防抖 / 自定义 Hook 三选一
3. **项目轮**（30min）：深挖一个项目细节

### 晚上（2h）

- [ ] 回顾本周错题，更新个人「面试错题本」
- [ ] 浏览目标公司 JD，补 1–2 个缺口（如 Next.js、微前端）
- [ ] 早睡，面试前只看错题本

---

## 在职版裁剪（4h/天）

时间不够时，**只保留 ★★★★★ 内容**：

| 天 | 保留 |
| --- | --- |
| 1 | 虚拟 DOM、单向数据流、Todo List |
| 2 | useState/useEffect/useRef + useFetch + useDebounce |
| 3 | useMemo/useCallback/memo + 性能题 |
| 4 | 状态选型 + React Query 概念 |
| 5 | 路由原理 + TS Props 类型 |
| 6 | 手写 Todo + 防抖 + 项目话术 |
| 7 | 模拟面试 |

砍掉：Portal 实现、Redux 源码、Webpack 配置细节、Class 组件。

---

## 面试速查表

### Hooks 一句话

| Hook | 一句话 |
| --- | --- |
| useState | 组件内状态 |
| useEffect | 副作用 + 清理 |
| useRef | 不触发渲染的可变引用 |
| useContext | 跨层读上下文 |
| useReducer | 复杂 state 的 reducer 模式 |
| useMemo | 缓存计算值 |
| useCallback | 缓存函数 |
| useLayoutEffect | DOM 变更后、绘制前同步执行 |

### 性能优化清单

1. 列表加稳定 `key`
2. 大列表虚拟滚动（react-window）
3. `React.memo` + `useCallback` 减少子组件渲染
4. `useMemo` 缓存昂贵计算
5. 路由/组件 `lazy` + `Suspense`
6. 图片懒加载、CDN、Gzip
7. 避免在 render 中创建新对象/函数（或 memo 兜底）

### 代码题模板

**useFetch 骨架**

```tsx
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(json => { if (!ignore) setData(json); })
      .catch(e => { if (!ignore) setError(e); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, [url]);

  return { data, loading, error };
}
```

**防抖 Hook 骨架**

```tsx
function useDebounce<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
```

---

## 推荐 Demo 速读路线（按天）

```
Day 1 → Hello, Counter, RenderNull, StatePromote/Calculator
Day 2 → TestSetState, TestUseEffect, TestUseRef, TestReducer, UserEffect
Day 3 → TestUseMemo, useCallback/, TestForwardRef, TestPortal
Day 4 → zustand/, redux-app/, doc/react-query.md
Day 5 → router/, main.tsx, PropMutator.tsx
Day 6 → 全部手写，不依赖 Demo
Day 7 → 只看错题本
```

---

## 进度追踪

在本文件 `[ ]` 前打 `x`。Day 7 结束时，你应能：

- [ ] 10 分钟内手写 Todo List
- [ ] 5 分钟内手写 useDebounce 或 useFetch
- [ ] 3 分钟讲清虚拟 DOM、Diff、Fiber（简述）
- [ ] 3 分钟讲清 useEffect 依赖与 cleanup
- [ ] 2 分钟说清状态管理选型
- [ ] 5 分钟介绍一个 React 项目（含难点）

---

## 投简历后持续补充（面试周之外）

| 方向 | 何时补 |
| --- | --- |
| Next.js SSR/SSG | JD 要求全栈时 |
| 微前端 qiankun | JD 提到时 |
| 源码：useState 链路 | 大厂二面 |
| 算法 | 所有公司 |

本计划覆盖 **React 面试主体**；算法与系统设计需并行准备。
