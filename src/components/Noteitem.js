import React, { useContext } from 'react';
import noteContext from "D:/Reactjs/cloudnotebook/src/context/NoteContext.js" /*"../context/notes/noteContext"*/


const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
    const {note, updateNote} = props;
  return (
    <div className='col-md-3'>
      <div className="card my-3">
          <div className="card-body">
              <div className="d-flex align-items-center justify-content-evenly">
              <h5 className="card-title">{note.title}</h5>
              <i className="fa-solid fa-trash" onClick={()=>{deleteNote(note._id);
                props.showAlert("Deleted successfully", "sucess")}}></i>
              <i className="fa-solid fa-user-pen" onClick={()=>{updateNote(note)}}></i>
          </div>
              <p className="card-text">{note.description}</p>
          </div>
      </div>
    </div>
  )
}

export default Noteitem
