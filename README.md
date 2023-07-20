# Create React App (CRA)

```bash
npx create-react-app myapp
```

package.json

```json
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

基于 react-scripts 自定义配置

```bash
npx create-react-app my-app --scripts-version react-scripts-fork
```

## Vite

```bash
yarn create vite
```

编辑器配置
eslint 添加插件 `eslint-plugin-react-hooks`
vsc 添加插件 `eslint`
vsc 添加代码格式化插件 `Prettier`

```bash
npm install --save-dev eslint-config-prettier
```

添加 prettier 到`.eslintrc.*`文件中的`extends`中，并确保它是最后一个插件，以便覆盖其他插件配置

```json
{
  "extends": ["some-other-config-you-use", "prettier"]
}
```

注意 `rules`规则优先于`extends`。

## RDT React Dev Tool

```bash
yarn global add react-devtools
react-devtools
```

```html
<html>
  <head>
    <script src="http://localhost:8097"></script>
  </head>
</html>
```

UI

- [Chakra](https://chakra-ui.com/)
- [Material](https://mui.com/)

React 组件需要首字母大写

React 创建可复用 UI 组件，每段 UI 片段都可以作为一个组件。React 组件一个首字母大写返回 JSX 标签的常规 js 函数。
