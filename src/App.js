import './App.css';
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { addTask, editTask, selectTasks, setTasks } from './feature/task/reducer/taskListSlice';
import { selectAlert, showAlert } from './feature/alert/reducer/alertSlice';
import { selectEditing, setEditId, setEditing } from './feature/task/reducer/editingSlice';
import { selectTempTask, setTempTaskName } from './feature/task/reducer/taskSlice';
import TaskList from './feature/task/component/TaskList';
import Alert from './feature/alert/component/Alert';

function App() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const tasks = useSelector(selectTasks);
  const alert = useSelector(selectAlert);
  const edit = useSelector(selectEditing);

  const tempTask = useSelector(selectTempTask);



  const insertTask = (e) => {
    e.preventDefault();
    if (!tempTask.name) {
      dispatch(showAlert(true, "Invalid Task Name!"));
    } else if (tempTask.name && edit.isEditing) {
      dispatch(editTask({ id: edit.editId, name: tempTask.name }
      ))
      dispatch(setEditing(false));
      dispatch(setEditId(null));
      dispatch(showAlert(true, "Task Edited."));
      dispatch(setTempTaskName(""));
    } else {
      const newTask = {
        id: uuid().slice(0, 8),
        name: tempTask.name,
        completed: false
      };
      dispatch(addTask(newTask))
      dispatch(showAlert(true, "Task Added."));
      dispatch(setTempTaskName(""));
    }
  };


  const deleteAll = () => {
    dispatch(setTasks([]));
    dispatch(showAlert(true, "Your list is clear!"));
  };

  const handleTask = (e) => {
    console.log(e);
    dispatch(setTempTaskName(e.target.value))
  }

  useEffect(() => {
    inputRef.current.focus();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <>
        <div className='container'>
          {alert && <Alert msg={alert.msg} />}
          <form className='head' onSubmit={(e) => insertTask(e)}>
            <input
              type='text'
              ref={inputRef}
              placeholder='New Task'
              value={tempTask.name}
              onChange={handleTask}
            />
            <button type='submit'>{edit.isEditing ? "Edit" : "Add"}</button>
          </form>

          {tasks.length > 0 ? (
            <TaskList />
          ) : (
            <p className='no-tasks'>Your list is clear!</p>
          )}
          {tasks.length > 2 && (
            <button
              className='btn-delete-all'
              onClick={deleteAll}
              title='Delete All Tasks (Completed and Uncompleted)!'
            >
              Clear All
            </button>
          )}

        </div>

      </>
    </div>
  );
}

export default App;
