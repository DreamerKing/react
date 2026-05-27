# Class 组件笔记（历史参考）

> React 19 以函数组件 + Hooks 为主。以下内容来自早期学习笔记，用于理解旧代码和面试场景，新项目请使用函数组件。

## 与函数组件的对应关系

| Class 生命周期 / API | Hooks 替代 |
| --- | --- |
| `this.state` + `setState` | `useState` |
| `componentDidMount/Update/Unmount` | `useEffect` |
| `shouldComponentUpdate` | `React.memo` + `useMemo` |
| `createRef` | `useRef` |
| Context `static contextType` | `useContext` |
| `getDerivedStateFromProps` | 在 render 中直接计算，或 `useMemo` |

## setState 要点

- 不要直接修改 `this.state`
- 更新可能是异步的；依赖前一个 state 时使用函数形式：`setState(prev => ...)`
- 多次 setState 可能被批处理合并

## 表单

- **受控组件**：值由 React state 管理
- **非受控组件**：值由 DOM 管理，用 `defaultValue` / `ref`
- `<input type="file" />` 始终是非受控的

## 状态提升

多个组件共享同一数据时，将 state 提升到最近公共父组件，通过 props 向下传递、通过回调向上通知。

完整示例见 `learn/src/components/StatePromote/Calculator.js`（已改写为函数组件）。
