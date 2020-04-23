import React,{Component} from 'react';
// const { ipcRenderer } = require('electron')
const { ipcRenderer } = window.require('electron');
// import {ipcRenderer} from 'electron'
export default class Enter extends Component{
    componentDidMount(){
        console.log('componentDidMount')
       // 有可用更新
    ipcRenderer.on('UpdateAvailable', (event, info) => {
        console.log(event)
        console.log(info)
        this.show = true
        this.newVersion = info.version
      })
  
      // 下载进度
      ipcRenderer.on('DownloadProgress', (event, progressObj) => {
        console.log(event)
        console.log(progressObj)
        this.show = true
        this.percentage = parseInt(progressObj.percent)
        if (this.percentage === 100) {
          this.progressStatus = 'success'
        }
      })
  
      // 下载完成
      ipcRenderer.on('UpdateDownloaded', (event) => {
        console.log(event)
        this.show = true
        this.progressStatus = 'success'
      })
    }
    render(){
        return (
            <div>
                首页
            </div>
        )
    }
}