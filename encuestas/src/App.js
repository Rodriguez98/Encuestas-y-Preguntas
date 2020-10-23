import React from 'react';
import './App.css';

function App() {

  return (
    <div className="app container">


      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="./App.js">Evaluación Docente</a>
        </nav>
      </div>

      <div>
        <ul class="list-group" style={{ width: '15%', height: '100%', position: 'fixed', overflow: 'auto' }}>
          <a href="./Encuestas.js" class="list-group-item list-group-item-action" style={{ float: 'right' }}>Encuestas
          <button type="button" class="btn btn-link">Añadir</button></a>

          <a href="./Encuestas.js" class="list-group-item list-group-item-action" style={{ float: 'right' }}>Preguntas
          <button type="button" class="btn btn-link">Añadir</button></a>
        </ul>
      </div>

      <div style={{ marginLeft: '20%', padding: '1px' }}>


        <h5>Añadir encuesta</h5>

        <div>
          <label class="lead" >Titulo:</label>
          <input style={{ width: "300px", marginLeft: '15px', marginBottom: "20px" }}></input>
        </div>

        <div>
          <label class="lead" for="title">Fecha: </label>
          <input style={{ width: "300px", marginLeft: '15px', marginBottom: "35px" }}></input><br></br>
        </div>

        <div>
          <label class="lead">Curso:</label>
          <select class="custom-select" style={{ width: "300px", marginLeft: '15px' }}>
            <option value="vacio">________________________________________</option>
            <option value="data1">Sistemas Distribuidos --- Marlon Peralta</option>
            <option value="data1">Diseño Web --- Darwin Salinas</option>
          </select>
          <button type="button" class="btn btn-secondary" style={{ marginLeft: '25px' }}>+</button>
        </div><br></br>

        <div style={{ float: 'right', margin: '5px' }}>
          <button type="button" class="btn btn-secondary">GRABAR</button>
        </div>

        <div style={{ float: 'right', margin: '5px' }}>
          <button type="button" class="btn btn-secondary">Guardar y continuar editando</button>
        </div>

        <div style={{ float: 'right', margin: '5px' }}>
          <button type="button" class="btn btn-secondary">Guardar y añadir otro</button>
        </div>

      </div>

      <br></br>
      <br></br>


      <div style={{ marginLeft: '20%', padding: '1px' }}>


        <h5>Añadir pregunta</h5>

        <div>
          <label class="lead">Encuesta:</label>
          <select class="custom-select" style={{ width: "300px", marginLeft: '15px' }}>
            <option value="vacio">________________________________________</option>
            <option value="data1">Sistemas Distribuidos --- Marlon Peralta</option>
            <option value="data1">Evaluacion Docente I Semestre --- Diseño Web --- Darwin Salinas</option>
          </select>
          <button type="button" class="btn btn-secondary" style={{ marginLeft: '25px' }}>+</button>
        </div><br></br>

        <div>
          <label class="lead" for="title">Pregunta: </label>
          <input style={{ width: "300px", marginLeft: '15px', marginBottom: "35px" }}></input><br></br>
        </div>

        <tr class="table-secondary">
            <th style={{ width: "99%" }}>Opciones</th>
            </tr>

        <table>

          <tr class="table-secondary">
            <th style={{ width: "50%" }}>Opciones</th>
            <td style={{ width: "50%" }}>Votos</td>
            <td style={{ width: "50%" }}>¿Eliminar?</td>
          </tr>

          <tr>
          <td><input></input></td>
          <td><input type='number'></input></td>
          <td class="badge badge-danger" style={{ marginLeft: '25px' }}>x</td>
          </tr>

          <tr>
          <td><input></input></td>
          <td><input type='number'></input></td>
          <td class="badge badge-danger" style={{ marginLeft: '25px' }}>x</td>
          </tr>

          <tr>
          <td><input></input></td>
          <td><input type='number'></input></td>
          <td class="badge badge-danger" style={{ marginLeft: '25px' }}>x</td>
          </tr>

          <tr>
          <a href="./Encuestas.js" class="btn btn-link" style={{ marginLeft : '-30px' , width : '220px' }}>  + Agregar otra opcion </a></tr>
        </table>

      </div>

      <div style={{ float: 'right', margin: '5px' }}>
          <button type="button" class="btn btn-secondary">GRABAR</button>
        </div>

        <div style={{ float: 'right', margin: '5px' }}>
          <button type="button" class="btn btn-secondary">Guardar y continuar editando</button>
        </div>

        <div style={{ float: 'right', margin: '5px' }}>
          <button type="button" class="btn btn-secondary">Guardar y añadir otro</button>
        </div>
    </div>
  );
}

export default App;
