const React = require('react');

class Index extends React.Component{
    render() {
        const { todos } = this.props;
        if (todos.length === 0) {
            return (
                <div>
            <h1>To Do List</h1>
            <h2>Nothing to do yet</h2>
            <form action="/" method="POST">
                    <input type="text" name="todo" />
                    <input type="submit" value="ADD TO DO" />
                </form>
            </div>
            ) 
        }else {
        return(
            <div>
                <h1>To Do List</h1>
                <ul>
                {
                    todos.map((todo, i) => {
                    return ( <li>{todo.todo} {todo.done ? ` - Done` : ` - Not Done`} </li>)
                    })
                }
                </ul>
                <form action="/" method="POST">
                    <input type="text" name="todo" />
                    <input type="submit" value="ADD TO DO" />
                </form>
            </div>
        )
    } }
}

module.exports = Index;