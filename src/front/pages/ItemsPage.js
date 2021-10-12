import React, { useState, useEffect } from 'react'
//import axios from 'axios';
import Item from '../components/Item'

const url = "http://localhost:8000/api/items";

const addedProduct = [
    {titulo: ""},
    {precio: ""},
    {stock: ""},
    {descripcion: ""}
]

const ItemsPage = () => {
    
    const [usuarios, setUsuarios] = useState([])
    const [addedProduct, setAddedProduct] = useState([])


    const getUsuarios = () =>{
        fetch(url)
        .then(response => response.json())
        .then(datos => setUsuarios(datos))
    }

    useEffect(() => {
        getUsuarios();
    }, [])

    const addProduct = e =>{
        console.log("Agregando producto")
        e.preventDefault();
        setAddedProduct()
    }

    return (
            <div className="container">
                <div className="row mt-4">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>ID</td>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                </tr>
                                    {
                                        usuarios.map(u =>(
                                            <Item username={u.username} password={u.password} nombre={u.nombre} apellido={u.apellido} key={u._id} id={u._id}></Item>
                                        ))
                                    }
                            </tbody>   
                        </table>
                </div> 
                <div className="row mt-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={addProduct}>
                                    <div className="mb-3">
                                        <input className="form-control" type="text" placeholder="título"/>
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control" type="text" placeholder="precio"/>
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control" type="text" placeholder="stock"/>
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" type="text" placeholder="Descripción"/>
                                    </div>
                                    <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-primary">Agregar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default ItemsPage