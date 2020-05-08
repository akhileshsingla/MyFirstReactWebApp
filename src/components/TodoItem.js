import React, { Component } from 'react'

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px dotted',
            textDecoration: this.props.todo.completed ? 
                'line-through' : 'none'
        }
    }

    render() {
        
        const {id, title} = this.props.todo;

        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type = "checkbox" 
                        onChange = {this.props.markComplete.bind(this, id)}>
                    </input> {' '}

                    <button style={btnStyle} 
                        onClick = {this.props.delTodo.bind(this, id)}>
                    x</button>
                    { title }
                </p>
            </div>
        )
    }

    
}

const btnStyle = {
 color: 'red',
 float: 'right'       
}

export default TodoItem
