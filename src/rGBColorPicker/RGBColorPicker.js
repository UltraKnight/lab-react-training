import React from 'react';
import SingleColorPicker from '../singleColorPicker/SingleColorPicker';

export default class RGBColorPicker extends React.Component {
    state = {
        rValue: 255,
        gValue: 150,
        bValue: 0
    }

    handleChange = (e) => {
        let {value, name} = e.target;
        if(value > 255 || value < 0) {
            value = 0;
        }

        this.setState({
            [name]: value
        })
    }

    render() {
        const {rValue, gValue, bValue} = this.state;
        const rgb = `rgb(${rValue}, ${gValue}, ${bValue})`;
        return (
            <div className='RGBColorPicker'>
                <SingleColorPicker color='r' value={this.state.rValue} onChange={this.handleChange} />
                <SingleColorPicker color='g' value={this.state.gValue} onChange={this.handleChange} />
                <SingleColorPicker color='b' value={this.state.bValue} onChange={this.handleChange} />
                <div className='colorBox' style={{backgroundColor: rgb}}></div>
            </div>
        )
    }
}