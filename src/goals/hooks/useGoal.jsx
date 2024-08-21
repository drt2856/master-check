import { useContext } from "react";
import { goalContext } from "../context/GoalContext";

export function useGoal() {

    const context = useContext(goalContext)

  if(context === undefined){
    throw new Error("useGoal must be used within a GoalProvider")
  }
  return context
}