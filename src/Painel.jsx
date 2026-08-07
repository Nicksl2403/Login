import { useEffect, useState, } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import './CSS/indexPainel.css'
import logo from "./Jogos/imagens/logoEmpresa.png"
function Painel() {
  const [site, setSite] = useState("");
  const [entrada, setEntrada] = useState(false);
  return (
    <>
      <>
       <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black"
      }}>
      <div className="box" style ={{
      width: "99%",
      height: "91%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      borderRadius: "50px",
      boxShadow: `
        0 0 8px #00ff88,
        0 0 20px #00ff88,
        inset 0 0 40px rgba(23,250,144,0.6)
      `,
      gap: "10px"
    }}>
       <Link to="/Login">
      <button className="btnPainel" style={{
      backgroundColor: "red",
      width: "150px",
      height: "50px",
      }}><b>Voltar</b></button>
      </Link>
    <Link to="/Calculadora">
    <button className="btnPainel" onMouseEnter={() => setPassouMouse(true)}onMouseLeave={() => setPassouMouse(false)}onClick={() => {setPassouMouse1(false)}} style={{
      width: "150px",
      height: "50px",
      fontSize: "25px",
      backgroundColor: "transparent",
      textAlign: "center",
      padding: 0,
    }}><b>Calculadora</b> </button>
    </Link>
     <Link to="/Botao">
    <button className="btnPainel" onMouseEnter={() => setPassouMouse1(true)}onMouseLeave={() => setPassouMouse1(false)}onClick={() => {setPassouMouse1(false)}} style={{
      width: "150px",
      height: "50px",
      fontSize: "25px",
      backgroundColor: "transparent",
      textAlign: "center",
      padding: 0,
    }}><b>Botão</b></button>
    </Link>
     <Link to="/Jogo-Da-Velha">
    <button className="btnPainel" onMouseEnter={() => setPassouMouse2(true)}onMouseLeave={() => setPassouMouse2(false)}onClick={() => {setPassouMouse2(false)}} style={{
      width: "150px",
      height: "50px",
      fontSize: "20px",
      backgroundColor: "transparent",
      textAlign: "center",
      padding: 0,
    }}><b>Jogo da velha</b></button>
    </Link>
        </div>
        </div>
    </>
        </>
  )
}

export default Painel
