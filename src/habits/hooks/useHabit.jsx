import { useContext } from "react"
import { habitContext } from "../context/HabitContext"

export function useHabit() {

    const context = useContext(habitContext)

  if(context === undefined){
    throw new Error("useHabit must be used within a HabitProvider")
  }
  return context
}