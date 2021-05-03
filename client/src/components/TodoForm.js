import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from './../redux/actions/taskAction';

const TodoForm = () => {
    const [text, setText] = useState();
    const [addTextToggle, setAddTextToggle] = useState(false);

    const dispatch = useDispatch()

    const handleForm = async (e) =>{
        e.preventDefault();
        if(text){
            const data = {
                text: text
            }
       await dispatch(addTasks(data));
        setAddTextToggle(!addTextToggle);
        setText('');
        }
    }

    return (
        <div className="form-container">
            { addTextToggle ? 
                (<form onSubmit={(e) => handleForm(e)} className="add-task">
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text-content" />
                    <input type="submit" value="Ajouter" id="submit-button" />
                </form>) 
                :
                (<div className="addTextToggle"> 
                    <span onClick={() => setAddTextToggle(!addTextToggle)}>
                        <i className="fas fa-plus"></i>
                    </span>
                </div>)
            }
        </div>
    );
};

export default TodoForm;