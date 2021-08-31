import React, { Fragment, useState, useEffect } from 'react';
import Cita from './components/Cita.js';
import Formulario from './components/Formulario.js';


function App() {

  // Citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales){
    citasIniciales = [];
  }

  // Arreglo de Citas
  const [citas, setCitas] = useState(citasIniciales);

  useEffect( () => {
    localStorage.setItem( 'appointments', JSON.stringify( citas ) );
  }, [citas] );

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
