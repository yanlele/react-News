import React, {Component} from 'react'

export default class BodyChild extends Component {

    render() {
        return (
            <div>
                <p>子页面输入： <input type="text" onChange={this.props.handleChildValueChange}/></p>
                <p>{this.props.userId} {this.props.username}</p>
            </div>
        )
    }
}