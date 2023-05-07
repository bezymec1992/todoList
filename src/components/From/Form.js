import React, {Component} from "react";

class Form extends Component {
    state = {
        inputValue: '',
    };

    onInputValueChange = (e) => {
        const {value} = e.target;
        this.setState({inputValue: value})
    }

    onClick = () => {
        this.props.onAddElement(this.state.inputValue);
        this.setState({inputValue: ''})
    }

    render() {
        return (
            <div className="input-wrap">
                <input type="text" placeholder='enter your task' value={this.state.inputValue} onChange={this.onInputValueChange}/>
                <button onClick={this.onClick}>+</button>
            </div>
        )
    }
}

export default Form;