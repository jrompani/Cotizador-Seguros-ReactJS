import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './componentes/app';
import * as serviceWorker from './serviceWorker';

//const titulo= React.createElement('h1', {id:'titulo'}, 'Hola Mundo');
//const cuerpo= React.createElement('h2', {id: 'subtitulo'}, "Principios de Programacion")

//ReactDOM.render(titulo, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
