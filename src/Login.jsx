import { useState, useEffect, useRef, use } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
  useResolvedPath,
  useAsyncError,
} from "react-router-dom";
import "./CSS/indexLogin.css";
import Calculadora from "./Jogos/calculadora.jsx";
import Botao from "./Jogos/botao.jsx";
import Velha from "./Jogos/velha.jsx";
import Painel from "./Painel.jsx";
import Logo from "./Jogos/imagens/logoEmpresa.png";
import senhas from "./.gitignore/senhas.jsx";
function Login() {
  const [logado, setLogado] = useState(false);
  const [nomeInput, setNomeInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [tecla, setTecla] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {location.pathname === "/Login" && !logado && (
        <>
          <div className="login">
            <div
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <div
                className="box"
                style={{
                  width: "330px",
                  height: "350px",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "20px",
                  boxShadow: ` 0 0 8px #00ff88,
      0 0 20px #00ff88,
      inset 0 0 40px rgba(23,250,144,0.6)
      `,
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    marginTop: "15px",
                  }}
                ></div>
                <Link to="https://grupocropfield.com.br/">
                  <img src={Logo} width={315} height={130} />
                </Link>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    if (String(nomeInput) === "ADM") {
                      setLogado(true);
                      navigate("/Painel");
                    } else {
                      if (String(nomeInput) in senhas) {
                        if (Number(senhaInput) === senhas[nomeInput]) {
                          setLogado(true);
                          navigate("/Painel");
                        } else {
                          alert("Senha incorreta");
                        }
                      } else {
                        alert("Usuario nao encontrado");
                      }
                    }
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <input
                    className="input"
                    onChange={(e) => setNomeInput(e.target.value)}
                    type="text"
                    placeholder="Digite Seu Usuário"
                    style={{
                      background: "black",
                      color: "white",
                      textAlign: "center",
                      marginTop: "0px",
                      height: "30px",
                      width: "220px",
                      outline: "none",
                    }}
                  ></input>
                  <input
                    className="input"
                    onChange={(e) => setSenhaInput(e.target.value)}
                    type="password"
                    placeholder="Digite Sua Senha"
                    style={{
                      background: "black",
                      color: "white",
                      textAlign: "center",
                      marginTop: "0px",
                      height: "30px",
                      width: "220px",
                      outline: "none",
                    }}
                  ></input>
                  <button
                    className="input"
                    type="submit"
                    onMouseEnter={() => setPassouMouseBotao(true)}
                    onMouseLeave={() => setPassouMouseBotao(false)}
                    style={{
                      width: "150px",
                      height: "50px",
                      background: "transparent",
                      fontSize: "23px",
                      background: "transparent",
                      color: "white",
                    }}
                  >
                    <b>Entrar</b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      <Routes>
        <Route
          path="/Calculadora"
          element={logado ? <Calculadora /> : <Navigate to="/Login" />}
        />
        <Route
          path="/Botao"
          element={logado ? <Botao /> : <Navigate to="/Login" />}
        />
        <Route
          path="/Jogo-Da-Velha"
          element={logado ? <Velha /> : <Navigate to="/Login" />}
        />
        <Route
          path="/Painel"
          element={logado ? <Painel /> : <Navigate to="/Login" />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Navigate to="/Login" />} />
      </Routes>
    </>
  );
}
export default Login;
