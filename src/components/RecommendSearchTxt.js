import React from 'react';
import MySearch from './MySearch'

export default React.createClass({
    getInitialState(){
        return{
            data:{
                name:'搜索推荐号',
                url:'/search'
            }
        }
    },
    render(){
        return (
            <MySearch data={this.state.data}/>
        )
    }
})