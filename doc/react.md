# React

状态提升
单向数据流 通过组件层级结构从父组件传递数据至子组件
数据驱动

## 常用工具和插件

- create-vite
- `create-next-app`
- `create-remix`
- create-gatsby
- `create-expo-app`

eslint-plugin-react-hooks
eslint-config-react-app
eslint-config-prettier 禁用eslint格式化使用prettier格式化

react-devtools

支持正则搜索过滤

优化方法

- 渲染更少的组件
- 减少组件的层级
- 使用列表虚拟化(窗口化)优化长列表渲染
- 缓存组件，最小化重新渲染

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

## Props

- 只读 React仅在响应状态变更时重新渲染组件。Props是根据状态变更来更新组件的机制。如果更改组件内prop值，会导致组件内的数据与浏览器中显示的内容不同步，并且在下一次渲染时会被父组件重置Props的值。更改组件中的props值不会产生预期效果。
- 组件可以接收任意数量的props
- props的值可以是任意类型

React 19 删除PropType检查 移除函数组件的propType和defaultProps属性，类组件继续支持defaultProps属性。

PropTypes props类型检查和记录，不会自行修复。
propTypes是一个静态属性
缺失的prop不会触发PropType警告
node验证器会检查是否可以渲染prop的值。可渲染的内容有数值、字符串、元素以及包含数组、字符串或元素的数组。
PropTypes.element检查子prop是否包含React元素，检查渲染的元素
PropTypes.elementType 检查prop是否为React元素类型，检查未渲染的元素
PropTypes.instanceOf JavaScript类验证
PropTypes.oneOf 测试prop的值是否为列表中的某个特定项
PropTypes.oneOfType 测试prop的值是否为类型列表中的某个特定项的类型
PropTypes.arrayOf 测试prop的值是否为一个数组，并且数组中的每个元素都匹配指定的类型
PropTypes.objectOf 测试prop的值是否为一个对象，并且对象中的每个属性都匹配指定的类型
PropTypes.shape 测试prop的值是否为包含特定属性的对象，并且每个属性都匹配指定的类型。
PropTypes.exact 对prop执行严格的对象匹配。
自定义验证器是一个在使用时自动接收三个参数的函数：

- 包含组件接收的所有props的对象
- 正在测试的prop
- 组件名称

### 默认Props

通过设置组件的静态属性defaultProps指定未传递props值时组件的默认值

## State

组件的state属性控制组件的行为和更新

- 类组件的state对象可以根据需要拥有任意数量的属性
- 并非所有类都需要有state对象
- 如果组件使用了state对象，则必须对其进行初始化
- 可在constructor函数初始化state对象
- 使用class属性可以在没有constructor函数的情况下初始化state对象

类组件中的setState会合并对象，而函数组件的useState返回的setState则会替换原来的state。

## 组件

纯函数仅执行计算操作，不做其他操作。组件应按纯函数严格编写，以避免一些随着代码库的增长而出现的、令人困扰的 bug 以及不可预测的行为。

纯函数特征:

- 只负责自己的任务。 它不会更改在该函数调用前就已存在的对象或变量。
- 输入相同，则输出相同。 给定相同的输入，纯函数应总是返回相同的结果。

React假设所有组件都是纯函数。React的渲染过程必须自始至终是纯粹的。组件应该只返回它们的 JSX，而不 改变 在渲染前，就已存在的任何对象或变量。

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

## 样式化组件

CSS模块解决了CSS中命名冲突和作用域的问题，在组件的编译后CSS模块被转换为JS对象。
以`.module.css`结尾的文件指示编译器将文件当作CSS模块来处理。
以小写字母和连字符连接所用组件的名称。

全局类 在类名前加`:global`前缀
类合成 通过扩展现有类来在CSS模块中创建新类 使用`compose`属性，属性值为需要扩展的类列表

CSS-IN-JS
styled-components

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

  - useState返回的setter函数不会进行对象合并

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

- Effect 是一段响应式的代码块。它们在读取的值发生变化时重新进行同步。与事件处理程序不同，事件处理程序只在每次交互时运行一次，而 Effect 则在需要进行同步时运行。

- 不能“选择”依赖项。依赖项必须包括 Effect 中读取的每个 响应式值。代码检查工具会强制执行此规则。有时，这可能会导致出现无限循环的问题，或者 Effect 过于频繁地重新进行同步。不要通过禁用代码检查来解决这些问题！
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

## 单向数据流

数据向下流动，事件向上流动

需要显式定义事件修改数据
可以避免用户交互的复杂性和错误。

双向数据流
方便，组件的数据可以由父组件修改，组件内部的更改可以直接影响父组件中的数据。增加了用户交互理解的复杂性和出错的可能性。
数据更新来源不清晰

React API变更

- 删除contextTypes and getChildContext v16.6.0 2018
- 删除字符型Ref v16.3.0 2018
- 删除Module pattern factories v16.9.0 2019
- Removed: React.createFactory v16.13.0 2020
