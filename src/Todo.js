import React from 'react'
import styles from './todo.module.scss'
import DeleteIcon from '@material-ui/icons/Delete'
import db from './firebase'

const Todo = (props) => {
    const deleteTask = (e)=>{
        db.collection('todos').doc(props.title.id).delete()
    }
    return (
        <div className={styles.todolist}>
            <li>{props.title.title}</li>
            <DeleteIcon onClick={deleteTask}/>
        </div>
    )
}

export default Todo
