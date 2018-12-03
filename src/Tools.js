import React, {Component} from 'react';
import './Tools.css';

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    render() {
        return(
            <div className="Tools">
                <input id="name" type="text" onChange={this.onChange}></input>
                <input type="submit" value="ADD" onClick={this.itemAdd}></input>
            </div>
        );
    }

    onChange = (event) => {
        this.setState({ value: event.target.value })
    }

    itemAdd = () => {
        if (this.state.value !== '') {
            this.props.onItemChange(this.state.value);
        }
    }
}

export default Tools