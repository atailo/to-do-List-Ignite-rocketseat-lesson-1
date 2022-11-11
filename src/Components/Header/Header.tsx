import styles from './Header.module.css'
import toDoLogo from '../../assets/to-do.svg'


export function Header(){
  return(
    <header className={styles.header}>
        <img src={toDoLogo} alt="logotipo da lista To-do" />
    </header> 
  )
}