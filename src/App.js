import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario.js';


function App() {

  // Arreglo de Citas
  const [citas, setCitas] = useState([]);

  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
                crearCita={crearCita}
              />
          </div>
          <div className="one-half column">
              2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
