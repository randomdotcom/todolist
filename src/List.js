import React, { Component } from 'react';
import './List.css';
import { FaTimes, FaCheck, FaRegCheckSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';


class List extends Component {
  render() {
    let items = this.props.items;
    const listItems = items.map((item, i) => {
        if (item.done) {
            return (
                <li className="task-done" key={i}>
                    {item.value}
                    <div className="icon-container">
                        <IconContext.Provider value={{ className: "icon-done" }}>
                            <div className="icon-block" onClick={this.onDone}>
                                <FaCheck />
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "icon-close" }}>
                            <div className="icon-block" onClick={this.onDelete}>
                                <FaTimes />
                            </div>
                        </IconContext.Provider>
                    </div>
                </li>
            );
        }
        return(
        <li key={i}>
            {item.value}
            <div className="icon-container">
            <IconContext.Provider value={{ className: "icon-done" }}>
                <div className="icon-block" onClick={this.onDone}>
                <FaCheck />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "icon-close" }}>
                <div className="icon-block" onClick={this.onDelete}>
                <FaTimes />
                </div>
            </IconContext.Provider>
            </div>
        </li>
        );
    });

    return <ul>{listItems}</ul>;
  }

  onDelete = event => {
      const value = event.target.parentNode.parentNode.parentNode.parentNode.textContent;
    this.props.onItemDelete(value);
  };
  onDone = event => {
      const value = event.target.parentNode.parentNode.parentNode.parentNode.textContent;
    this.props.onItemDone(value);
  };
}

export default List;