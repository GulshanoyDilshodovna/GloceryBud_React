import "./App.css";
import React, { useEffect, useState } from "react";
import Alert from "./components/Alert";
import List from "./components/List";


const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return [];
  }
}


function App() {
  // useState
  const [name, setName] = useState();
  const [list, setList] = useState(getLocalStorage);
  const [alert, setAlert] = useState({show: false, type: '', massage: ''})
  const [isEdit, setEdit] = useState(false)
  const [editID, setEditID] = useState(null)


  //input change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  //form submit
  const handleSubmit = (e) => {
      e.preventDefault();

      if(!name){
        showAlert(true, 'Please, enter something', 'warning')
      } else if(name && isEdit){
        setList(
          list.map((item)=>{
            if(item.id === editID){
              return {...item, title: name}
            }
            return item
          })
        )
        setName('')
        setEditID(null)
        setEdit(false)
        showAlert(true, "Item edited", 'info')
      }else{
        showAlert(true, 'Item added to list', 'success')
        const newItem = {
          id: Math.random(),
          title: name,
        }
        setList([...list, newItem]);
        setName("")
      }
  };

  const showAlert = (show=false, massage='', type='') => {
    setAlert({show,massage, type})
  }

  // clear all
  const ClearAlert = () => {
    showAlert(true, 'All data entered has been deleted', 'danger')
    setList([])
  }

  //remove item 
  const removeItem = (id) => {
    showAlert(true, "The item has been removed from the list", 'secondary')
    setList(
     list.filter((item)=>item.id !==id)
    )
  }

  //edit item
  const editItem = (id) => {
    const spsItem = list.find((item)=>item.id === id)
    setEdit(true)
    setEditID(id)
    setName(spsItem.title)
  }

  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list))
  },[list])

  return (
    <div className="App">
      <div className="container">
        <div className="card card-style">
          <div className="card-header">
            <h2>Glocery Bud</h2>
          </div>
          <div className="card-body">
          {alert.show && <Alert {...alert} deleteAlert={showAlert} list={list} />}
            <form className="d-flex mb-4" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. eggs"
                onChange={handleChange}
                value={name}
              />
              <button className="btn btn-primary ms-2" onSubmit={handleSubmit}>{isEdit ? "Edit" : "Submit"}</button>
            </form>
            {
              list.length>0 && <div>
                <List items={list} removeItem={removeItem} editItem={editItem} /> 
                <button className="btn btn-danger mt-3" onClick={ClearAlert}>Clear All</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
