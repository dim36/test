import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
         <div className="wrapper">
      <SayFulName name="Dmitry" surname="Reshetnikov" link="vk.com" />
      <SayFulName name="Anna" surname="Kamneva" link="facebook.com" />
      <SayFulName name="Dmi" surname="Res" link="#" />
    </div>
     );
  }
}

/*
function Hello() {
  return
  (
    <h1>Hello world!</h1>
  )
}
*/

function SayFulName(props) {
  return (
    <div>
    <h1> Мое имя {props.name}, фамилия {props.surname}</h1>
    <a href={props.link}> Ссылка на мой профиль </a>
    </div>
  )
}

export default App;
