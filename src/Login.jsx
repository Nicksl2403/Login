  import { useState, useEffect, useRef } from 'react'
  import { BrowserRouter, Link, Route, Routes, useLocation, Navigate, useNavigate, useResolvedPath } from 'react-router-dom';
  import './CSS/indexLogin.css'
  import Calculadora from './Jogos/calculadora.jsx';
  import Botao from './Jogos/botao.jsx';
  import Velha from './Jogos/velha.jsx';
  import Painel from "./Painel.jsx";
  function Login() {
    const [logado, setLogado] = useState(false);
    const [passouMouse, setPassouMouse] = useState(false);
    const [nomeInput, setNomeInput] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const sites = ["/Login","/Calculadora","/Botao","/Jogo-Da-Velha","/Painel"];
    return (
        <>
        {location.pathname === "/Login" && !logado && ( 
          <>
        <div className="login">
           <div style={{
          height: "100vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }}> <div className="box" style ={{
      width: "300px",
      height: "300px",
      color: "white",
      display:"flex",
      flexDirection: "column",
      backgroundColor: "gray",
      alignItems:"center",
      borderRadius:"20px",
      boxShadow: 
      ` 0 0 8px #00ff88,
      0 0 20px #00ff88,
      inset 0 0 40px rgba(23,250,144,0.6)
      `,
      gap:"10px",
        }}> 
      
        <input type="text" placeholder="Digite o seu usuario" value={nomeInput} onChange={(evento) => setNomeInput(evento.target.value)}style={{
          background:"black",
          color:"white",
          textAlign:"center",
          border:"0px solid black",
          marginTop:"150px",
          height:"30px",
          width:"220px"
        }}></input>
        <button onMouseEnter={() => setPassouMouse(true)}onMouseLeave={() => setPassouMouse(false)} onClick={() => {
          if(nomeInput === "Nicolas") {
             setLogado(true);navigate("/Painel")
            } else { 
              alerta = alert("Usuario Invalido")
            }}
          } style={{
          width:"150px",
          height:"50px",
          background: "transparent",
          fontSize:"23px",
          border: passouMouse ? "2px solid black" : "2px solid transparent",
        }}><b>Entrar</b></button>
        </div>
        </div>
        </div>
        </>
        )}
      <Routes>
      <Route path="/Calculadora" element={<Calculadora />} />
      <Route path="/Botao" element={<Botao />} />
      <Route path="/Jogo-Da-Velha" element={<Velha />} />
      <Route path="/Painel" element={logado ? <Painel /> : <Navigate to="/Login"/>} /> 
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<Navigate to="/Login" />} />
      </Routes>
      </>
        )
  }
export default Login;