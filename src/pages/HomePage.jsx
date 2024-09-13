import { useGoal } from "../business/goals/hooks/useGoal";
import Habit from "../business/habits/components/Habit";
import { useHabit } from "../business/habits/hooks/useHabit";
import StepGoal from "../business/steps/components/StepGoal";
import Task from "../business/tasks/components/Task";
import { useTask } from "../business/tasks/hooks/useTask";

function HomePage() {
  const { goals } = useGoal();
  const { tasks } = useTask();
  const { habits } = useHabit();

  //conseguir los primeros pasos de cada meta que no esten hechos
  const initalStep = goals
    .map((goal) => {
      const step =
        goal.steps && goal.steps.find((step) => step.checked === false);
      console.log(step);

      return step;
    })
    .filter((step) => step !== undefined);
  return (
    <>
      <h1 className="h3">Lista de pendientes para hoy</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Pasos iniciales de cada meta
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapsed collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {initalStep.map((step) => (
                <StepGoal prevStep={step} goalId={step.id} />
              ))}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Tareas pendientes
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {tasks.map((task) => (
                <Task prevTask={task} key={task.id} />
              ))}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Hábitos de hoy
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {habits.map((habit) => (
                <Habit prevHabit={habit} key={habit.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
