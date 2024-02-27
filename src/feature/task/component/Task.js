import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdDeleteOutline,

} from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { removeTask, toggleDone } from "../reducer/taskListSlice";
import { useDispatch } from "react-redux";
import { setTempTaskName } from "../reducer/taskSlice";
import { setEditId, setEditing } from "../reducer/editingSlice";

const Task = ({ id, name, completed, color = '#00e4ff', index }) => {
    const dispatch = useDispatch();

    const handleEdit = (id, name) => {
        console.log(id, name)
        dispatch(setTempTaskName(name))
        dispatch(setEditing(true))
        dispatch(setEditId(id))
    }

    return (

        <li
            style={{
                boxShadow: "none",
                backgroundColor: color,
            }}
            className={`task ${completed && "task-done"}`}
        >
            <p>{name}</p>
            <button onClick={() => dispatch(toggleDone(id))}>
                {completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </button>
            <button onClick={() => dispatch(removeTask(id))}>
                <MdDeleteOutline />
            </button>
            <button onClick={() => handleEdit(id, name)}>
                <FiEdit />
            </button>

        </li>

    );
};

export default Task;