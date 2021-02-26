import React, { Component } from 'react';
import profiles from '../data/berlin.json';
import './FaceBook.css';
let profilesArr = profiles;

export default class FaceBook extends Component {
    state = {
        profilesArr: profiles,
        isFiltered: false
    }

    handleClick = (e) => {
        let profiles = [...profilesArr];
        this.setState({
            profilesArr: profiles.filter(profile => {
                return e.target.value === 'All' ? profile : profile.country === e.target.value;
            }),
            isFiltered: e.target.value === 'All' ? false : true
        })
    }

    sortByLastName = () => {
        let profiles = [...this.state.profilesArr];
        this.setState({
            profilesArr: profiles.sort((a, b) => a.lastName.localeCompare(b.lastName))
        })
    }

    sortByName = () => {
        let profiles = [...this.state.profilesArr];
        this.setState({
            profilesArr: profiles.sort((a, b) => a.firstName.localeCompare(b.firstName))
        })
    }

    render() {
        let keys = 0;
        let {profilesArr} = this.state;
        return (
            <div className="FaceBook">
                <div className='buttons'>
                    <button onClick={(e) => this.handleClick(e)} value='All'>All</button>
                    <button onClick={(e) => this.handleClick(e)} value='England'>England</button>
                    <button onClick={(e) => this.handleClick(e)} value='USA'>USA</button>
                    <button onClick={(e) => this.handleClick(e)} value='Malaysia'>Malaysia</button>
                    <button onClick={(e) => this.handleClick(e)} value='Germany'>Germany</button>
                    <button onClick={(e) => this.handleClick(e)} value='Sweden'>Sweden</button>
                    <button onClick={(e) => this.handleClick(e)} value='Nigeria'>Nigeria</button>
                    <button onClick={(e) => this.handleClick(e)} value='Italy'>Italy</button>
                    <button onClick={(e) => this.handleClick(e)} value='Scotland'>Scotland</button>
                    <button onClick={(e) => this.handleClick(e)} value='Kazakhstan'>Kazakhstan</button>
                    <button onClick={(e) => this.handleClick(e)} value='Russia'>Russia</button>
                    <button onClick={(e) => this.handleClick(e)} value='Catalonia'>Catalonia</button>
                    <button onClick={(e) => this.handleClick(e)} value='France'>France</button>
                    <button onClick={(e) => this.handleClick(e)} value='Israel'>Israel</button>
                    <button onClick={(e) => this.handleClick(e)} value='Brazil'>Brazil</button>
                    <button onClick={(e) => this.handleClick(e)} value='Taiwan'>Taiwan</button>
                    <button onClick={(e) => this.handleClick(e)} value='Turkey'>Turkey</button>
                    <button onClick={(e) => this.handleClick(e)} value='Norway'>Norway</button>
                    <button className='secondary' onMouseDown={e => e.preventDefault()} onClick={this.sortByLastName}>Sort By Last Name</button>
                    <button className='secondary' onMouseDown={e => e.preventDefault()} onClick={this.sortByName}>Sort By Name</button>
                </div>

                {
                    profilesArr.map(profile => {
                        return(
                            <div className={this.state.isFiltered ? 'bg-blue' : ''} key={++keys}>
                                <img src={profile.img} alt={profile.firstName + "'s face"} width="150px" />
                                <div>
                                    <p><strong>First name: </strong>{profile.firstName}</p>
                                    <p><strong>Last name: </strong>{profile.lastName}</p>
                                    <p><strong>Country: </strong>{profile.country}</p>
                                    <p><strong>Type: </strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
