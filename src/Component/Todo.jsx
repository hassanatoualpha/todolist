import { useState, useEffect } from 'react';
const TodoComponent = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const savedinputValue = JSON.parse(localStorage.getItem('todos'))
        if (savedinputValue.length !== 0) {
            setTodos(savedinputValue)
        }

    }, []);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleChange = (e) => { setInputValue(e.target.value); };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };
    const handleDelete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };


    return (
        <div className="container mt-5">
            <h2>Liste de tâches</h2>
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="input-group">
                    <input type="text" className="form-control me-3" placeholder="Ajouter une nouvelle tâche" value={inputValue} onChange={handleChange} />
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </div>
            </form>
            <ul className="list-group">

                {
                    todos.map(
                        (todo, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <p>{todo}</p>
                                <button className="btn btn-danger" onClick={() => handleDelete(index)}>Supprimer</button>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}; export default TodoComponent;