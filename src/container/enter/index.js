import React,{Component} from 'react';

export default class Enter extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <a href="#/test">路由外面</a>
                Enter
            </div>
        )
    }
}