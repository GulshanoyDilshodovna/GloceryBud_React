import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import List from "./components/List";

function App() {
  // useState
  const [name, setName] = useState();
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({show: false, type: '', massage: ''})
  const [isEdit, setEdit] = useState(false)

  //functions

  //input change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  //form submit
  const handleSubmit = (e) => {
      e.preventDefault();

      if(!name){
        showAlert(true, 'Please, enter something', 'warning')
      } else if(isEdit){
        //
      }else{
        const newItem = {
          id: Math.random(),
          title: name,
        }
        setList([...list, newItem]);
        setName("")
      }
      console.log(list);
  };

  const showAlert = (show=false, massage='', type='') => {
    setAlert({show,massage, type})
  }


  return (
    <div className="App">
      <div className="container">
        <div className="card card-style">
          <div className="card-header">
            <h2>Glocery Bud</h2>
          </div>
          <div className="card-body">
          {alert.show && <Alert {...alert} deleteAlert={showAlert} />}
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
                <List items={list} /> 
                <button className="btn btn-danger mt-3" onClick={()=>{
                  setList([])
                }}>Clear All</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
