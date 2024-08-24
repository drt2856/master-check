import { useContext } from "react"
import { taskContext } from "../context/TaskContext"

export function useTask() {

    const context = useContext(taskContext)

  if(context === undefined){
    throw new Error("useTask must be used within a TaskProvider")
  }
  return context
}