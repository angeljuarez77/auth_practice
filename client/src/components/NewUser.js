import React from 'react';

export default class Newuser extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {

        };
    }

    render(){
        return (
            <form onSubmit={this.props.onSubmit}>
                <input onChange={this.props.onChange} type="text" placeholder="Name" id="name"></input>
                <input onChange={this.props.onChange} type="text" placeholder="New password" id="password"></input>
                <input type="submit" value="Register"></input>
            </form>
        )
    }
}