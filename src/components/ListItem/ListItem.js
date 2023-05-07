import React, {Component} from "react";

class ListItem extends Component {
    onClickDelete = (e) => {
        e.stopPropagation();
        this.props.onDeleteItem(this.props.item.id)
    }
    render() {
        const {item, onToggle} = this.props;
        return (
            <div 
                className={`todo-item ${item.isCompleted?"done":''}`}
                onClick={() => onToggle(item.id)}
            >
                <p>{item.title}</p>

                <span className="delete" onClick={this.onClickDelete}>Delete</span>
            </div>
        )
    }
}

export default ListItem;