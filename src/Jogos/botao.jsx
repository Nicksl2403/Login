import {useState,useRef,useEffect} from 'react'
import { Link } from 'react-router-dom';
import botaoImg from "./imagens/botao.png";
import botaoImgPress from "./imagens/botaopressionado.png";
import "../CSS/indexBotao.css";
function Botao() {
  const [clicado , setClicado] = useState(false);
  const [PoderNavegador, setPoder] = useState("???"); // NOME DO PODER
  const [cliques, setCliques] = useState(0); // CLIQUES
  const [Cooldown, setCooldown] = useState (false); // COOLDOWN DAS HABILIDADES
  const [TimerNavegador, setTimer] = useState(0); // TIMER NO NAVEGADOR PARA ATUALIZAR A EXIBIÇÃO
  const [AutoClicker, LigarAutoClicker] = useState(false);
  const [Botao, SetBotao] = useState(botaoImg);
  const [Multiplicador, SetMultplicador] = useState(1);
  const [Renascer, SetRenascer] = useState("???");
  const [PrecoRenascer, SetPrecoRenascer] = useState(1000);
  const [CorAC, setCorAC] = useState("red");
  const [TextoAC, setTextoAC] = useState ("OFF");
  const intervaloac = useRef(null);
  const [HTMLAC, setHTMLAC] = useState("???");
  const [ACDESBLOQUEADO, setACDESBLOQUEADO] = useState(false);
  useEffect(() => {
  if (ACDESBLOQUEADO && cliques < 10) {
    setPoder("???");
  } else if (ACDESBLOQUEADO && cliques >= 10) {
    setPoder("Clique:10X");
  } if (cliques < PrecoRenascer) {
    SetRenascer("???");
  } else if (cliques >= PrecoRenascer) {
    SetRenascer("Renascer"); 
  } 
    if (cliques <= 9) {
    setPoder("???");
  }
} , [cliques, ACDESBLOQUEADO, Renascer]);
  function esperar () {
     let tempo = 5; // TEMPO QUE QUER ESPERE
      setPoder("Carregando...   ", tempo);
  setTimer(5); // TEMPO DO TIMER, TEM QUE SER IGUAL AO TEMPO DE CIMA PARA FICA BONITO NO SITE
  let intervalo = setInterval(() => { // CRIA UM INTERVALO DE REUTILIZAR UM CODIGO APOS 1000 MS
    tempo--; // DECREMENTA O TEMPO
    setTimer(tempo); //ATUALIZA O VALOR DO TEMPO NO SITE

    if (tempo <= 0) { // SAIDA CASO O COOLDOWN ACABE
      clearInterval(intervalo); 
      setPoder("Clique:10x");
      setCooldown(false);
    }
  }, 1000);
}
  return ( 
    <div className="botao"> 
    <>
    <Link to="/Painel">
      <button style={{
        backgroundColor: "red",
        width: "100px",
        height: "30px",
        border: "2px solid black"
      }}><b>Voltar</b></button>
      </Link>
  <div style = {{ // CENTRALIZAR
    textAlign: "center",
    color: "white",
    display: "Flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    gap: "5px",
  }}> 
    <h1><b>Cliques:{cliques}</b></h1> {/*Mostra e atualiza os cliques*/}
    <button className= {clicado ? "btnBotao ativo" : "btnBotao desativado"}   onClick = {() => {setCliques(c => { c + 1 * Multiplicador; setClicado(true);
    setTimeout(() => {
      setClicado(false);
    }, 50);
    if(c + Multiplicador >= 10) {
      setPoder("Clique:10X")
    } else {
      setPoder("???")
    }
    return c + 1 * Multiplicador;
  }
    ), cliques >= 9 && setPoder("Clique:10X"), cliques + 1 >= PrecoRenascer ? SetRenascer("Renascer") : SetRenascer("???"), cliques >= 499 || ACDESBLOQUEADO ? setHTMLAC("AutoClicker") : setHTMLAC("???");
    SetBotao(botaoImgPress)
      setTimeout(() => {
        SetBotao(botaoImg);
      }, 100)
    }}
      style ={{
        width: "100px", /*DEIXA EM FORMA DE CIRCULO*/
        height: "100px", /*DEIXA EM FORMA DE CIRCULO*/
        borderRadius: "100%", /*DEIXA EM FORMA DE CIRCULO*/
        background: "Black",
        color: "white",
        border: "1px solid white",
        }}>
          <img src={Botao} alt = "BOTAO" style = {{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}>
            </img></button>
      <button onClick = {() => {
        if(cliques + 1 >= 11 && !Cooldown) {
          setCliques(c => c + 10 * Multiplicador);
          if(cliques >= 490 && !ACDESBLOQUEADO) {
            setHTMLAC("AutoClicker");
          }
          setCooldown(true);
          esperar()
        } else if (cliques < 10) {
          setPoder("Min 10 cliques")
          setTimeout(() => {
            setPoder("???")
          }, 300);
          }
        }
        }
      style = {{
        width: "100px",
        height:"40px",
        background: "black",
        color: "white",
        border: "1px solid white",
        }}>
        <b>{PoderNavegador}</b></button>
               {Cooldown && (<span style={{color:"red",left:"1025px",top: "200px",position: "absolute",zIndex:999}}>
    {TimerNavegador}s
  </span>
        )}
        <button onClick ={() => {
          if(Renascer == "Renascer") {
             const confirmar = confirm("Voce perdera tudo mas seu multiplicador dobrara");
           if (confirmar) {
            setCliques(0);
            setPoder("???");
            SetRenascer("???");
            SetPrecoRenascer(PrecoRenascer * 2);
            SetMultplicador(Multiplicador * 2);
            if(cliques <= 9) {
              setPoder("???");
            }
           }
          } else {
            SetRenascer(`Min ${PrecoRenascer} cliques`)
            setTimeout(() => {
              SetRenascer("???")
            }, 300);
          }
        }} style = {{ 
        width: "100px",
        height: "40px", 
        background: "black", 
        color: "white",
        border: "1px solid white",
        }}>
          <b>{Renascer}</b>
        </button>
        <button onClick={() =>
        { if(cliques >= 500 && !ACDESBLOQUEADO) {
          const confirmar = confirm("Voce quer gastar 500 cliques pelo AutoClicker?");
          if(confirmar) {
            setCliques(c => c - 500);
            setACDESBLOQUEADO(true);
            setHTMLAC("AutoClicker");
          }
        } 
          LigarAutoClicker(valor => {
            if (AutoClicker) {
            setTextoAC("OFF");
            setCorAC("red");
              LigarAutoClicker(false);
              setHTMLAC("AutoClicker");
              clearInterval(intervaloac.current);
              intervaloac.current = null;
              return false;
          } else if (ACDESBLOQUEADO === true || HTMLAC == "AutoClicker"){
            setTextoAC("ON");
            setCorAC("green")
            setHTMLAC("AutoClicker");
            if(cliques <= 9) {
              setPoder("???")
            } else {
              setPoder("Clique:10X")
            }
            if(intervaloac.current === null) {
              intervaloac.current = setInterval(() => {
      setCliques(c => c + 1 * Multiplicador);
              }, 250);
    LigarAutoClicker(true);
    if(cliques <= 9) {
      setPoder("???")
    } else {
      setPoder("Clique:10X");
    }
    return true;
              }
            } else if (!ACDESBLOQUEADO && cliques < 500) {
              setHTMLAC("Min 500 cliques")
              setTimeout(() => {
                setHTMLAC("???");
              }, 300);
            }
          });
        }}
       style = {{
        width: "100px",
        height: "40px", 
        background: "black", 
        color: "white",
        border: "1px solid white",
        }}><b>{HTMLAC}</b></button>
        {1 && (<span style={{color:CorAC,left:"1025px",top: "290px",position: "absolute",zIndex:999}}
        >{TextoAC}</span>
        )}
        </div>
        <div style ={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        </div>
        <p style = {{
          position: "fixed",
          top: "-10px",
          right: "20px",
          color: "white",
          fontSize: "30px",
        }}>
          <b>Multiplicador: {Multiplicador}</b></p>

    </>
    </div>
  )
}
export default Botao;