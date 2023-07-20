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

Hook 比普通函数更为严格。只能在组件（或其他 Hook）的 `顶层调用` Hook。如果需要条件或循环中使用hook，则需要提取一个新的组件并在组件内部顶层使用。

- useState() 在函数组件中管理状态
  - 调用更新函数时，React 将自动重新渲染组件;
  - 更新函数可以接受一个值或一个函数作为参数;
  - 更新函数是异步的，这使得 React 能够优化状态更新并提高性能；
  - 更新函数可以接受一个回调函数作为参数，该回调函数将在状态值更新完毕后被调用。这使得您可以在更新状态值后执行其他操作，例如更新 DOM、调用 API 或触发其他副作用。
- useContext()

  不是响应式的。 更新机制是自上而下的逐级更新数据重新渲染，而不是监听数据变化，直接通知相应组件修改。

- useEffect()
  - componentDidMount()
  - componentDidUpdate() 需要指定依赖
  - componentWillUnmount() 通过 return 返回清理函数

当第二参数为[]时，表示只是第一次渲染时执行;
当省略第二个参数时,表示每次渲染都会执行;
当第二个参数写入依赖时，只有依赖包含的某个值发生变化时执行;
若返回一个函数,组件销毁时会执行这个函数。

useEffect 在浏览器渲染完成后执行,useLayoutEffect 在浏览器渲染完成前执行。
useLayoutEffect 总是比 useEffect 先执行。

- useLayoutEffect() 里的任务最好影响了 Layout。为了用户体验，优先使用 useEffect(优先渲染)。
  在重新渲染前执行计算布局相关的操作

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
