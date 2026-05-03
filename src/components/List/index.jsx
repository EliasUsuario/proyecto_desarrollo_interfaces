import Item from "../Item";


const List = ({ content }) => {
    return (
        <section>
            <h2>To Do</h2>
            <section>
                <ul>
                    {content.map((task) => {
                        return <Item key={task.id} name={task.name}/>;
                    })}                   
                </ul>  
            </section> 
        </section>
           

    );
};    

export default List;