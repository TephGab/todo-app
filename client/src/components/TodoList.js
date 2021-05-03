import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';
import { isEmpty } from './../utils/utils';

const TodoList = () => {
    const tasks = useSelector(state => state.taskReducer);

    return (
        <div className="todoContainer">
            {!isEmpty(tasks) && tasks.map((task, index) => (<TodoCard task={task} key={index} />))}
        </div>
    );
};

export default TodoList;