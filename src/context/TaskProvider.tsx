"use client"
import useTaskContext from './useTaskContext'
import TasksContext from './TasksContext'
import { ContextProps } from '@/typings/global'

const TaskProvider = ({ children, percentage } : ContextProps) => {
  const { scrollPercentage } = useTaskContext(percentage)

  return (
    <TasksContext.Provider value={{scrollPercentage}}>
      {children}
    </TasksContext.Provider>
  )
}

export default TaskProvider