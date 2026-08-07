  import { useState, useEffect, useRef } from 'react'
  import { Link } from 'react-router-dom';
  import '../CSS/indexCalculadora.css';
  function Calculadora() {
    const botoes = ["Backspace","c","C","Enter","+","-","/","*","X","x","1","2","3","4","5","6","7","8","9","0",".",","]
    const sinais = ["+","-","/","*"];
    const [conta, setConta] = useState("");
    const [display, setDisplay] = useState("");
    const [nivel, setNivel] = useState(1);
    const [jogo, setJogo] = useState(false);
    const [displayJogo, setDisplayJogo] = useState("");
    const [nome, setNome] = useState("Jogo") 
    const [n1, setN1] = useState(Math.floor(Math.random() * 9) + nivel);
    const [n2, setN2] = useState(Math.floor(Math.random() * 9) + nivel);
    const [index, setIndex] = useState(Math.floor(Math.random() * 4));
    const [resposta, setResposta] = useState("");
    const [timer, setTimer] = useState("");
    const [cooldown, setCooldown] = useState(true);
    const resultadoRef = useRef(0);
    const intervaloRef = useRef(null);
    let resultado = 0;
    switch(index) {
    case 0:
    resultado = n1 + n2;
    break;
    case 1:
    resultado = n1 - n2;
    break;
    case 2:
    resultado = n1 / n2;
    break;
    case 3:
    resultado = n1 * n2;
    break;
}
resultadoRef.current = index === 2 ? Number(resultado.toFixed(2)) : resultado;
function esperar () {
   if(intervaloRef.current){
    clearInterval(intervaloRef.current);
  }
    let tempo = 20; // TEMPO QUE QUER ESPERE
  setTimer(20); // TEMPO DO TIMER, TEM QUE SER IGUAL AO TEMPO DE CIMA PARA FICA BONITO NO SITE
  intervaloRef.current = setInterval(() => { // CRIA UM INTERVALO DE REUTILIZAR UM CODIGO APOS 1000 MS
    tempo--; // DECREMENTA O TEMPO
    setTimer(tempo); //ATUALIZA O VALOR DO TEMPO NO SITE

    if (tempo == 0) { // SAIDA CASO O COOLDOWN ACABE
      clearInterval(intervaloRef.current); 
      let confirmar = confirm(`Voce perdeu o resultado era: ${resultadoRef.current} quer jogar denovo`);
      if(confirmar) {
        tempo = 5;
        setN1(Math.floor(Math.random() * 9) + 1);
        setN2(Math.floor(Math.random() * 9) + 1);
        setIndex(Math.floor(Math.random() * 4));
        setNivel(1);
        setResposta("");
        esperar();
      } else {
        setJogo(false);
      }
    }
  }, 1000);
}
useEffect(() => {
  if(jogo) {
  esperar();
  }
    return () => {
    if(intervaloRef.current){
      clearInterval(intervaloRef.current);
    }
  }
}, [jogo])

      useEffect(() => {
      function teclaApertada(evento) {
      if(botoes.includes(evento.key)) {
        if(!jogo &&(evento.key == "X" || evento.key == "x")) {
          setConta(prev => prev + "*");
          setDisplay(prev => prev + "X");
        } else if (!jogo && evento.key === "Enter") {
          evento.preventDefault();
          setConta(prev => {
          try {
          const resultado = String(eval(prev));
          setDisplay(resultado);
          return resultado;
          } catch {
            setDisplay("ERRO");
            return prev;
          }
        });
        } else if (!jogo && evento.key === ",") {
          setDisplay(prev => prev + ",");
          setConta(prev => prev + ".");
        } else if (!jogo && (evento.key == "C" || evento.key == "c")) {
          setDisplay(""); 
          setConta("");
        } else if(!jogo && evento.key === "Backspace") {
          setConta(prev => prev.slice(0, -1));
          setDisplay(prev => prev.slice(0, -1));
        } else if(!jogo && evento.key === "+") {
          setConta(prev => prev + "+");
          setDisplay(prev => prev + "+")
        } else if (!jogo && evento.key === "-"){
          setConta(prev => prev + "-");
          setDisplay(prev => prev + "-")
        } else if (!jogo && evento.key === "/") {
          setConta(prev => prev + "/");
          setDisplay(prev => prev + "÷") 
        } else if (!jogo && botoes.includes(evento.key)) {
          setConta(prev => prev + String(evento.key));
          setDisplay(prev => prev + String(evento.key));
        }
      }
  }
    window.addEventListener("keydown", teclaApertada);
      return () => {
      window.removeEventListener("keydown", teclaApertada);
    };
  }, [n1,n2,index,jogo]);
    return (
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
      <>
      <Link to="/Painel">
      {(!jogo) && (
      <button className='btnBotao' style={{
        backgroundColor: "red",
        width: "120px",
        height: "120px",
        borderRadius: "100%",
        border: "2px solid black"
      }}><b>Voltar</b></button>
    )}
      </Link>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        color: "black",
      }}>
        </div>
          {(jogo) && (
          <>
          <div style={{
            display: "flex",
            fontSize: "30px",
            flexDirection: "column",
            color: "red",
            alignItems:"center",
            justifyItems:"center",
            backgroundColor:"black",
          }}>
        <span><b>Nivel:{nivel}</b></span>
        <span><b></b>Tempo:{timer}s</span>
      <div style={{
          fontSize: "35px",
          display: "flex",
          flexDirection:"column",
          alignItems: "center",
          justifyItems: "center",
          color:"blue",
          letterSpacing:"5px",
          width:"200px"
        }}>
        <span style={{width: "1000px",display: "flex", alignItems: "center",flexDirection:"column"}}>{`${n1} ${sinais[index]} ${n2} = ?`}</span>
        <input style ={{
          color:"white",
          background: "black",
          textAlign: "center",


        }} type="text" value={resposta} placeholder="resultado" onChange={(evento) => { const valor = evento.target.value.replace(",",".");  setResposta(valor);
          if(valor.length <= String(resultado).length) {
        if(valor.trim() !== "" && Number(valor).toFixed(2) === Number(resultado).toFixed(2)) {
            setNivel(prev => {
              const novoNivel = prev + 1;
                setN1(Math.floor(Math.random() * 9) + novoNivel);
                setN2(Math.floor(Math.random() * 9) + novoNivel);
                return novoNivel;
          });
          setIndex(Math.floor(Math.random() * 4))
          setResposta("");
          esperar();
        }
      } else {
      let confirmar = confirm(`Voce perdeu o resultado era: ${resultadoRef.current} quer jogar denovo`);
      if(confirmar) {
        setN1(Math.floor(Math.random() * 9) + 1);
        setN2(Math.floor(Math.random() * 9) + 1);
        setIndex(Math.floor(Math.random() * 4));
        setNivel(1);
        setResposta("");
        esperar();
      } else {
        setJogo(false);
      }
      return;
      }
        }}
        ></input>
        </div>
        </div>
        </>
        )}
        {(!jogo) && (
          <>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 100px)",
          justifyContent: "center",
          alignContent: "center",
          gap: "1px",
          marginTop:"50px",
        }}>
              <div style={{
        marginTop: "0px",
        fontSize: "35px",
        background: "black",
        color: "black",
        gridColumn: "1 / span 4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color:"white",
        letterSpacing:"5px"
      }}
        >{display || 0}</div>
        
          <button className='btn' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "7"); setConta(conta + "7")}} style ={{width: "100px",height: "100px",borderRadius:""}}><b>7</b></button>
          <button className='btn' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "8"); setConta(conta + "8")}} style ={{width: "100px",height: "100px",borderRadius:"",}}><b>8</b></button>
          <button className='btn' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "9"); setConta(conta + "9")}} style ={{width: "100px",height: "100px",borderRadius:"",}}><b>9</b></button>
          
          <button className='btnSinal' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "X" ); setConta(conta + "*")}} style ={{width: "100px",height: "100px",borderRadius:"",backgroundColor:"rgb(40, 38, 41)",alignItems:"center",justifyContent:"center"}}>×</button>
          
          <button className='btn' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "4"); setConta(conta +"4")}} style ={{width: "100px",height: "100px",borderRadius:""}}><b>4</b></button>
          <button className='btn' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "5"); setConta(conta + "5")}} style ={{width: "100px",height: "100px",borderRadius:""}}><b>5</b></button> 
          <button className='btn' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "6"); setConta(conta + "6")}} style ={{width: "100px",height: "100px",borderRadius:""}}><b>6</b></button>
          
          <button className='btnSinal' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "-"); setConta(conta + "-")}} style ={{width: "100px",height: "100px",borderRadius:"",backgroundColor:"rgb(40, 38, 41)",alignItems:"center",justifyContent:"center",}}>−</button>
          
          <button className='btn' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "1"); setConta(conta + "1")}} style ={{width: "100px",height: "100px",borderRadius:""}}><b>1</b></button>
          <button className='btn' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "2"); setConta(conta + "2")}} style ={{width: "100px",height: "100px",borderRadius:""}}><b>2</b></button>
          <button className='btn' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "3"); setConta(conta + "3")}} style ={{width: "100px",height: "100px",borderRadius:""}}><b>3</b></button>

          <button className='btnSinal' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "+"); setConta(conta + "+")}} style ={{width: "100px",height: "100px",borderRadius:"",backgroundColor:"rgb(40, 38, 41)",alignItems:"center",justifyContent:"center"}}>+</button>

          <button className='btn' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "0"); setConta(conta + "0")}}style={{width: "100px",height: "100px",borderRadius:"",gridColumn: "2"}}><b>0</b></button>
          
          <button className='btnSinal' onClick ={(e) => {e.currentTarget.blur(); setDisplay(display + "÷"); setConta(conta + "/")}}style={{background: "rgb(40, 38, 41)", width: "100px",height: "100px",borderRadius:"",gridColumn: "3",gridRow: "5", display: "flex", alignItems: "center", justifyContent: "center",lineHeight: "1.5"}}><b>÷</b></button>
          
          <button className='btnSinal' onClick ={(e) => {e.currentTarget.blur(); setDisplay(""); setConta("")}}style={{width: "100px",height: "100px",borderRadius:"",gridColumn: "1",gridRow: "5", display: "flex", alignItems: "center", justifyContent: "center",lineHeight: "1.5",backgroundColor:"rgb(40, 38, 41)"}}><b>𝐂</b></button>

          <button className='btnSinal' onClick ={(e) => {e.currentTarget.blur(); setDisplay(String(eval(conta))); setConta(String(eval(conta)))}}style ={{width: "100px",height: "100px",borderRadius:"",backgroundColor:"rgb(40, 38, 41)"}}><b>=</b></button>
        
        </div>
        </>
        )
    }
    <>
        <div style={{
          alignItems:"center",
          justifyContent:"center",
          display:"flex",
        }}>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          flexDirection: "column",
        }}>
          <button className="btnBotao" style ={{}} onClick={() => { {jogo ? (setNome("Jogo"), setJogo(false)) : (setNome("Contas"), setJogo(true))
            setN1(Math.floor(Math.random() * 9) + 1);
            setN2(Math.floor(Math.random() * 9) + 1);
            setIndex(Math.floor(Math.random() * 4));
            setNivel(1);
            setResposta("");
          }}} style ={{display:"flex", alignItems:"center", justifyContent:"center",borderRadius:"100%",width:"120px",height:"120px",color:"black",background:"blueviolet",border: "2px solid black"}}><b>Modo:{nome}</b></button>
          </div>
        </>
      </>
      </div>
      </div>
    )
  }
    

export default Calculadora;