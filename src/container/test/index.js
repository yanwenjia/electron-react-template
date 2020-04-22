import React,{Component} from 'react';

export default class Test extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div>
                Test
            </div>
        )
    }
}