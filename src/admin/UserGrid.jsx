import React from "react";

    
export default class UserGrid extends React.Component {
    render(props) {
    console.log(props.data);
    return (
        <>
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.tittle}</td>
            <td>{props.data.userId}</td>
            <td>{props.data.completed}</td>
        </tr>
            
        </>
    );
    }
}