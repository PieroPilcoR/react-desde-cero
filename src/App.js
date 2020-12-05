import React, {Fragment} from 'react';
//import logo from './logo.svg';
import './styles/styles.scss';
import Curso from './Curso.jsx';
//import './App.css';
//const App = () => <h1>Habla pe causaa desde App.js con ED Team</h1>
const App = () => (
  <Fragment>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="Banner" src="https://concepto.de/wp-content/uploads/2015/02/futbol-1-e1550783405750.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">I'm here</p>
            <p>La mejor noche de tu vida</p>
            <a href="https://www.google.com" className="button">Click aquí</a>
          </div>
        </div>
      </div>
    </div>
    <div id="cards" className="ed-grid m-grid-3">
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
    </div>
  </Fragment>
  
)
/*
Reglas JSX
1: Todo elemento debe cerrarse
2: Los componentes deben devolver solo UN elemento padre
3: Apoyarse en los fragment cuando se necesite devolver 2 elementos
4: Fragment => <> hijos </>
5: img siempre se cierra
6: class => className
7: for => htmlFor
*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
