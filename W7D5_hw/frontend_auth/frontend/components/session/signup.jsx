import React from 'react';
    class SignUp extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleInput(type){
        return(e) => {
            this.setState({[type]: e.target.value});
        }
    }

    handleSumbit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(this.props.history.push('/chirps'));
    }
    render() {
        return (
            <div className='session-form'>
                <h2>Sign UP!</h2>
                <form>
                    <label>Username: 
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Email: 
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password: 
                        <input 
                            type="text"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSumbit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;