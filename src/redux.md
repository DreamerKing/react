安装 RTK

```sh
yarn add @reduxjs/toolkit
```

RTK 中包含了 Redux Thunk 和 Reselect 等关键软件包。

Redux 核心

```
yarn add redux
```

React 绑定

```
yarn add react-redux
```

开发者工具

```
yarn add -D redux-devtools
```

核心概念
使用普通对象描述应用的 state, 强制使用普通对象 action 来描述行为状态,再通过 reducer 将 state 和 action 合并生成新的 state。

Redux 生态

- reduxjs/reselect
- planttheidea/selectorator
- ImmerJS/immer
- redux-saga/redux-saga
- redux-observable/redux-observable

Redux 是一个使用叫做“action”的事件来管理和更新应用状态的模式和工具库 它以集中式 Store 的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

单项数据流

- 用 state 来描述应用程序在特定时间点的状况
- 基于 state 来渲染出 View
- 当发生某些事件时，state 会根据发生的事件进行更新，生成新的 state
- 基于新的 state 重新渲染 View

应用中使用集中式的全局状态来管理，并明确更新状态的模式，以便让代码具有可预测性。
