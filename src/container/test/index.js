import React,{Component} from 'react';
const { ipcRenderer } = window.require('electron');
export default class Test extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    test(){
        console.log('testing')
        ipcRenderer.send('app-exit')
      }
    render(){
        return (
            <div>
                测试主进程和渲染进程交互
                <button onClick={this.test}>点击关闭程序</button>
            </div>
        )
    }
}