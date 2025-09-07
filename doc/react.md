# React

## 状态提升

状态提升是React组件设计的基础模式，指的是将多个组件需要共享的状态从子组件移动到它们的共同父组件中管理。

### 核心概念

1. **共享状态管理**
   - 当多个子组件需要访问和修改同一个状态时，将状态提升到它们的共同父组件
   - 父组件成为"单一数据源"(Single Source of Truth)
   - 通过props将状态传递给需要的子组件

2. **数据流向**
   - **数据向下流动**：父组件通过props将状态传递给子组件
   - **事件向上流动**：子组件通过回调函数通知父组件更新状态

### 实现步骤

1. **识别共享状态**：找出需要在多个组件间共享的状态
2. **找到共同父组件**：确定所有需要该状态的组件的最近共同祖先
3. **移动状态**：将状态从子组件移动到共同父组件
4. **传递状态**：通过props将状态传递给子组件
5. **传递更新函数**：通过props传递状态更新函数给子组件

### 优势

- **数据一致性**：确保所有组件使用相同的数据源
- **可预测性**：数据流向清晰，便于调试和维护
- **组件解耦**：子组件不需要知道数据的来源，只关注展示和交互
- **状态同步**：多个组件的状态自动保持同步

### 示例场景

```javascript
// 温度转换器 - 状态提升的经典例子
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>在{scale === 'c' ? '摄氏度' : '华氏度'}中输入温度：</legend>
      <input
        value={temperature}
        onChange={e => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={scale === 'c' ? temperature : tryConvert(temperature, toFahrenheit)}
        onTemperatureChange={temp => { setTemperature(temp); setScale('c'); }}
      />
      <TemperatureInput
        scale="f"
        temperature={scale === 'f' ? temperature : tryConvert(temperature, toCelsius)}
        onTemperatureChange={temp => { setTemperature(temp); setScale('f'); }}
      />
    </div>
  );
}
```

### 注意事项

- **避免过度提升**：只在确实需要共享时才提升状态
- **性能考虑**：状态提升可能导致不必要的重新渲染
- **组件复杂性**：过度提升会使父组件变得复杂
- **使用Context**：当状态需要跨越多层组件时，考虑使用React Context

### 与其他模式的关系

- **组合模式**：通过children prop传递组件，减少状态提升的需要
- **Context模式**：避免深层props传递，适合全局或跨多层的状态
- **状态管理库**：Redux、Zustand等，用于复杂应用的状态管理

## 受控组件与非受控组件

### 受控组件

受控组件是指其状态完全由props驱动的组件，组件本身不维护内部状态。

**特点：**

- 组件的状态由父组件通过props传递
- 组件不维护自己的内部状态
- 所有状态变更都通过回调函数通知父组件
- 数据流是单向的：props → 组件显示，事件 → 回调函数

**示例：**

```javascript
// 受控组件 - 状态由父组件管理
function ControlledInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}

// 父组件控制子组件状态
function ParentComponent() {
  const [inputValue, setInputValue] = useState('');

  return (
    <ControlledInput
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
```

### 非受控组件 (Uncontrolled Components)

非受控组件是指组件自身维护内部状态，不依赖于外部props来控制状态的组件。

**特点：**

- 组件维护自己的内部状态（使用useState、useReducer等）
- 不依赖父组件传递状态
- 可以通过props接收初始值或配置
- 通过回调函数向父组件报告状态变化（可选）

**示例：**

```javascript
// 非受控组件 - 组件自身维护状态
function UncontrolledInput({ initialValue = '', onValueChange }) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    // 可选：通知父组件状态变化
    onValueChange?.(newValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}

// 父组件使用非受控组件
function ParentComponent() {
  return (
    <UncontrolledInput
      initialValue="默认值"
      onValueChange={(value) => console.log('值变化:', value)}
    />
  );
}
```

### 核心区别对比

| 特性         | 受控组件                          | 非受控组件                              |
|------------|-----------------------------------|---------------------------------------|
| **状态管理** | 由父组件通过props控制             | 组件自身维护内部状态                    |
| **数据来源** | props                             | 内部state                               |
| **状态更新** | 通过回调函数通知父组件            | 组件内部直接更新state                   |
| **初始值**   | 通过props传递                     | 可通过props接收，也可内部定义            |
| **灵活性**   | 父组件完全控制,灵活但需要更多配置 | 组件自主性强,配置少,易于使用,不怎么灵活 |
| **复杂度**   | 父组件需要管理更多状态            | 组件内部逻辑相对简单                    |
| **重用性**   | 高度可重用，行为一致               | 可重用，但行为可能因内部状态而异         |
| **测试**     | 容易测试，行为可预测               | 需要测试内部状态变化                    |

### 使用场景建议

**使用受控组件的情况：**

- 需要在多个组件间共享和同步状态
- 父组件需要完全控制子组件的行为
- 需要实现复杂的状态协调逻辑
- 表单验证需要在父组件层面进行
- 需要实现撤销/重做功能

**使用非受控组件的情况：**

- 组件功能相对独立，不需要与外部紧密协调
- 希望组件具有自主性和封装性
- 简化父组件的状态管理
- 组件内部逻辑比较复杂，适合封装
- 构建可复用的组件库

### 最佳实践

1. **明确组件职责**：根据组件是否需要外部控制来选择模式
2. **状态提升原则**：当多个组件需要共享状态时，使用受控组件
3. **封装性考虑**：独立功能的组件可以设计为非受控组件
4. **混合使用**：同一个组件可以同时支持受控和非受控模式
5. **文档说明**：清楚标明组件是受控还是非受控的

### 混合模式示例

```javascript
// 支持受控和非受控两种模式的组件
function FlexibleInput({ value, onChange, defaultValue = '' }) {
  // 内部状态
  const [internalValue, setInternalValue] = useState(defaultValue);

  // 判断是否为受控组件
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(e);
  };

  return (
    <input
      type="text"
      value={currentValue}
      onChange={handleChange}
    />
  );
}

// 受控模式使用
<FlexibleInput value={controlledValue} onChange={setControlledValue} />

// 非受控模式使用
<FlexibleInput defaultValue="初始值" onChange={(e) => console.log(e.target.value)} />
```

## 数据驱动与数据流

### 数据驱动

数据驱动是现代前端框架的核心理念，UI的呈现完全由数据状态决定。

**核心思想：**

- **UI = f(data)**：用户界面是数据的函数
- **状态驱动渲染**：当数据改变时，UI自动更新
- **声明式编程**：描述想要的结果，而不是如何实现

**优势：**

- 简化开发：专注于数据逻辑，UI自动更新
- 一致性：相同数据总是产生相同UI
- 可预测：UI状态完全由数据决定
- 易测试：测试数据变化即可验证UI

**React中的数据驱动：**

```javascript
function DataDrivenComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 根据不同数据状态渲染不同UI
  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;
  if (users.length === 0) return <div>暂无数据</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### 单向数据流

单向数据流是React的核心设计理念，指数据在应用中只能单向传递。

**核心特点：**

- **数据向下流动**：数据从父组件通过props传递给子组件
- **事件向上传播**：子组件通过回调函数将事件通知给父组件
- **单一数据源**：每个状态都有明确的"拥有者"组件
- **可预测性**：数据流向清晰，便于调试和理解

**优势：**

- 降低复杂性，避免数据混乱
- 便于调试，数据变化路径清晰
- 提高可维护性和可测试性
- 避免意外的副作用

**示例：**

```js
// 父组件管理状态，向下传递数据
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <ChildComponent
        count={count}
        onIncrement={handleIncrement}
      />
    </div>
  );
}

// 子组件接收props，通过回调向上通信
function ChildComponent({ count, onIncrement }) {
  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={onIncrement}>增加</button>
    </div>
  );
}
```

### 双向数据流

双向数据流允许数据在组件间双向传递和同步。

**特点：**

- 数据可以在父子组件间双向流动
- 子组件可以直接修改父组件的数据
- 数据绑定更加便捷

**问题：**

- 数据流向复杂，难以追踪数据变化来源
- 容易产生意外的副作用
- 调试困难，状态变化不可预测
- 组件间耦合度高

**React中的双向绑定实现：**

```js
// 模拟双向绑定的效果
function TwoWayBinding() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="双向绑定示例"
    />
  );
}
```

### 对比总结

| 特性         | 单向数据流  | 双向数据流     |
|------------|------------|---------------|
| **复杂度**   | 低，流向清晰 | 高，流向复杂    |
| **调试**     | 容易追踪    | 困难定位       |
| **性能**     | 可控性强    | 可能有冗余更新 |
| **维护性**   | 高          | 低             |
| **学习成本** | 稍高        | 较低           |

### 最佳实践

1. **坚持单向数据流**：避免子组件直接修改父组件状态
2. **状态提升**：将共享状态提升到最近的共同父组件
3. **数据驱动思维**：先设计数据结构，再考虑UI展示
4. **最小化状态**：只保存必要的状态，其他数据通过计算得出
5. **不可变性**：避免直接修改状态对象，使用不可变的方式更新

## 渲染树 (Render Tree)

渲染树是React应用中组件层次结构的可视化表示，描述了组件之间的父子关系和数据流向。

### 核心概念

**定义：**

- 渲染树是React组件实例的树状结构
- 反映了组件的嵌套关系和层级结构
- 是React内部用来管理组件生命周期和状态的数据结构

**组成元素：**

- **节点**：每个组件实例在渲染树中对应一个节点
- **边**：表示父子组件关系
- **根节点**：应用的顶层组件（通常是App组件）
- **叶节点**：没有子组件的组件

### 渲染树的特点

1. **层次结构**：严格的树状结构，每个节点有唯一父节点
2. **动态性**：随着组件的挂载、更新、卸载而动态变化
3. **单向关系**：数据和props只能从父节点向子节点流动
4. **唯一性**：每个组件实例在树中有唯一位置

### 示例结构

```javascript
// 组件代码
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <Navigation />
      <Logo />
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <Sidebar />
      <Content />
    </main>
  );
}

function Navigation() {
  return (
    <nav>
      <NavItem />
      <NavItem />
    </nav>
  );
}
```

**对应的渲染树结构：**

```
App
├── div
    ├── Header
    │   ├── header
    │       ├── Navigation
    │       │   ├── nav
    │       │       ├── NavItem
    │       │       └── NavItem
    │       └── Logo
    ├── MainContent
    │   ├── main
    │       ├── Sidebar
    │       └── Content
    └── Footer
```

### 渲染树与其他概念的关系

**1. 与虚拟DOM的关系：**

- 渲染树描述组件结构，虚拟DOM描述最终的DOM结构
- 组件渲染时会生成对应的虚拟DOM节点
- 一个组件节点可能对应多个虚拟DOM节点

**2. 与Fiber树的关系：**

- Fiber是React 16+中渲染树的内部实现
- 每个渲染树节点对应一个Fiber节点
- Fiber树支持时间切片和优先级调度

**3. 与组件树的区别：**

- 组件树是逻辑概念，渲染树是实际的运行时结构
- 渲染树包含组件实例的具体状态和props

### 渲染树的生命周期

**1. 构建阶段：**

```javascript
// 初始渲染时构建渲染树
ReactDOM.render(<App />, document.getElementById('root'));
```

**2. 更新阶段：**

```javascript
// 状态变化导致渲染树更新
function Counter() {
  const [count, setCount] = useState(0);

  // 状态更新会触发子树重新渲染
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </div>
  );
}
```

**3. 销毁阶段：**

```javascript
// 组件卸载时从渲染树中移除
function ConditionalComponent({ show }) {
  return (
    <div>
      {show && <ExpensiveComponent />} // 条件渲染影响渲染树
    </div>
  );
}
```

### 渲染树的遍历和更新

**深度优先遍历：**

- React使用深度优先的方式遍历渲染树
- 先处理父组件，再处理子组件
- 保证数据流的正确性

**协调算法（Reconciliation）：**

```javascript
// React比较新旧渲染树，找出变化
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}  // key帮助React识别节点
          todo={todo}
        />
      ))}
    </ul>
  );
}
```

### Key的重要性

**正确使用Key：**

```javascript
// 好的做法：使用稳定的唯一标识
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// 错误做法：使用数组索引
function BadUserList({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={index} user={user} /> // 可能导致渲染问题
      ))}
    </div>
  );
}
```

### 性能优化与渲染树

**1. 避免不必要的重新渲染：**

```javascript
// 使用React.memo优化
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return <div>{/* 复杂渲染逻辑 */}</div>;
});

// 使用useMemo缓存计算结果
function OptimizedComponent({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return <div>{expensiveValue}</div>;
}
```

**2. 合理的组件拆分：**

```javascript
// 将状态本地化，减少渲染范围
function ChatApp() {
  return (
    <div>
      <UserList />      // 独立的用户列表
      <MessageList />   // 独立的消息列表
      <InputArea />     // 独立的输入区域
    </div>
  );
}
```

### 调试渲染树

**React Developer Tools：**

- 可视化查看组件树结构
- 查看组件的props和state
- 分析渲染性能

**Profiler API：**

```javascript
import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration) {
  console.log('渲染信息:', { id, phase, actualDuration });
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Header />
      <MainContent />
      <Footer />
    </Profiler>
  );
}
```

### 最佳实践

1. **保持渲染树的稳定性**：避免在渲染过程中创建新的组件类型
2. **合理使用Key**：为列表项提供稳定且唯一的key
3. **组件职责单一**：每个组件专注于单一功能
4. **状态就近原则**：将状态放在最需要它的组件中
5. **避免深层嵌套**：过深的组件树可能影响性能

渲染树是理解React工作原理的关键概念，掌握它有助于编写更高效、更易维护的React应用。

## Context API

Context API 是 React 提供的一种用于跨组件传递数据的机制，允许在组件树中共享数据而不必通过 props 一层层传递。

在默认情况下，React.createContext() 提供的 Context，如果其 value 发生变化，即使某个组件自身并没有使用该值，只要它在 Provider 包围范围内，但其子孙组件有消费 Context，那么中间组件也会重新执行函数，但是否触发实际 DOM 渲染取决于该组件本身是否渲染了变化内容。

## ⚠️ 如何避免中间组件重新渲染？

### ✅ 方法 1：将消费者组件“拆出去”，避免父组件受影响

```jsx
function Parent() {
  return <MemoizedChild />;
}
const MemoizedChild = React.memo(() => {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Hello</div>;
});
```

### ✅ 方法 2：使用 `useContextSelector`（需借助第三方库如 [use-context-selector](https://github.com/dai-shi/use-context-selector)）

这个方案可实现 Context value 的 **局部选择**，避免全量订阅。

---

## ✅ 总结

| 情况                               | 会重新渲染？                      |
|----------------------------------|----------------------------------|
| 中间组件未使用 Context             | ✅ 函数体会执行（默认行为）         |
| 中间组件已使用 Context             | ✅                                |
| 中间组件被 `React.memo` 包裹       | 🚫 不会重新执行（如果 props 没变） |
| 使用 `useContextSelector` 精准订阅 | 🚫                               |

---

## ref

Ref 是 React 提供的一种方式，用于直接访问 DOM 元素或组件实例。它允许开发者在不使用 state 的情况下，直接操作 DOM 或获取组件的实例方法。 希望组件记住某些信息，但又不想让这些信息触发新的渲染时，可以使用 ref。ref 是一个普通的 JavaScript 对象，具有可以被读取和修改的 current 属性。组件不会在递增时重新渲染，会在每次重新渲染之间保留ref 的值。

## JSX 语法

JSX 是一种 JavaScript 的语法扩展，允许在 JavaScript 代码中直接编写类似 HTML 的标签。它使得编写 React 组件变得更加直观和易读。

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

## 内置组件

 Fragment 在不添加额外节点的情况下将子元素组合

- 返回多个元素
- 分配多个元素给一个变量
- 组合文本和组件
- 渲染Fragment列表

 Suspense
 Profiler 测量 React 树的渲染性能
 StrictMode 帮助在开发过程中尽早发现错误

- 额外重新渲染一次
- 额外重新运行一次Effect
- 额外重新运行一次refs回调
- 检查使用了已弃用的API
