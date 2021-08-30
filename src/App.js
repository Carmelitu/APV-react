import React, { Fragment, useState } from 'react';
import Cita from './components/Cita.js';
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
  
  // Elimina cita por ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

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
              <h2>{titulo}</h2>
              {citas.map( cita => (
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              )) }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
