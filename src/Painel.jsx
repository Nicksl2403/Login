import { useEffect, useState, } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import './CSS/indexPainel.css'

function Painel() {
  const location = useLocation();
  const [site, setSite] = useState("");
  const [modoJogo, setModoJogo] = useState(false);
  const [entrada, setEntrada] = useState(false);
  const [passouMouse, setPassouMouse] = useState(false);
  const [passouMouse1, setPassouMouse1] = useState(false);
  const [passouMouse2, setPassouMouse2] = useState(false);
  return (
    <>
      <>
        <div style={{
        backgroundSize: "cover",
        backgroundColor: "rgb(0, 119, 60)",
      }}>
      <Link to="/Login">
      <button style={{
        backgroundColor: "red",
        width: "100px",
        height: "30px",
        border: "2px solid black"
      }}><b>Voltar</b></button>
      </Link>
      </div>
    <div className='painel'>
      <div className="box" style ={{
      width: "200px",
      height: "500px",
      color: "black",
      backgroundColor: "black",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:"20px",
      boxShadow: 
      ` 0 0 8px #00ff88,
      0 0 20px #00ff88,
      inset 0 0 40px rgba(23,250,144,0.6)
      `,
      gap: "10px",
    }}>
    <Link to="/Calculadora">
    <button onMouseEnter={() => setPassouMouse(true)}onMouseLeave={() => setPassouMouse(false)}onClick={() => {setPassouMouse1(false)}} style={{
      width: "150px",
      height: "50px",
      fontSize: "25px",
      color: "white",
      backgroundColor: "transparent",
      border: passouMouse ? "2px solid gray" : "2px solid white",
      textAlign: "center",
      padding: 0,
    }}><b>Calculadora</b> </button>
    </Link>
     <Link to="/Botao">
    <button onMouseEnter={() => setPassouMouse1(true)}onMouseLeave={() => setPassouMouse1(false)}onClick={() => {setPassouMouse1(false)}} style={{
      width: "150px",
      height: "50px",
      fontSize: "25px",
      color: "white",
      backgroundColor: "transparent",
      border: passouMouse1 ? "2px solid gray" : "2px solid white",
      textAlign: "center",
      padding: 0,
    }}><b>Botão</b></button>
    </Link>
     <Link to="/Jogo-Da-Velha">
    <button onMouseEnter={() => setPassouMouse2(true)}onMouseLeave={() => setPassouMouse2(false)}onClick={() => {setPassouMouse2(false)}} style={{
      width: "150px",
      height: "50px",
      fontSize: "20px",
      color: "white",
      backgroundColor: "transparent",
      border: passouMouse2 ? "2px solid gray" : "2px solid white",
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
