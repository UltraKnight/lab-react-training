import React, { Component } from 'react';
import './Dice.css';

export default class Dice extends Component {
    state = {
        side: '/img/dice1.png',
        clicked: false
    }

    componentDidMount() {
        const sideNumber = Math.floor(Math.random() * (7 - 1) + 1);
        this.setState({
            side: `/img/dice${sideNumber}.png`
        })
    }

    handleClick = () => {
        if(! this.state.clicked) {
            this.setState(({
                side: `/img/dice-empty.png`,
                clicked: true
            }))
        }
    }

    componentDidUpdate(_prevProps, _prevState) {
        const sideNumber = Math.floor(Math.random() * (7 - 1) + 1);
        if(this.state.clicked) {
            setTimeout(() => {
                this.setState({
                    clicked: false,
                    side: `/img/dice${sideNumber}.png`
                })
            }, 1000);
        }
    }

    render() {
        return (
            <div className='Dice'>
                <img onClick={this.handleClick} src={this.state.side} alt="dice side" width="150px" />
            </div>
        )
    }
}
