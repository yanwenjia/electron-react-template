此项目通过create-react-app创建，通过electron打包成为桌面应用

#### 路由采用哈希路由（其他模式未尝试）
`<a href="#/test">测试</a>` （注意#前面没有/）
#### package.json文件要增加homepage
`"homepage": "."`
#### package.json文件要增加build配置
- 其中要注意添加`"extends": null`,此配置也能减小打包完体积，原因未知
[详细配置](https://blog.csdn.net/qq_38830593/article/details/89843722)
#### main文件中要注意加载路径
`file://${__dirname}/build/index.html` （注意其中的build为react打包完之后的文件夹）
### png转ico格式的图标
[网址](https://www.aconvert.com/cn/icon/png-to-ico/#)
### dev-app-update.yml文件不存在
将\pack\win-unpacked\resources\app-update.yml复制到项目根目录并改名为dev-app-update.yml       
[详细链接](https://www.jianshu.com/p/15bde714e198)
### fs.existsSync is not a function
- 在渲染进程中调用require需要使用window.require
- ```
  new BrowserWindow({
    webPreferences: {
      nodeIntegration: true // 是否集成 Nodejs
    }
  })
  ```
### 自动更新渲染进程页面UI为写
- 可根据自身选用UI框架做合适的更新界面

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
