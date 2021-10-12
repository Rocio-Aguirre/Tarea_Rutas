import React from 'react'

const Item = ({username, password, id, nombre, apellido}) => {
    return (

        <tr>
        <th>{id}</th>
        <td>{username}</td>
        <td>{password}</td>
        <td>{nombre}</td>
        <td>{apellido}</td>
        </tr>
 
    )
}

export default Item
