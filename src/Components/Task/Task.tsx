
import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import {TasksProps} from '../../App'

export function Task(props: TasksProps){

  const deleteTask =(id:string)=>{
      const filteredTasks = props.tasks.filter((task:any)=>task.id !== id)
        props.setTasks(filteredTasks)

  }

  function handleToggleTaskCompletion(id: string){

    const taskIndex = props.tasks.findIndex((task:any) => {
      return task.id == id;
  });
    const tempTasks = [...props.tasks];
  
    tempTasks[taskIndex].isComplete = !tempTasks[taskIndex].isComplete;
    props.setTasks(tempTasks)
}


  return(
  
      <div className={props.isComplete?styles.toDoCompleted : styles.toDo}>
        <div className={styles.toDoContent}>
          <input 
            type="checkbox"
            className={styles.conclude}
            onChange={()=>handleToggleTaskCompletion(props.id)}
            // styles.content
          />
          <p className={props.isComplete?styles.contentCompleted : styles.content}>
            {props.content}
          </p>
        </div>
        <div className={styles.Trash}>
          <Trash 
            size={24}
            onClick={()=>deleteTask(props.id)}
          />
        </div>
      </div>
  )
}