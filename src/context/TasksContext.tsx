"use client"
import { createContext } from 'react'
import { TaskContextType } from '@/typings/global'

const TasksContext = createContext<TaskContextType>({
    scrollPercentage: 0,
    direction: 'down'
})

export default TasksContext