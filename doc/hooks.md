# React Hooks 完整指南

## 目录

- [Hooks 概述](#hooks-概述)
- [State Hooks](#state-hooks)
- [Context Hook](#context-hook)
- [Ref Hooks](#ref-hooks)
- [Effect Hooks](#effect-hooks)
- [性能优化 Hooks](#性能优化-hooks)
- [资源 Hooks](#资源-hooks)
- [其他 Hooks](#其他-hooks)
- [内置组件](#内置组件)
- [自定义 Hooks](#自定义-hooks)
- [最佳实践](#最佳实践)
- [常见问题](#常见问题)

## Hooks 概述

Hooks 是 React 16.8 引入的新特性，允许你在函数组件中使用状态和其他 React 特性。

### Hook 分类

#### State Hooks - 状态管理

- useState - 直接状态更新
- useReducer - 声明式状态更新逻辑

#### Context Hook - 跨组件数据传递

- useContext - 访问 React Context

#### Ref Hooks - 引用管理

保存一些不用于渲染的信息，更新 ref 不会重新渲染组件

- useRef - 引用 DOM 元素或存储可变值
- useImperativeHandle - 自定义暴露给父组件的 ref 句柄

#### Effect Hooks - 副作用处理

组件与外部系统之间同步，包括处理网络、浏览器、DOM、动画、使用不同 UI 库编写的小部件以及其他非 React 代码。避免使用 Effect 协调应用程序的数据流。

- useEffect - 在组件渲染后执行副作用
- useLayoutEffect - 在浏览器重新绘制屏幕前执行，可以在此处测量布局
- useInsertionEffect - 在 React 对 DOM 进行更改之前触发，库可以在此处插入动态 CSS

#### 性能优化 Hooks

- useMemo - 缓存计算代价昂贵的计算结果
- useCallback - 缓存函数定义，避免不必要的重新创建
- useTransition - 允许将状态转换标记为非阻塞，并允许其他更新中断它
- useDeferredValue - 允许延迟更新 UI 的非关键部分，以让其他部分先更新

#### 资源 Hooks

资源可以被组件访问，而无需将它们作为状态的一部分

- use - 允许读取像 Promise 或上下文这样的资源的值

#### 其他 Hooks

- useDebugValue - 为自定义 Hook 添加开发者工具标签
- useId - 生成唯一 ID，通常与可访问性 API 一起使用
- useSyncExternalStore - 订阅外部 store

#### 自定义 Hooks

可以创建自己的 Hook 来复用状态逻辑

### Hook 使用规则

⚠️ **重要：** Hook 比普通函数更为严格，必须遵守以下规则：

1. **只能在组件顶层调用** - 不能在循环、条件语句或嵌套函数中调用
2. **只能在 React 函数组件或自定义 Hook 中调用**
3. **如果需要在条件或循环中使用 Hook，需要提取一个新的组件并在组件内部顶层使用**

## State Hooks

### useState(initialState)

`useState` 是 React 中最基础的状态管理 Hook，允许在函数组件中添加状态。

**语法：**

```javascript
const [state, setState] = useState(initialState);
```

**参数说明：**

- initialState：初始状态值，可以是任意类型，也可以是初始化函数（只在首次渲染时调用）。

**返回值：**

- state：当前状态值
- setState：状态更新函数，多次渲染时是不同的引用。

**状态更新特性：**

- 触发重新渲染
- 支持直接传值或函数式更新
- 异步批量处理
- 不自动合并对象

**示例：**

```javascript
const [count, setCount] = useState(0);
setCount(prev => prev + 1);
const [user, setUser] = useState({ name: '', age: 0 });
setUser(prev => ({ ...prev, name: 'John' }));
```

**注意事项：**

- 不要在渲染期间调用 setState（除非提前 return）
- setter 函数是稳定的
- 可用 flushSync 强制同步更新
- set函数仅更新下一次渲染的状态变量。如果在调用set函数后立即读取状态变量，仍然会得到旧的值。
- 如果提供的新值与旧值相同，setState 不会触发重新渲染。
- 不要在渲染期间调用setState, 除非提前return,否则会导致死循环。
- 每次调用 useState 都会返回独立的 state，不会相互影响。
- 不要依赖闭包中的 state 值，使用函数式更新。
- setState 是异步的，React 可能会批量合并多次 setState 调用。
- setState 不会自动合并对象，需要手动合并。
- 初始值函数只会在首次渲染时执行一次。
- 可以多次使用 useState 管理多个状态。
- 通过改变组件的 key，可以重置 state。
- set函数具有稳定的标识，在Effect依赖数组中可以安全省略。

### useReducer(reducer, initialArg, init?)

`useReducer` 适用于复杂状态逻辑。

**语法：**

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

**参数说明：**

- reducer：纯函数 `(state, action) => newState`
- initialArg：初始状态值
- init：可选初始化函数, 仅初次调用组件时使用，后续调用中会忽略参数。

**返回值：**

- state：当前状态
- dispatch：分发 action 的函数, 多次渲染时会保持相同的引用

**Reducer 要求：**

- 必须是纯函数
- 不应有副作用
- 以不可变方式更新对象和数组

**示例：**

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'inc': return { count: state.count + 1 };
    case 'dec': return { count: state.count - 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

**适用场景：**

- 状态逻辑复杂
- 下一个状态依赖于前一个状态
- 需要优化性能或测试独立性

## Context Hook

### useContext(context)

`useContext` 让你能够读取和订阅组件中的 context。

#### 语法

```javascript
const value = useContext(SomeContext);
```

#### 参数

- **context**: 使用 `createContext` 创建的 context 对象

#### 返回值

返回 context 的当前值，由上层最近的 `SomeContext.Provider` 的 `value` 决定。

#### 重要特性

- **不是响应式的**: 更新机制是自上而下的逐级更新数据重新渲染，而不是监听数据变化
- **必须有 Provider**: 组件必须被相应的 Provider 包裹
- **性能考虑**: Context 值改变会导致所有消费组件重新渲染

#### 使用示例

```javascript
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Current theme: {theme}</div>;
}
```

- useEffect(setup, dependencies?)
  - setup 函数选择性返回一个 清理（cleanup） 函数。组件挂载时React将运行setup函数。在每次依赖项变更重新渲染后，React `首先使用旧值运行 cleanup 函数`（如果你提供了该函数），然后`使用新值运行 setup 函数`。在组件从 DOM 中移除后，React 将最后一次运行 cleanup 函数。
  - 可选 dependencies：setup 代码中引用的所有`响应式值`的列表。响应式值包括 props、state 以及所有直接在组件内部声明的变量和函数。依赖项列表的元素数量必须是固定的。React 将使用 Object.is 来比较每个依赖项和它先前的值。如果省略此参数，则在每次重新渲染组件之后，将重新运行 Effect 函数。

注意事项：

- 只能在 组件的顶层 或自己的 Hook 中调用它，而不能在循环或者条件内部调用。
- 不与外部同步，可能不需要useEffect
- 当严格模式启动时，React 将在真正的 setup 函数首次运行前，运行一个开发模式下专有的额外 setup + cleanup 周期。
- 依赖项是组件内部定义的对象或函数,可能导致 Effect 过多地重新运行。解决这个问题可以删除不必要的 对象 和 函数 依赖项，或可以 抽离状态更新 和 非响应式的逻辑 到 Effect 之外。
- 如果Effect 不是由交互（比如点击）引起的，那么 React 会让浏览器 在运行 Effect 前先绘制出更新后的屏幕。如果Effect 正在做一些视觉相关的事情，并且有显著的延迟（例如，它会闪烁），那么将 useEffect 替换为 useLayoutEffect。
- 即使Effect 是由一个交互（比如点击）引起的，浏览器也可能在处理 Effect 内部的状态更新之前重新绘制屏幕。如果一定要阻止浏览器重新绘制屏幕，则需要用 useLayoutEffect 替换 useEffect。
- Effect 只在客户端上运行，在服务端渲染中不会运行。

  - componentDidMount()
  - componentDidUpdate() 需要指定依赖
  - componentWillUnmount() 通过 return 返回清理函数

当第二参数为[]时，表示只是第一次渲染时执行;
当省略第二个参数时,表示每次渲染都会执行;
当第二个参数写入依赖时，只有依赖包含的某个值发生变化时执行;
若返回一个函数,组件销毁时会执行这个函数。

useEffect 在浏览器渲染完成后执行, useLayoutEffect 在浏览器渲染完成前执行。
useLayoutEffect 在浏览器重新绘制屏幕之前触发 总是比 useEffect 先执行。

- useLayoutEffect() 里的任务最好影响了 Layout。为了用户体验，优先使用 useEffect(优先渲染)。
  在重新渲染前执行计算布局相关的操作 useLayoutEffect 内部的代码和所有计划的状态更新阻塞了浏览器重新绘制屏幕。

- Effect 是一段响应式的代码块。它们在读取的值发生变化时重新进行同步。与事件处理程序不同，事件处理程序只在每次交互时运行一次，而 Effect 则在需要进行同步时运行。

- 不能“选择”依赖项。依赖项必须包括 Effect 中读取的每个 响应式值。代码检查工具会强制执行此规则。有时，这可能会导致出现无限循环的问题，或者 Effect 过于频繁地重新同步。不要通过禁用代码检查来解决这些问题！
  解决方案:
  - `检查 Effect 是否表示了独立的同步过程`。如果 Effect 没有进行任何同步操作，可能是不必要的。如果它同时进行了几个独立的同步操作，将其拆分为多个 Effect。

  - 如果想读取 props 或 state 的最新值，但又不想对其做出反应并重新同步 Effect，可以将 Effect 拆分为具有反应性的部分（保留在 Effect 中）和非反应性的部分（提取为名为 “Effect Event” 的内容）。

  - 避免将对象和函数作为依赖项。如果在渲染过程中创建对象和函数，然后在 Effect 中读取它们，它们将在每次渲染时都不同。这将导致 Effect 每次都重新同步。

- 组件可以挂载、更新和卸载。
- 每个 Effect 与周围组件有着独立的生命周期。
- 每个 Effect 描述了一个独立的同步过程，可以 开始 和 停止。
- 在编写和读取 Effect 时，要独立地考虑每个 Effect（如何开始和停止同步），而不是从组件的角度思考（如何挂载、更新或卸载）。
- 在组件主体内声明的值是“响应式”的。
- 响应式值应该重新进行同步 Effect，因为它们可以随着时间的推移而发生变化。
- 检查工具验证在 Effect 内部使用的所有响应式值都被指定为依赖项。
- 检查工具标记的所有错误都是合理的。总是有一种方法可以修复代码，同时不违反规则。

在某些情况下，React知道一个值永远不会改变，即使它在组件内部声明。例如，从 `useState 返回的 set 函数`和从 `useRef 返回的 ref 对象`是 稳定的 —— 它们保证在重新渲染时不会改变。稳定值不是响应式的，因此可以从列表中省略它们。包括它们是允许的：它们不会改变，所以无关紧要。

useRef(initialValue) 帮助引用一个不需要渲染的值
useRef 返回一个只有一个属性的对象
current：初始值为传递的 initialValue。之后可以将其设置为其他值。如果将 ref 对象作为一个 JSX 节点的 ref 属性传递给 React，React 将为它设置 current 属性。

注意事项：

- 可以修改 ref.current 属性。与 state 不同，它是可变的。然而，如果它持有一个用于渲染的对象（例如 state 的一部分），那么就不应该修改这个对象。
- 改变 ref.current 属性时，React 不会重新渲染组件。
- 除了 初始化 外不要在渲染期间写入或者读取 ref.current，否则会使组件行为变得不可预测。
- 不要在渲染期间写入或者读取 ref.current,可以在 事件处理程序或者 Effect 中读取和写入 ref。如果不得不在渲染期间读取 或者写入，那么应该 使用 state 代替。
- 通过 ref 操作 DOM，React 内置了对它的支持。默认情况下，自定义组件不会暴露它们内部 DOM 节点的 ref。
- 使用组件组合，通过 useRef 持有输入框并通过 forwardRef 将其暴露给父组件

ref的优势

- 可以在重新渲染之间存储信息
- 改变它 不会触发重新渲染
- 本地化的，属于组件

memo(component) 父组件重新渲染当传入子组件props不变时跳过渲染。
避免不必要的使用缓存组件

- 当一个组件在视觉上包裹其他组件时，让它 接受 JSX 作为子组件。
- 优先使用局部状态，并且不要将 状态提升 到不必要的层级。
- 保持渲染逻辑纯粹。
- 避免不必要的 Effect 来更新状态。
- 尝试从Effect 中删除不必要的依赖项。

- useMemo(calculateValue, dependencies) 缓存函数执行结果 避免父组件每次都重新创建对象。 在每次重新渲染的时能够缓存计算的结果

  - calculateValue 不接受参数的但返回任意类型的需要缓存的值,这个函数内部调用的函数必须是纯函数;
  - dependencies 是 calculateValue 内部调用函数的依赖观测数组;
  - 自由依赖变化时才计算新的 value 值,如果不变则重用之前的值.
  - 需要在函数组件或自定义 hooks 的顶层调用
  - 在 Strict Mode 模式下会执行两次

用法:

- 跳过花费较大的计算 useMemo 中进行的计算明显很慢，而且它的依赖关系很少改变。
- 跳过组件的重新渲染 计算结果作为 props 传递给包裹在 memo 中的组件
- 缓存其他 hooks 的依赖

- useCallback()是 useMemo() 函数类型的语法糖
  useMemo(() => x => log(x), [n]);
  useMemo 缓存函数调用的结果,而useCallback 缓存函数本身。

  使用 useCallback 缓存函数仅在少数情况下有意义
  - 将其作为 props 传递给包装在 [memo] 中的组件。
  - 传递的函数可能作为某些 Hook 的依赖。

- useReducer(reducer, initialArg, init?) => [state, dispatch]
  init(initialArg)
  dispatch(action) => void
  reducer(currentState, action) => nextState
  react 将批量更新状态来防止在一次事件循环中多次重新渲染，若要提前渲染，需要调用`flushSync()`。

  useReducer()与 useState()非常类似，但是它将组件的状态更新逻辑抽离到组件外。
  state 是只读的，不能直接修改对象或数组型的 state。

## useEffectEvent

  useEffectEvent 可以提取非响应式逻辑到EffectEvent中, 从而避免在useEffect的指定依赖。 只能把它用在`不需要变成响应式`的代码上。Effect Event 是 Effect 代码的非响应式“片段”。

  使用局限性:
    - 只在 Effect 内部调用他们。
    - 永远不要把它们传给其他的组件或者 Hook。

  事件处理程序与Effect分离总结
    - 事件处理函数在响应特定交互时运行。
    - Effect 在需要同步的时候运行。
    - 事件处理函数内部的逻辑是非响应式的。
    - Effect 内部的逻辑是响应式的。
    - 可以将非响应式逻辑从 Effect 移到 Effect Event 中。
    - 只在 Effect 内部调用 Effect Event。
    - 不要将 Effect Event 传给其他组件或者 Hook。

lazy(load) 第一次被渲染之前延迟加载组件的代码
load: 一个返回 Promise 或另一个 thenable（具有 then 方法的类 Promise 对象）的函数。返回的 Promise 和 Promise 的解析值都将被缓存，因此 React 不会多次调用 load 函数。如果 Promise 被拒绝，则 React 将抛出拒绝原因给最近的错误边界处理。

useImperativeHandle(ref, createHandle, dependencies?) 自定义由 ref 暴露出来的句柄。

如果可以通过 prop 实现，那就不应该使用 ref。

useInsertionEffect(setup, dependencies?) 在布局副作用触发之前将元素插入到 DOM 中

- 不能在insertionEffect中更新状态，访问ref。
- insertionEffect的执行可能在DOM更新之前也可能在之后。
- useInsertionEffect中的setup和cleanup可能交错执行。

CSS-in-JS 三种常见的实现方法：

- 使用编译器静态提取到 CSS 文件
- 内联样式，例如 <div style={{ opacity: 1 }}>
- 运行时注入 <style> 标签

一般建议采用前两种方式（静态样式使用 CSS 文件，动态样式使用内联样式）

采用运行时注入 <style> 标签可能会有一下问题：

- 运行时注入会使浏览器频繁地重新计算样式。
- 如果在 React 生命周期中某个错误的时机进行运行时注入，它可能会非常慢。

第一个问题无法解决，但是 useInsertionEffect 可以帮助你解决第二个问题。

useTransition() 不阻塞 UI 的情况下更新状态

- 传递给 startTransition 的函数`必须是同步`的
- 标记为 transition 的状态更新可以被其他状态更新打断
- transition 更新不能用于控制文本输入。

## 重要问题

1. 全局变量或可变值可以作为依赖项吗？
  可变值（包括全局变量不是响应式的，如location.pathname这样的可变值不能作为依赖项。它是可变的，因此可以在 React 渲染数据流之外的任何时间发生变化。更改它不会触发组件的重新渲染。因此，即使在依赖项中指定了它，React也无法知道在其更改时重新同步Effect。这也违反了 React 的规则，因为在渲染过程中读取可变数据（即在计算依赖项时）会破坏纯粹的渲染。相反，应该使用 useSyncExternalStore 来读取和订阅外部可变值。
  另外，像 ref.current 或从中读取的值也不能作为依赖项。useRef 返回的 ref 对象本身可以作为依赖项，但其 current 属性是有意可变的。它允许 跟踪某些值而不触发重新渲染。但由于更改它不会触发重新渲染，它不是响应式值，React 不会知道在其更改时重新运行 Effect。

## 移除 Effect 依赖

Effect依赖应该是Effect中使用到响应式值，如state、props等，每个被 Effect 所使用的响应式值，必须在依赖中声明。其依赖由Effect中代码决定。
响应式值 包括 props 以及所有你直接在组件中声明的变量和函数。
不必要的依赖可能会导致 Effect 运行过于频繁，甚至产生无限循环。

- 在不同的条件下重新执行 Effect 的 不同部分
- 只读取某个依赖的 最新值，而不是对其变化做出“反应”
- 依赖可能会因为它的类型是对象或函数而 无意间 改变太频繁。

总结:

- 依赖应始终与代码匹配。
- 避免抑制 linter。要移除依赖，需要向 linter “证明”它不是必需的。
- 如果某些代码是为了响应特定交互，请将该代码移至事件处理的地方。
- 如果 Effect 的不同部分因不同原因需要重新运行，应将其拆分为多个 Effect。
- 如果想根据以前的状态更新一些状态，传递一个更新函数。
- 如果想读取最新值而不“反应”它，应从 Effect 中提取出一个 Effect Event。
- 尽量避免对象和函数依赖。将它们移到组件外或 Effect 内。

内置组件

- Fragement `<></>` 允许在不添加额外节点的情况下将子元素组合。
- 当要从 <><Child /></> 转换为  [<Child />] 或 <><Child /></> 转换为 <Child />，React 并不会重置 state。仅只在一层深度的情况下生效。
- Fragment 作用很大，它与将元素包裹在一个 DOM 容器中不同，使用 Fragment 对元素进行组合后不会影响布局和样式。
- 如果要传递 key 给一个 <Fragment>，不能使用 <>...</>，必须从 'react' 中导入 Fragment 且表示为<Fragment key={yourKey}>...</Fragment>

StrictMode

- 组件将`重新渲染一次`，以查找由于非纯渲染而引起的错误。
- 组件将`重新运行 Effect 一次`，以查找由于缺少 Effect 清理而引起的错误。
- 组件将被`检查是否使用了已弃用的 API`。

在由 <StrictMode> 包裹的树中，无法选择退出严格模式。

严格模式 在开发环境中会调用一些函数两次（仅限应为纯函数的函数）。这些函数包括：

- 组件函数体（仅限顶层逻辑，不包括事件处理程序内的代码）
- 传递给 useState、set 函数、useMemo 或 useReducer 的函数。
- 部分类组件的方法，例如 constructor、render、shouldComponentUpdate 等（请参阅完整列表）。

Suspense
允许在子组件完成加载前展示后备方案。

只有启用了 Suspense 的数据源才会激活 Suspense 组件，它们包括：

- 支持 Suspense 的框架如 Relay 和 Next.js。
- 使用 lazy 懒加载组件代码。
- 使用 use 读取 Promise 的值。

Suspense 无法 检测在 Effect 或事件处理程序中获取数据的情况。
加载数据的组件不必是 Suspense 边界的直接子组件。
Suspense 边界允许协调 UI 的哪些部分应该总是一起“浮现”，以及哪些部分应该按照加载状态的序列逐步显示更多内容。可以在树的任何位置添加、移动或删除 Suspense 边界，而不会影响应用程序的其余的行为。不要在每个组件周围都放置 Suspense 边界。

延迟值和 transition 都可以让你避免显示 Suspense 后备方案，而是使用内联指示器。transition 将整个更新标记为非紧急的，因此它们通常由框架和路由库用于导航。另一方面，延迟值在你希望将 UI 的一部分标记为非紧急，并让它“落后于” UI 的其余部分时非常有用。

React 只会在非紧急更新期间阻止不必要的后备方案。这意味着它不会阻止紧急更新的 fallback。你必须使用 startTransition 或 useDeferredValue 这样的 API 来选择性的优化。

如果你的路由集成了 Suspense，它将会自动将更新包装到 startTransition 中。

## 自定义Hooks

自定义 Hook 共享的是状态逻辑，而不是状态本身。对 Hook 的每个调用完全独立于对同一个 Hook 的其他调用。
每当组件重新渲染，自定义 Hook 中的代码就会重新运行。
好的自定义 Hook 通过限制功能使代码调用更具声明性。
