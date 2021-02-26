import React, { Component } from 'react'
import './ClickablePicture.css';

export default class ClickablePicture extends Component {
    state = {
        isClicked: false
    }

    handleClick = () => {
        this.setState({
            isClicked: ! this.state.isClicked
        })
    }

    render() {
        const {img, imgClicked} = this.props;
        const {isClicked} = this.state;
        return (
            <div className='ClickablePicture'>
                <img onClick={this.handleClick} src={isClicked ? imgClicked : img} alt="boy" />
            </div>
        )
    }
}
