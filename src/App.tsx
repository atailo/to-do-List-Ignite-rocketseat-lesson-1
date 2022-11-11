import { Header } from './Components/Header/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Task } from './Components/Task/Task'
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction, useState} from 'react'


export interface TasksProps{

    id: string,
    content: string,
    isComplete: boolean;
    setTasks:(task:any)=>void;
    tasks: TasksProps[];
}


export function App() {

const [Tasks, setTasks] = useState<TasksProps[]>([])

const totalTasksIncomplete = Tasks.length

const totalTasksComplete = Tasks.filter(Task => {
  return Task.isComplete === true
}).length

  return (
    
    
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar setTasks={setTasks}/>
      <main className={styles.main}>
        <div className={styles.header}>
        <p>Tarefas Criadas: {totalTasksIncomplete}</p>
        <p className={styles.concluidas}>Tarefas Concluidas: {`${totalTasksComplete} de ${totalTasksIncomplete}`}</p>
        </div>
        <div className={styles.Tasks}>
          <hr />
          {Tasks.length !== 0 || <div className={styles.noTasks}>
            <img src="../src/assets/bag.svg" />
            <p>Você ainda não tem tarefas cadastradas <br />
                Crie tarefas e organize seus itens a fazer
            </p>
          </div>}
          {Tasks.sort(
            (task1, task2)=>(task1.isComplete?1:-1 )- (task2.isComplete?1:-1)
          ).map(task => {
            return (
              <Task
                key ={task.id}
                id={task.id}
                content={task.content}
                isComplete={task.isComplete}
                setTasks = {setTasks}
                tasks={Tasks}
              />
            )
          })}
        </div>
        
        
      </main>

      </div>
      
    </div>
  )
}


