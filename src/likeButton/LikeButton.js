import React, { Component } from 'react';
import './LikeButton.css';

export default class LikeButton extends Component {
    state = {
        likes: 0,
        color: 'purple'
    }

    handleLikes = () => {
        const arrColors = ['purple','blue','green','yellow','orange','red'];
        this.setState((state) => {
            return {
                likes: state.likes++,
                color: arrColors[Math.floor(Math.random() * arrColors.length)]
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <button className="LikeButton" style={{backgroundColor: this.state.color}} 
                    onClick={this.handleLikes}>{this.state.likes} Likes</button>
            </React.Fragment>
        )
    }
}