import './App.css'
import Form from './components/Form/Form'
import { TaskProvider } from './context/TaskContext'
import Task from './pages/Task/Task'

function App() {
  return (
    <TaskProvider>
      <Task />
      <br/>
      <Form/>
    </TaskProvider>
  )
}

export default App
