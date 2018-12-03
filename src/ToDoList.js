import React, {Component} from 'react';
import List from './List.js';
import Tools from './Tools.js';
import './ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            items: [],
        };

        this.onItemChange=this.onItemChange.bind(this);
        this.onItemDelete=this.onItemDelete.bind(this);
        this.onItemDone=this.onItemDone.bind(this);
    }

    render() {
        const data = JSON.parse(localStorage.getItem('data'));
        const items = this.state.items;

        if (data == null) {
            localStorage.setItem('data', '[]');
            console.log("localStorage создан");
        } else if(JSON.stringify(data) !== JSON.stringify(items)){
            this.setState({items: data});
            console.log("загрузка списка из localStorage")
        }

        return(
            <div className="ToDoList">
                <List onItemDone={this.onItemDone} onItemDelete={this.onItemDelete} items={this.state.items}/>
                <Tools onItemChange={this.onItemChange}/>
            </div>
        );
    }

    onItemDone(value) {
        let items = this.state.items;

        items = items.filter((item) => {
            if (item.value === value && (item.done === true || item.done === false)) {
                item.done = !item.done;
            } else if (item.value === value){
                item.done = true;
            }
            return item;
        });

        localStorage.setItem("data", JSON.stringify(items));
        this.setState({ items: items });
    }
    onItemDelete(value) {
        let items = this.state.items;

        items = items.filter((item) =>  item.value !== value);

        console.log(items);
        localStorage.setItem("data", JSON.stringify(items));
        this.setState({ items: items });
    }
    onItemChange(value) {
        let items = this.state.items;
        items = items.concat({value});

        localStorage.setItem("data", JSON.stringify(items));
        this.setState({items: items});
    }
}

export default ToDoList;