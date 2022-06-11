import React from "react";

class NotePad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesText: "",
      noteList: []
    };
  }

  onSaveNotes = () => {
    const notes = document.getElementById("notes-value").value;
    const obj = { notes };
    this.setState({
      notesText: "",
      noteList: this.state.noteList.concat(obj)
    });
  };

  onChangeValue = () => {
    const notes = document.getElementById("notes-value").value;
    this.setState({
      notesText: notes
    });
  };


  render() {
    return (
      <div className="note-pad">
        <div className="some-test">
          <div>
            <textarea
              rows="5"
              cols="35"
              placeholder="Notes
              
              ____________________________
              ____________________________
              __________________________ 
              ___________________________
              __________________________
              __________________________
              ______________________
              ________________________
              _________________________
              ___________________________
              ____________________________
              __________________________"
              id="notes-value"
              value={this.state.notesText}
              onChange={this.onChangeValue}
            />
          </div>
        </div>
        <div className="display-notes">
          {this.state.noteList.length > 0
            ? this.state.noteList.map((item, index) => (
                <div key={index} className={`notes-item ${index}`}>
                  <div className="note-head">
                    <h3>Note {index}</h3>
                    <button
                      className="delete-note"
                      onClick={() => this.onDeleteNote(index)}
                    >
                      X
                    </button>
                  </div>
                  {item.notes}
                </div>
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default NotePad;
