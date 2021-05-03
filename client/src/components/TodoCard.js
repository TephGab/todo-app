import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTasks } from '../redux/actions/taskAction';

const TodoCard = (props) => {
    const dispatch = useDispatch()
    const [editToggle, setEditToggle] = useState(false);
    const [edittext, setEdittext] = useState(props.task.text);
    const handleEdit = (e) =>{
        e.preventDefault();
        const data = {
            text: edittext,
            id: props.task._id
        }
        dispatch(editTasks(data));
        setEdittext('');
    }

    return (
        <div className="todoCard" onClick={() => setEditToggle(!editToggle)}>
                    { editToggle ? 
                    (<form onSubmit={(e) => handleEdit(e)}>
                        <textarea defaultValue={props.task.text } onChange={(e) => setEdittext(e.target.value)}></textarea>
                        <input type="submit" value="Valider"/>
                    </form>) :  
                    (<div>  { props.task.text } </div>)} {<span><i className="fas fa-trash"></i></span>}
        </div>
    );
};

export default TodoCard;