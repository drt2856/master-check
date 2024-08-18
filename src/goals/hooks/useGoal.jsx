import { useContext } from "react";
import { goalContext } from "../context/GoalContext";

export function useGoal() {

    const context = useContext(goalContext)

  if(context === undefined){
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}