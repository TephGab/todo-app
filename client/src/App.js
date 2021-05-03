import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <Header />
      <div className="app-container">
        <div className="todolist">
        <TodoList />
        </div>
      </div>
      <div>
          <TodoForm />
        </div>
    </>
  );
}

export default App;
