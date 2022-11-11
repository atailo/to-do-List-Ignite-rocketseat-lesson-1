import styles from './Sidebar.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';



interface SidebarProps{

  setTasks:(task:any)=>void;

}


export function Sidebar(props:SidebarProps){

  const [newTaskText, setNewTaskText] = useState('')

  const IsNewTaskEmpty = newTaskText.length === 0

  

  function handleNewTaskTextChange(event: ChangeEvent<HTMLTextAreaElement>){
    setNewTaskText(event.target.value)
  }
  
  function handleCreateNewTask(){
      
        props.setTasks((state:any)=>[...state, {id:uuidv4(), content:newTaskText, isComplete: false}])
        setNewTaskText('')


  }

  return (
    <aside className={styles.Sidebar}>

      <textarea 
        name="task"
        placeholder="Adicione uma nova Tarefa"
        onChange={handleNewTaskTextChange} 
        value={newTaskText} 
        
      />
    

      <button
      onClick={handleCreateNewTask}
      disabled={IsNewTaskEmpty}

      >Criar
      <PlusCircle size={24}/>

      </button>
    </aside>



  )
}