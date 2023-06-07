v16.8 开始支持 hooks

完全可选，向后兼容，没有计划从 React 中移除 class。

动机

1. 复用状态逻辑
2. 使复杂组件变得更容易理解
3. 避免使用 class 组件导致一些优化失效

useState() 生成的更新函数不会把新的 state 和旧的 state 进行合并。

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

useLayoutEffect 里的任务最好影响了 Layout。为了用户体验，优先使用 useEffect(优先渲染)。

memo() 使得组件只有依赖的 props 发生变化才会执行一遍并且再次渲染。
useMemo 可以实现函数的重用。

- 第一个参数一定是一个不接受参数的函数 () => value;
- 第二个参数是依赖观测数组;
- 自由依赖变化时才计算新的 value 值,如果不变则重用之前的值.

useCallback()是 useMemo() 函数类型的语法糖
useMemo(() => x => log(x), [n]);
