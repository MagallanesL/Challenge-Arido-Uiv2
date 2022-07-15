import React, { useState } from "react";
import { useEffect } from "react";
import AddUser from "../modal/addUser";
import Search from "../buttons/Search";
import AddUser from "../modal/addUser";
import { Table, Button } from "react-bootstrap";
import Detalles from "../modal/infoUser";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function index() {
  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        setUsuarios(response.data);
        setTablaUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const agregarUsuario = async () => {
    await axios.post("http://localhost:3000/api/users", {
      Alias,
      Nombre,
      Correo,
      Password,
    });
    peticionGet();
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Usuarios</h1>
      <Search />
      <div className="row">
        <div className="col-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Alias</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Detalles</th>
              </tr>
            </thead>

            <tbody>
              {usuarios &&
                usuarios.map((usuario) => (
                  <tr key={usuario.idalias}>
                    <td>{usuario.idalias}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.mail}</td>
                    <td>
                      <button classname="btn btn-info btn-sm">
                        <Detalles />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <h3>
            <AddUser />
          </h3>
        </div>
      </div>
    </div>
  );
}
