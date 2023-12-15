# React

状态提升
单向数据流 通过组件层级结构从父组件传递数据至子组件
数据驱动

`create-next-app`
`create-remix`
create-gatsby
`create-expo-app`

eslint-plugin-react-hooks
eslint-config-react-app
eslint-config-prettier 禁用eslint格式化使用prettier格式化

react-devtools

## JSX

1. 只能返回一个根元素 (不能在一个函数中返回多个对象)
2. 标签必须闭合
3. 使用驼峰式命名法给 所有 大部分属性命名 (JavaScript 对变量的命名有限制)
4. 使用大括号插值 可以将 JavaScript 的逻辑和变量带入到标签中
   1. 用作 JSX 标签内的文本
   2. 标签的属性值
5. 引号内的值会作为字符串传递给属性
6. 事件绑定传递的是绑定函数而不是函数调用表达式。

当将内容嵌套在 JSX 标签中时，父组件将在名为 `children` 的 prop 中接收到该内容。

React 组件是一段可以 使用标签进行扩展 的 JavaScript 接受唯一参数对象prop的函数。组件的名称必须以大写字母开头。

props 是 不可变的。

Fragment 语法的简写形式 <> </> 无法接受 key 值

key 需要满足的条件

- 值在兄弟节点之间必须是唯一的
- 稳定不变的

组件不会把 key 当作 props 的一部分。Key 的存在只对 React 本身起到提示作用。

使用索引或在列表上动态生成会导致列表顺序错乱或者组件状态丢失。

为何以及如何给集合中的每个组件设置一个 key 值：它使 React 能追踪这些组件，即便后者的位置或数据发生了变化。

React 无法保证组件函数以任何特定的顺序执行，因此无法通过设置变量在它们之间进行通信。所有的交流都必须通过 props 进行。

在 React 中，副作用通常属于 事件处理程序。事件处理程序是 React 在你执行某些操作（如单击按钮）时运行的函数。即使事件处理程序是在你的组件 内部 定义的，它们也`不会在渲染期间运行`！ 因此事件处理程序无需是纯函数。如果无法找到合适事件处理程序，可以调用组件中的 useEffect 方法将其附加到返回的 JSX 中。这会告诉 React 在`渲染结束后执行`它。

## 组件

一个组件必须是纯粹的

- 只负责自己的任务。 它不会更改在该函数调用前就已存在的对象或变量。
- 输入相同，则输出相同。 给定相同的输入，组件应该总是返回相同的 JSX。

渲染随时可能发生，因此组件不应依赖于彼此的渲染顺序。
不应该改变组件用于渲染的任何输入。这包括 props、state 和 context。通过 “设置” state 来更新界面，而不要改变预先存在的对象。
尽量在返回的 JSX 中表达组件的逻辑。当需要“改变事物”时，你通常在事件处理程序中进行。作为最后的手段，可以使用 useEffect。

在 React 中所有事件都会传播，除了 onScroll，它仅适用于你附加到的 JSX 标签。

捕获事件在相应事件后加Capture。

事件处理函数是执行副作用的最佳位置。

只有改变已经处于 state 中的 现有 对象时，mutation 才会成为问题。可以 在渲染的过程中 进行“局部 mutation”的操作。

将 React 中所有的 state 都视为不可直接修改的。
当你在 state 中存放对象时，直接修改对象并不会触发重渲染，并会改变前一次渲染“快照”中 state 的值。
不要直接修改一个对象，而要为它创建一个 新 版本，并通过把 state 设置成这个新版本来触发重新渲染。可以使用对象展开语法来创建对象的拷贝。对象的展开语法是浅层的：它的复制深度只有一层。想要更新嵌套对象，需要从需要更新的位置开始自底向上为每一层都创建新的拷贝。
想要减少重复的拷贝代码，可以使用 Immer。

React 允许你覆盖默认行为，可通过向组件传递一个唯一 key 来 强制 重置其状态。

## Hooks

- State Hook 状态存储和变更
  - useState 直接更新
  - useReducer 声明式状态更新逻辑
- Context Hook 跨组件数据传递
  - useContext
- Ref Hook 保存一些不用于渲染的信息，更新ref不会重新渲染组件
  - useRef
  - useImperativeHandle
- Effect Hook 组件与外部系统之间同步，包括处理网络、浏览器、DOM、动画、使用不同 UI 库编写的小部件以及其他非 React 代码。避免使用 Effect 协调应用程序的数据流。
  - useEffect
  - useLayoutEffect 在浏览器重新绘制屏幕前执行，可以在此处测量布局。
  - useInsertionEffect 在 React 对 DOM 进行更改之前触发，库可以在此处插入动态 CSS。
- 性能Hook 如使用缓存、跳过重新渲染
  - useMemo 缓存计算代价昂贵的计算结果
  - useCallback 函数传递给优化组件之前缓存函数定义
  - useTransition 允许将状态转换标记为非阻塞，并允许其他更新中断它。
  - useDeferredValue 允许延迟更新 UI 的非关键部分，以让其他部分先更新。
  将必须同步的阻塞更新（比如使用输入法输入内容）与不需要阻塞用户界面的非阻塞更新（比如更新图表）分离以提高性能。
- 资源Hook 资源可以被组件访问，而无需将它们作为状态的一部分。
  - use 允许读取像 Promise 或 上下文 这样的资源的值。
- 其他Hook
  - useDebugValue 自定义 React 开发者工具为自定义 Hook 添加的标签。
  - useId 将唯一的 ID 与组件相关联，其通常与可访问性 API 一起使用
  - useSyncExternalStore 订阅外部 store
- 自定义Hook

Hook 比普通函数更为严格。只能在组件（或其他 Hook）的 `顶层调用` Hook。如果需要条件或循环中使用hook，则需要提取一个新的组件并在组件内部顶层使用。

- useState(initialState) 在函数组件中管理状态
  - 如果传递函数作为 initialState，则它将被视为 初始化函数。它应该是纯函数，不应该接受任何参数，并且应该返回一个任何类型的值。当初始化组件时，React 将调用你的初始化函数，并将其返回值存储为初始状态。在初始渲染后，此参数将被忽略。
  - 调用更新函数时，React 将自动重新渲染组件;
  - 更新函数可以接受一个值或一个函数作为参数;
  - 更新函数是异步的，这使得 React 能够优化状态更新并提高性能；
  - 更新函数可以接受一个回调函数作为参数，该回调函数将在状态值更新完毕后被调用。这使得您可以在更新状态值后执行其他操作，例如更新 DOM、调用 API 或触发其他副作用。
  - set 函数，它可以让你将 state 更新为不同的值并触发重新渲染。它必须是纯函数，只接受待定的 state 作为其唯一参数，并应返回下一个状态。React 将把你的更新函数放入队列中并重新渲染组件。在下一次渲染期间，React 将通过把队列中所有更新函数应用于先前的状态来计算下一个状态。
  - React 会 批量处理状态更新。它会在所有 事件处理函数运行 并调用其 set 函数后更新屏幕。这可以防止在单个事件期间多次重新渲染。在某些罕见情况下，你需要强制 React 更早地更新屏幕，例如访问 DOM，你可以使用 flushSync。
  - 通过向组件传递不同的 key 来重置组件的状态。
  - 当你在渲染期间调用 set 函数时，React 将在你的组件使用 return 语句退出后立即重新渲染该组件，并在渲染子组件前进行。这样，子组件就不需要进行两次渲染。你的组件函数的其余部分仍会执行（然后结果将被丢弃）。如果你的条件判断在所有 Hook 调用的下方，可以提前添加一个 return; 以便更早地重新开始渲染。

- useReducer()
  - reducer()必须是纯函数，不应该包含异步请求、定时器或者任何副作用（对组件外部有影响的操作）。它们应该以`不可变值`的方式去更新 对象 和 数组。
  - reducer()在渲染时运行
- useContext()

  不是响应式的。 更新机制是自上而下的逐级更新数据重新渲染，而不是监听数据变化，直接通知相应组件修改。

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

memo() 使得组件只有依赖的 props 发生变化才会执行一遍并且再次渲染。

- useMemo(calculateValue, dependencies) 缓存函数执行结果。

  - calculateValue 不接受参数的但返回任意类型的需要缓存的值,这个函数内部调用的函数必须是纯函数;
  - dependencies 是 calculateValue 内部调用函数的依赖观测数组;
  - 自由依赖变化时才计算新的 value 值,如果不变则重用之前的值.
  - 需要在函数组件或自定义 hooks 的顶层调用
  - 在 Strict Mode 模式下会执行两次

用法:

- 跳过花费较大的计算
- 跳过组件的重新渲染
- 缓存其他 hooks 的依赖

- useCallback()是 useMemo() 函数类型的语法糖
  useMemo(() => x => log(x), [n]);

- useReducer(reducer, initialArg, init?) => [state, dispatch]
  init(initialArg)
  dispatch(action) => void
  reducer(currentState, action) => nextState
  react 将批量更新状态来防止在一次事件循环中多次重新渲染，若要提前渲染，需要调用`flushSync()`。

  useReducer()与 useState()非常类似，但是它将组件的状态更新逻辑抽离到组件外。
  state 是只读的，不能直接修改对象或数组型的 state。

useEffectEvent 可以提取非响应式逻辑到 Effect Event 中。
