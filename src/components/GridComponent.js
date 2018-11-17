import React from "react";

export class GridComponent extends React.Component {
  state = {
    data: [],
    editData: {}
  };
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  handleEdit(item) {
    this.setState({
      editData: item
    });
  }
  handleSave() {
    var { editData } = this.state;
    var changedData = this.state.data;
    var tmp = this.state.data.indexOf(editData);
    editData = {
      ...editData,
      title: "Sagyn"
    };
    changedData[tmp] = editData;

    this.setState({
      data: changedData
    });
  }

  render() {
    const { data, editData } = this.state;
    var dataContainer = data.map(item => (
      <tr key={item.id}>
        <td>{item.userId}</td>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.completed ? "Completed" : "Not completed"}</td>
        <td>
          <button onClick={() => this.handleEdit(item)}>Duzenle</button>
        </td>
      </tr>
    ));

    var editFormContainer = null;
    if (typeof editData.id !== "undefined") {
      editFormContainer = (
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" value={editData.userId} />
          <input type="text" value={editData.id} />
          <input type="text" value={editData.title} />
          <input type="checkbox" checked={editData.completed} />
          <button onClick={this.handleSave.bind(this)}>Kaydet</button>
        </form>
      );
    }

    return (
      <div>
        {editFormContainer}
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>{dataContainer}</tbody>
        </table>
      </div>
    );
  }
}
