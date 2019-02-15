import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            result: 0
        };
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.divide = this.divide.bind(this);
        this.multiply = this.multiply.bind(this);
        this.clear = this.clear.bind(this);
    }
    setNum1(e) {
        e.preventDefault();
        this.setState({num1: e.target.value});
    }
    setNum2(e) {
        e.preventDefault();
        this.setState({num2: e.target.value});
    }
    
    add(e) {
        e.preventDefault();
        const {num1, num2} = this.state;
        const n1 = parseInt(num1);
        const n2 = parseInt(num2);
        
        this.setState({result: n1+n2});
    }
    subtract(e) {
        e.preventDefault();
        const { num1, num2 } = this.state;
        const n1 = parseInt(num1);
        const n2 = parseInt(num2);
        
        this.setState({result: n1-n2});
    }
    divide(e) {
        e.preventDefault();
        const { num1, num2 } = this.state;
        const n1 = parseInt(num1);
        const n2 = parseInt(num2);
        
        this.setState({result: n1/n2});
    }
    multiply(e) {
        e.preventDefault();
        const { num1, num2 } = this.state;
        const n1 = parseInt(num1);
        const n2 = parseInt(num2);
        
        this.setState({result: n1*n2});
    }

    clear(e) {
        e.preventDefault()
        this.setState({num1:'', num2:''});
    }
    
    // your code here

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <input type="text" onChange={this.setNum1} value={this.state.num1}/>
                <input type="text" onChange={this.setNum2} value={this.state.num2}/>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.divide}>/</button>
                <button onClick={this.multiply}>*</button>
                <br/>
                <h1>Result: {this.state.result}</h1>
                <button onClick={this.clear}>Clear values</button>
            </div>
        );
    }
}

export default Calculator;