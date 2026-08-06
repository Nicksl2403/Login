  import { useState, useEffect, useRef } from 'react'
  import { BrowserRouter, Link, Route, Routes, useLocation, Navigate, useNavigate, useResolvedPath, useAsyncError } from 'react-router-dom';
  import './CSS/indexLogin.css'
  import Calculadora from './Jogos/calculadora.jsx';
  import Botao from './Jogos/botao.jsx';
  import Velha from './Jogos/velha.jsx';
  import Painel from "./Painel.jsx";
  import Logo from "./Jogos/imagens/logoEmpresa.png"
  import senhas from "./.gitignore/senhas.jsx"
  function Login() {
    const [logado, setLogado] = useState(false);
    const [passouMouseBotao, setPassouMouseBotao] = useState(false);
    const [nomeInput, setNomeInput] = useState("");
    const [senhaInput, setSenhaInput] = useState("");
    const [passouMouseNome, setPassouMouseNome] = useState("");
    const[passouMouseSenha, setPassouMouseSenha] = useState("");
    const [tecla, setTecla] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
     useEffect(() => {
    function teclaApertada(evento) {
      if(evento.key == "Enter") {
         if(String(nomeInput) in senhas) {
            if((String(nomeInput)) === "ADM") {
              setLogado(true); 
              navigate("/Painel");
            } else if(Number(senhaInput) === senhas[nomeInput]) {
               setLogado(true); 
               navigate("/Painel");
              } else {
                let alerta = alert("Senha incorreta");
              }
            } else {
               let alerta = alert("Usuario nao encontrado");
            }
      }
  
  }
  window.addEventListener("keydown", teclaApertada);
    return () => {
    window.removeEventListener("keydown", teclaApertada);
  };
}, [nomeInput,senhaInput]);
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
      backgroundColor: "black",
      alignItems:"center",
      borderRadius:"20px",
      boxShadow: 
      ` 0 0 8px #00ff88,
      0 0 20px #00ff88,
      inset 0 0 40px rgba(23,250,144,0.6)
      `,
      gap:"20px",
        }}> 
        <div style={{
          marginTop:"15px",
        }}></div>
        <img src={Logo} width={200} height={80} />
        <input type="text" placeholder="Digite o seu usuario" value={nomeInput} onChange={(evento) => setNomeInput(evento.target.value)} onMouseEnter={() => {setPassouMouseNome(true)}}onMouseLeave={() => {setPassouMouseNome(false)}}style={{
          background:"black",
          color:"white",
          textAlign:"center",
          border: passouMouseNome ? "2px solid seagreen" : "2px solid black",
          marginTop:"0px",
          height:"30px",
          width:"220px",
          outline: "none"
        }}></input>
          <input type="password" placeholder="Digite sua senha" value={senhaInput} onChange={(evento) => {setSenhaInput(evento.target.value)}} onMouseEnter={() => {setPassouMouseSenha(true)}} onMouseLeave={() => {setPassouMouseSenha(false)}} style={{
          background:"black",
          color:"white",
          textAlign:"center",
          border: passouMouseSenha ? "2px solid seagreen" : "2px solid black",
          marginTop:"0px",
          height:"30px",
          width:"220px",
          outline: "none"
        }}></input>
        <button onMouseEnter={() => setPassouMouseBotao(true)}onMouseLeave={() => setPassouMouseBotao(false)} onClick={() => {
          if(String(nomeInput) in senhas) {
            if((String(nomeInput)) === "ADM") {
              setLogado(true); 
              navigate("/Painel");
            } else if(Number(senhaInput) === senhas[nomeInput]) {
               setLogado(true); 
               navigate("/Painel");
              } else {
                let alerta = alert("Senha incorreta");
              }
            } else {
               let alerta = alert("Usuario nao encontrado");
            }
          }} style={{
          width:"150px",
          height:"50px",
          background: "transparent",
          fontSize:"23px",
          background:"transparent",
          border: passouMouseBotao ? "2px solid seagreen" : "2px solid transparent",
          color:"white",
        }}><b>Entrar</b></button>
        </div>
        </div>
        </div>
        </>
        )}
      <Routes>
      <Route path="/Calculadora" element={logado ? <Calculadora /> : <Navigate to="/Login"/>} />
      <Route path="/Botao" element={logado ? <Botao /> : <Navigate to="/Login"/>} />
      <Route path="/Jogo-Da-Velha" element={logado ? <Velha /> : <Navigate to="/Login"/> } />
      <Route path="/Painel" element={logado ? <Painel /> : <Navigate to="/Login"/>} /> 
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<Navigate to="/Login" />} />
      </Routes>
      </>
        )
  }
export default Login;