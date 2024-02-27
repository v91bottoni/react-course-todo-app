import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import { selectTasks } from "../reducer/taskListSlice";

const TaskList = () => {
    const tasks = useSelector(selectTasks)

    return (
        <ul
            className='tasks-wrapper'
        >
            {tasks.map((task, i) => (
                <Task key={task.id} {...task} index={i} />
            ))}
        </ul>

    );
};

export default TaskList;