import React, { Component } from 'react';
import './SignupPage.css';

export default class SignupPage extends Component {
    state = {
        email: '',
        password: '',
        nationality: '',
        emailIsValid: false,
        emailMessage: '',
        passwordIsValid: false,
        passwordMessage: ''
    }

    handleChange = (e) => {
        let target = e.target;
        let {name, value} = target;

        this.setState({
            [name]: value
        }, () => {
            let emailSpan = document.getElementById('emailIsValid');
            let passwordSpan = document.getElementById('passwordIsValid');

            if (name === 'email' && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
            {
                target.classList.add('valid');
                target.classList.remove('invalid');

                this.setState({
                    emailMessage: 'The email is valid',
                    emailIsValid: true
                });
            } else if(name === 'email') {
                target.classList.remove('valid');
                target.classList.add('invalid');

                this.setState({
                    emailMessage: 'You have entered an invalid email address!',
                    emailIsValid: false
                });
            }

            if(name === 'password' && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value)) {
                target.classList.add('valid');
                target.classList.remove('invalid');
   
                this.setState({
                    passwordIsValid: true,
                    passwordMessage: 'Acceptable password',
                });
            } else if(name === 'password') {
                target.classList.remove('valid');
                target.classList.add('invalid');

                this.setState({
                    passwordIsValid: false,
                    passwordMessage: 'Weak password'
                });
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = '<hr />';
        let hello = 'Hello';
        let {email, nationality} = e.target.elements;
        let isEmailCorrect = email.value && email.classList.contains('valid') ? 'correct' : 'incorrect';

        switch(nationality.value) {
            case 'fr':
                hello = 'Bonjour'
                break;
            case 'de':
                hello = 'Hallo'
                break;
            default:
                hello = 'Hello';
        }

        data += `
            <p>${hello}</p>
            <p>Your email address is: ${email.value}</p>
            <p>Your email address is ${isEmailCorrect}</p>
        `;
        const formData = document.querySelector('.form-data');
        formData.innerHTML = data; 
    }

    render() {
        let {emailIsValid, emailMessage, email, passwordIsValid, passwordMessage, password, nationality} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' onChange={this.handleChange} value={email} />
                    <span id='emailIsValid' className={emailIsValid ? 'small valid' : 'small invalid'}>{emailMessage}</span>

                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' onChange={this.handleChange} value={password} />
                    <span id='passwordIsValid' className={passwordIsValid ? 'small valid' : 'small invalid'}>{passwordMessage}</span>

                    <label htmlFor="nationality">Nationality</label>
                    <select name="nationality" id="nationality" onChange={this.handleChange} value={nationality}>
                        <option value="" disabled defaultValue>Nationality</option>
                        <option value="en">American</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </select>

                    <button type='submit'>Sign Up</button>
                </form>
                <div className='form-data'></div>
            </div>
        )
    }
}
