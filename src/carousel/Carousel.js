import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        currentIndex: 0
    }

    handleLeftClick = (imgs) => {
        const {currentIndex} = this.state;

        if(!imgs.length) {
            return;
        }

        if(currentIndex === 0) {
            this.setState({
                currentIndex: imgs.length - 1
            })
        } else {
            this.setState(prev => ({
                currentIndex: prev.currentIndex - 1
            }))
        }
    }

    handleRightClick = (imgs) => {
        const {currentIndex} = this.state;
        if(!imgs.length) {
            return;
        }

        if(currentIndex === imgs.length - 1) {
            this.setState({
                currentIndex: 0
            })
        } else {
            this.setState(prev => ({
                currentIndex: prev.currentIndex + 1
            }))
        }
    }

    render() {
        const {imgs} = this.props;
        const {currentIndex} = this.state;

        return (
            <div>
                <button onClick={() => this.handleLeftClick(imgs)}>Left</button>
                <img src={imgs[currentIndex]} alt="" />
                <button onClick={() => this.handleRightClick(imgs)}>Right</button>
            </div>
        )
    }
}
