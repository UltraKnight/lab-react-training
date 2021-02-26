import React, { Component } from 'react';
import './NumbersTable.css';

export default class NumbersTable extends Component {     
    render() {
        let {limit} = this.props;
        limit = limit > 0 ? limit : 1;

        let arr = new Array(limit);
        for (let i=1; i <= limit; ++i) arr[i - 1] = i;

        return (
            <table className="NumbersTable">
                <tbody>
                    <tr>
                    {   
                        arr.map(item => {
                            return(
                                item % 2 === 0 
                                ? <td key={item} className='table-number' style={{backgroundColor: 'red'}}><span>{item}</span></td> 
                                : <td key={item} className='table-number'><span>{item}</span></td>
                            )
                        })
                    }
                    </tr>
                </tbody>
            </table>
        )
    }
}
