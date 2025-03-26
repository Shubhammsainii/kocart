import React from "react";
// import UserGrid from "./UserGrid";
// import { TablePagination } from "react-pagination-table";
// import { TableSimple } from "react-pagination-table";
// import Table from "react-pagination-table/lib/Table";
export default class Users extends React.Component {
  usersData = [];
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState(data);
      })
      .catch((error) => console.log(error));
  }
  render(props) {
    return (
      <>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>User Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.usersData &&
              this.usersData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>

                    <td>{item.title}</td>

                    <td>{item.userId}</td>
                    <td>{item.completed ? "Done" : "Pending"}</td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <tr>
                <td colSpan="4">
                  <ul class="pagination">
                    {this.usersData.map}
                    <li>
                      <a href="#">1</a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
