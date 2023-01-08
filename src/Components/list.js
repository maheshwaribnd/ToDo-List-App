import { useEffect } from "react";
import { useState } from "react";
import "./list.css";

const List = () => {
    let [item, setItem] = useState("");
    let [list, setList] = useState([]);

    // Get Local Storage

    useEffect(() => {
        if(localStorage.getItem("list")){
            setList(JSON.parse(localStorage.getItem("list")))
        }
    }, [])

    // Add Items in a List

    const AddItem = () => {
        if (!item) {
        }
        else {
            setList((list) => [...list, item]);
            localStorage.setItem("list", JSON.stringify([...list, item]))          // Set Items from Local Storage
            setItem("");
        }
    };

    // Edit Items in a List

    // const EditItem = (id) => { 
    //     const EditItem = list.find((listOfArr, ind) => ind === id);
    //     setList(EditItem);
    // }

    // Delete Items in a List

    const DeleteItem = (id) => {
        const UpdatedItem = list.filter((listOfArr, ind) =>  ind !== id)
        localStorage.removeItem('list');
        setList(UpdatedItem);
    }

  return (
    <div className="container"> 
        <div className="head">
            <h1>ToDo List</h1>
        </div>
        <div className="item">
            <input type="text" placeholder="Add a Item" onChange={(e) => setItem(e.target.value)} value={item} />
            <button onClick={AddItem} title="Add Item">+</button>
        </div>
        <ol>
            {list.map((listOfArr, ind) => (
            <div className="itemlist">
                <li key={listOfArr.ind}>{listOfArr}</li>
                <div>
                    {/* <i className="fa-regular fa-pen-to-square btn-style" title="Edit Item" onClick={() => EditItem(ind)}></i> */}
                    <i className="fa-regular fa-trash-can btn-style" title="Delete Item" onClick={() => DeleteItem(ind)}></i>
                </div>
            </div>
            ))}
        </ol>
    </div>
  );
};

export default List;
