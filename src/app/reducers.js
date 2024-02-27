import { alertReducer } from "../feature/alert/reducer/alertSlice";
import { editingReducer } from "../feature/task/reducer/editingSlice";
import { tasksReducer } from "../feature/task/reducer/taskListSlice";
import { taskReducer } from "../feature/task/reducer/taskSlice";

export const reducers = {
    tasks: tasksReducer,
    alert: alertReducer,
    task: taskReducer,
    editing: editingReducer
}