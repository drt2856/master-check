import { useNavigate } from "react-router-dom"
import { GoalProvider } from "../context/GoalContext"
import Goals from "../component/Goals"

export default function GoalPage() {
  

    return (
        <GoalProvider>
            <Goals />
        </GoalProvider>
    )
}