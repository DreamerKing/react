1. 声明式
2. 组件化
3. 跨平台

尽管事件处理器看似被内联地渲染，但它们其实只会被事件委托进行收集和调用。

createRoot()

工具链
next SSR
Gatsby CMS
Neutrino
Nx 全栈
Parcel
Razzle SSR 无需配置

JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合。
在 JSX 中嵌入表达式使用`{}`。
在 JSX 中嵌入表达式，在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。
JSX 中指定属性

1. 使用引号，来将属性值指定为字符串字面量
2. 使用大括号，来在属性值中插入一个 JavaScript 表达式。
   因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

JSX 防止注入攻击，React DOM 在渲染所有输入内容之前，默认会进行转义。

JSX 表示对象，Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。

React 元素是创建开销极小的普通不可变对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。

组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。
组件接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

函数组件 接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素
class 组件
当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。

React 会将以小写字母开头的组件视为原生 DOM 标签。组件名称必须以大写字母开头。

组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。
所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。

正确使用 State

1. 不要直接修改 State,而是应该使用 setState(),构造函数是唯一可以给 this.state 赋值的地方。
2. State 的更新可能是异步的,React 可能会把多个 setState() 调用合并成一个调用。
3. State 的更新会被合并, 当调用 setState()时，React 会把提供的对象合并到当前的 state。

数据是向下流动的
不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。

事件处理

1. React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
2. 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。
3. 不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault。
4. 不需要担心跨浏览器的兼容性问题。

@babel/plugin-proposal-class-properties

如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。

条件渲染

1. 函数包装
2. 元素变量
3. 与运算符 && (返回 false 的表达式会使 && 后面的元素被跳过，但会返回 false 表达式。)
4. 三目条件运算符

阻止组件渲染
在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。在组件的 render 方法中返回 null 并不会影响组件的生命周期。

key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。元素的 key 只有放在就近的数组上下文中才有意义。key 值在兄弟节点之间必须唯一。key 会传递信息给 React ，但不会传递给你的组件。

受控组件与非受控组件

在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。对于受控组件来说，输入的值始终由 React 的 state 驱动。

在 HTML 中, <textarea> 元素通过其子元素定义其文本。而在 React 中，<textarea> 使用 value 属性代替。

Formik(https://formik.org/)
Redux-Form

```
yarn add formik
```

render props

Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。
React 单向数据流（也叫单向绑定）的思想使得组件模块化，易于快速开发。

1. state 与 props 的区别是什么?
   state 是组件自己维护的可变数据。
   props 是父组件传递给子组件的不可变数据。
   它们都是普通的 JavaScript 对象，是用来保存信息的，这些信息可以控制组件的渲染输出。

2. setState 传递一个对象与一个函数的区别是什么?
   setState() 会对一个组件的 state 对象安排一次更新。当 state 改变了，该组件就会重新渲染。
   给 setState 传递一个函数，而不是一个对象，就可以确保每次的调用都是使用最新版的 state。
   传递一个函数可以让你在函数内访问到当前的 state 的值。因为 setState 的调用是分批的，所以你可以链式地进行更新，并确保它们是一个建立在另一个之上的，这样才不会发生冲突。
3. setState 什么时候是异步的？
   在事件处理函数内部的 setState 是异步的。
   React 会将该 state “冲洗” 到浏览器事件结束的时候，再统一地进行更新。这种机制可以在大型应用中得到很好的性能提升。
4. 为什么 React 不同步地更新 this.state？
   在开始重新渲染之前，React 会有意地进行“等待”，直到所有在组件的事件处理函数内调用的 setState() 完成之后。这样可以通过避免不必要的重新渲染来提升性能。
   为什么 React 不能立即更新 this.state，而不对组件进行重新渲染呢。
   主要有两个原因：
   1. 这样会破坏掉 props 和 state 之间的一致性，造成一些难以 debug 的问题。
   2. 这样会让一些我们正在实现的新功能变得无法实现。

React 的 setState 本身并不是异步的，是因为其批处理机制给人一种异步的假象。

【React 的更新机制】

生命周期函数和合成事件中：

无论调用多少次 setState，都不会立即执行更新。而是将要更新的 state 存入'\_pendingStateQuene',将要更新的组件存入'dirtyComponent';
当根组件 didMount 后，批处理机制更新为 false。此时再取出'\_pendingStateQuene'和'dirtyComponent'中的 state 和组件进行合并更新；
原生事件和异步代码中：

原生事件不会触发 react 的批处理机制，因而调用 setState 会直接更新；
异步代码中调用 setState，由于 js 的异步处理机制，异步代码会暂存，等待同步代码执行完毕再执行，此时 react 的批处理机制已经结束，因而直接更新。
总结：
react 会表现出同步和异步的现象，但本质上是同步的，是其批处理机制造成了一种异步的假象。（其实完全可以在开发过程中，在合成事件和生命周期函数里，完全可以将其视为异步）

代码分割

1. import() @babel/plugin-syntax-dynamic-import
2. React.lazy() Suspence startTransition()
3. 命名导出

Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。
frowardRef((props, ref) => Component)

React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。key 是唯一可以传递给 Fragment 的属性。

高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。具体而言，高阶组件是参数为组件，返回值为新组件的函数。

使用 HOC 解决横切关注点问题，HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用。

JSX
false, null, undefined, and true 是合法的子元素。但它们并不会被渲染。这有助于依据特定条件来渲染其他的 React 元素。值得注意的是有一些 “falsy” 值，如数字 0，仍然会被 React 渲染。

性能优化
最小化 DOM 操作次数

```
yarn add --dev terser-brunch
brunch build -p
```

rollup

```
yarn add --dev rollup-plugin-commonjs rollup-plugin-replace rollup-plugin-terser
```

虚拟化长列表
虚拟滚动 这项技术会在有限的时间内仅渲染有限的内容，并奇迹般地降低重新渲染组件消耗的时间，以及创建 DOM 节点的数量。react-window 和 react-virtualized 是热门的虚拟滚动库。 它们提供了多种可复用的组件，用于展示列表、网格和表格数据。

避免调停
当一个组件的 props 或 state 变更，React 会将最新返回的元素与之前渲染的元素进行对比，以此决定是否有必要更新真实的 DOM。当它们不相同时，React 会更新该 DOM。
如果你知道在什么情况下你的组件不需要更新，你可以在 shouldComponentUpdate 中返回 false 来跳过整个渲染过程。其包括该组件的 render 调用以及之后的操作。
在大部分情况下，你可以继承 React.PureComponent 以代替手写 shouldComponentUpdate()。它用当前与之前 props 和 state 的浅比较覆写了 shouldComponentUpdate() 的实现。

Portals
Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
createPortal(child, container)

Profiler
测量一个 React 应用多久渲染一次以及渲染一次的“代价”。
它的目的是识别出应用中渲染较慢的部分，或是可以使用类似 memoization 优化的部分，并从相关优化中获益。

refs

createRef()

几个适合使用 refs 的情况：

1. 管理焦点，文本选择或媒体播放。
2. 触发强制动画。
3. 集成第三方 DOM 库。

避免使用 refs 来做任何可以通过声明式实现来完成的事情。

ref 的值根据节点的类型而有所不同：

- 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
- 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
- 不能在函数组件上使用 ref 属性，因为他们没有实例。
  useRef() forwardRef() useImperativeHandle()

回调 Refs
它能助你更精细地控制何时 refs 被设置和解除。

与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。

React Hook
Eeffect Hook 可以在函数组件中执行副作用操作
useEffect 相当于 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
在 React 组件中有两种常见副作用操作：需要清除的和不需要清除的。
在 React 更新 DOM 之后运行一些额外的代码。比如发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作。
useEffect 做了什么? 通过使用这个 Hook，可以告诉 React 组件需要在`渲染后执行某些操作`。当 React 渲染组件时，`会保存已使用的 effect`，并且在`更新DOM完之后调用它`。这个过程在每次渲染时都会发生，包括首次渲染。
为什么要在函数组件内部调用 useEffect? 将 useEffect 放在组件内部可以在 effect 中`直接访问 state 变量（或其他 props）` —— 已保存在函数作用域中。Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。
useEffect 会在每次渲染后执行吗? 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。每个 effect “属于”一次特定的渲染。

与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让应用看起来响应更快。大多数情况下，effect 不需要同步地执行。在个别情况下（例如测量布局），有单独的 useLayoutEffect Hook 供你使用，其 API 与 useEffect 相同。

需要清除的 effect 如订阅外部数据源。这种情况下，清除工作是非常重要的，可以防止引起内存泄露。
在 React class 中，你通常会在 componentDidMount 中设置订阅，并在 componentWillUnmount 中清除它。使用生命周期函数迫使我们拆分这些逻辑代码，即使这两部分代码都作用于相同的副作用。

为什么要在 effect 中返回一个函数？ 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。

React 何时清除 effect？ React 会在组件卸载的时候执行清除操作。effect 在每次渲染的时候都会执行。这就是为什么 React 会在执行当前 effect 之前对上一个 effect 进行清除。有些副作用可能需要清除，所以需要返回一个函数。

为什么每次更新的时候都要运行 Effect?
可能会因为忘记正确地处理 componentDidUpdate 导致内存泄露或崩溃的问题。
useEffect 并不会受到影响。Eeffect 并不需要特定的代码来处理更新逻辑，因为 useEffect 默认就会处理。它会在调用一个新的 effect 之前对前一个 effect 进行清理。此默认行为保证了一致性，避免了在 class 组件中因为没有处理更新逻辑而导致常见的 bug。

- 使用多个 Effect 实现关注点分离
  使用 Hook 其中一个目的就是要解决 class 中生命周期函数经常包含不相关的逻辑，但又把相关逻辑分离到了几个不同方法中的问题。Hook 允许我们按照代码的用途分离他们， 而不是像生命周期函数那样。React 将按照 effect 声明的顺序依次调用组件中的每一个 effect。
- 通过跳过 Effect 进行性能优化
  在某些情况下，每次渲染后都执行清理或者执行 effect 可能会导致性能问题。在 class 组件中，可以通过在 componentDidUpdate 中添加对 prevProps 或 prevState 的比较逻辑解决。
  如果某些特定值在两次重渲染之间没有发生变化，可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可。如果数组中有多个元素，即使只有一个元素发生变化，React 也会执行 effect。

确保数组中包含了所有外部作用域中会随时间变化并且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量。

启用 eslint-plugin-react-hooks 中的 exhaustive-deps 规则。此规则会在添加错误依赖时发出警告并给出修复建议。

Hook 使用规则
Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循两条规则。

- 只在最顶层使用 Hook
  不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。

- 只在 React 函数中调用 Hook 或自定义 Hook 中调用其他 Hook。
  不要在普通的 JavaScript 函数中调用 Hook。遵循此规则，确保组件的状态逻辑在代码中清晰可见。

React 怎么知道哪个 state 对应哪个 useState？ React 靠的是 Hook 调用的顺序。Hook 的调用顺序在每次渲染中都是相同的，所以它能够正常工作。只要 Hook 的调用顺序在多次渲染之间保持一致，React 就能正确地将内部 state 和对应的 Hook 进行关联。如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的内部。

在 React 中有两种流行的方式来共享组件之间的状态逻辑: render props 和高阶组件。

自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。自定义 Hook 是一种自然遵循 Hook 设计的约定，而并不是 React 的特性。
与 React 组件不同的是，自定义 Hook 不需要具有特殊的标识。我们可以自由的决定它的参数是什么，以及它应该返回什么。自定义 Hook 是一种重用状态逻辑的机制，所以每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的。

useReducer 是另一种可选方案，它更适合用于管理包含多个子值的 state 对象。

惰性初始 state
initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用。

跳过 state 更新
调用 State Hook 的更新函数并传入当前的 state 时，React 将跳过子组件的渲染及 effect 的执行。
