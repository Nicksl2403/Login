  import { useState, useEffect } from 'react'
  import { Link } from 'react-router-dom';
  import "../CSS/indexVelha.css"
  function Velha() {
    const [c1, setC1] = useState("");
    const [c2, setC2] = useState("");
    const [c3, setC3] = useState("");
    const [c4, setC4] = useState("");
    const [c5, setC5] = useState("");
    const [c6, setC6] = useState("");
    const [c7, setC7] = useState("");
    const [c8, setC8] = useState("");
    const [c9, setC9] = useState("");
    const [shake, setShake] = useState(false);
    const [Escolha, SetEscolha] = useState([]);
    const [nomeInput, setNomeInput] = useState("");
    const [nomeReal, setNomeReal] = useState("");
    const [Cliques, SetCliques] = useState(1);
    const [nome2Input, setNome2Input] = useState("");
    const [nomeReal2, setNomeReal2] = useState("");
    const [Jogo,setJogo] = useState(true);
    useEffect(() => {
      if(!Jogo) {
        return;
      }
      {(c1 === Escolha[0] && c2 === Escolha[0] && c3 === Escolha[0]) || (c1 === Escolha[0] && c5 === Escolha[0] && c9 === Escolha[0]) || (c1  === Escolha[0] && c4  === Escolha[0] && c7  === Escolha[0]) || (c3  === Escolha[0] && c6  === Escolha[0] && c9  === Escolha[0]) || (c7 === Escolha[0] && c8 === Escolha[0] && c9 === Escolha[0]) || (c2 === Escolha[0] && c5 === Escolha[0] && c8 === Escolha[0]) || (c3 === Escolha[0] && c5 === Escolha[0] && c7 === Escolha[0]) || (c4 === Escolha[0] && c5 === Escolha[0] && c6 === Escolha[0]) ? 
      setTimeout(() => {
          alert((`${nomeReal} Venceu e ${nomeReal2} Perdeu`),setJogo(false));
        }, 100) : (c1 === Escolha[1] && c2 === Escolha[1] && c3 === Escolha[1]) || (c1 === Escolha[1] && c5 === Escolha[1] && c9 === Escolha[1]) || (c1  === Escolha[1] && c4  === Escolha[1] && c7  === Escolha[1]) || (c3  === Escolha[1] && c6  === Escolha[1] && c9  === Escolha[1]) || (c7 === Escolha[1] && c8 === Escolha[1] && c9 === Escolha[1]) || (c2 === Escolha[1] && c5 === Escolha[1] && c8 === Escolha[1]) || (c3 === Escolha[1] && c5 === Escolha[1] && c7 === Escolha[1]) || (c4 === Escolha[1] && c5 === Escolha[1] && c6 === Escolha[1]) ? 
        setTimeout(() => {
          alert((`${nomeReal2} Venceu e ${nomeReal} Perdeu`),setJogo(false))
        }, 100) : c1 != "" && c2 != "" && c3 != "" && c4 != "" && c5 != "" && c6 != "" && c7 != "" && c8 != "" && c9 != "" &&
          setTimeout(() => {
          alert((`Velha`));
          setJogo(false);
          setShake(true); 
        }, 100);}
    }, [c1,c2,c3,c4,c5,c6,c7,c8,c9]);
    function reiniciarJogo() {
    setC1(""); setC2(""); setC3("");
    setC4(""); setC5(""); setC6("");
    setC7(""); setC8(""); setC9("");
    SetCliques(1);
    setShake(false);
    setJogo(true);
  }
    return (
      <>
      <Link to="/Painel">
      <button style={{
        backgroundColor: "red",
        width: "100px",
        height: "30px",
        border: "2px solid black"
      }}><b>Voltar</b></button>
      </Link>
      {(!Escolha.includes("X") && !Escolha.includes("O")) && (
          <>
      <div style = {{
        color: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <p><b>Quem Começa?</b></p>
      </div>
      <div style = {{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        gap: "3px"
      }}>
      <button onClick={() => SetEscolha(["❌","🔵"])}
      style = {{
        width: "50px",
        height: "50px",
        fontSize: "30px",
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
      }}>❌</button>
      <button onClick={() => SetEscolha(["🔵","❌"])} 
      style = {{
        width: "50px",
        height: "50px",
        fontSize: "32px",
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
      }}>🔵</button>
      </div>
      </>
      )}
        {((Escolha.includes("❌") || Escolha.includes("🔵")) && nomeReal ==  "") && (
          <>
          <div style = {{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
            >
            <input style ={{
              marginTop: "100px",
              width: "200px",
              height: "30px"
            }}
              type="text" placeholder="Digite seu nome jogador 1" value={nomeInput} onChange={(event) => setNomeInput(event.target.value)}></input>
            <button style ={{
              marginTop: "0px",
              width: "210px",
              height: "36px",
              background: "white",
            }}
              onClick ={() => setNomeReal(nomeInput)}>Confirmar</button>
            </div>
          </>)}
          {((Escolha.includes("❌") || Escolha.includes("🔵")) && nomeReal2 ==  "" && nomeReal != "") && (
          <>
          <div style = {{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection:"column",
          }}
            >
            <input style ={{
              marginTop: "100px",
              width: "200px",
              height: "30px"
            }}
            type="text" placeholder="Digite seu nome jogador 2" value={nome2Input} onChange={(event) => setNome2Input(event.target.value)}></input>
            <button style ={{
              marginTop: "0px",
              width: "210px",
              height: "36px",
              background: "white"
            }} 
            onClick ={() => setNomeReal2(nome2Input)}>Confirmar</button>
            </div>
          </>)}
            {(nomeReal != "" && nomeReal2 != "") && (
              <>
              <div style = {{
                display: "grid",
              gridTemplateColumns: "repeat(3, 100px)",
              gap: "10px",
              justifyContent: "center",
              alignContent: "center",
              height: "50vh"
              }}>
            <button className={shake ? "shake" : ""} style={{ width: "100px", height: "100px", borderRadius: "10%",fontSize: "50px",display: "flex", justifyContent: "center", alignItems: "center"}} onClick={() => c1 == "" ? Cliques == 1 ? (setC1(Escolha[0]), SetCliques(Cliques + 1)) : Cliques % 2 == 0 ? (setC1(Escolha[1]), SetCliques(Cliques + 1)) : (setC1(Escolha[0]), SetCliques(Cliques + 1)) : ""}>{c1}</button>     
            <button className={shake ? "shake" : ""} style={{ width: "100px", height: "100px", borderRadius: "10%",fontSize: "50px",display: "flex", justifyContent: "center", alignItems: "center"  }} onClick={() => c2 == "" ? Cliques == 1 ? (setC2(Escolha[0]), SetCliques(Cliques + 1)) : Cliques % 2 == 0 ? (setC2(Escolha[1]), SetCliques(Cliques + 1)) : (setC2(Escolha[0]), SetCliques(Cliques + 1)) : ""}>{c2}</button>     
            <button className={shake ? "shake" : ""} style={{ width: "100px", height: "100px", borderRadius: "10%",fontSize: "50px",display: "flex", justifyContent: "center", alignItems: "center"  }} onClick={() => c3 == "" ? Cliques == 1 ? (setC3(Escolha[0]), SetCliques(Cliques + 1)) : Cliques % 2 == 0 ? (setC3(Escolha[1]), SetCliques(Cliques + 1)) : (setC3(Escolha[0]), SetCliques(Cliques + 1)) : ""}>{c3}</button>     
            <button className={shake ? "shake" : ""} style={{ width: "100px", height: "100px", borderRadius: "10%",fontSize: "50px",display: "flex", justifyContent: "center", alignItems: "center"  }} onClick={() => c4 == "" ? Cliques == 1 ? (setC4(Escolha[0]), SetCliques(Cliques + 1)) : Cliques % 2 == 0 ? (setC4(Escolha[1]), SetCliques(Cliques + 1)) : (setC4(Escolha[0]), SetCliques(Cliques + 1)) : ""}>{c4}</button>     
            <button className={shake ? "shake" : ""} style={{ width: "100px", height: "100px", borderRadius: "10%",fontSize: "50px",display: "flex", justifyContent: "center", alignItems: "center"  }} onClick={() => c5 == "" ? Cliques == 1 ? (setC5(Escolha[0]), SetCliques(Cliques + 1)) : Cliques % 2 == 0 ? (setC5(Escolha[1]), SetCliques(Cliques + 1)) : (setC5(Escolha[0]), SetCliques(Cliques + 1)):  ""}>{c5}</button>    
            <button className={shake ? "shake" : ""} style={{ width: "100px", height: "100px", borderRadius: "10%",fontSize: "50px",display: "flex", justifyContent: "center", alignItems: "center"  }} onClick={() => c6 == "" ? Cliques == 1 ? (setC6(Escolha[0]), SetCliques(Cliques + 1)) : Cliques % 2 == 0 ? (setC6(Escolha[1]), SetCliques(Cliques + 1)) : (setC6(Escolha[0]), SetCliques(Cliques + 1)) : ""}>{c6}</button>       
            <button className={shake ? "shake" : ""} style={{ width: "100px", height: "100px", borderRadius: "10%",fontSize: "50px",display: "flex", justifyContent: "center", alignItems: "center"  }} onClick={() => c7 == "" ? Cliques == 1 ? (setC7(Escolha[0]), SetCliques(Cliques + 1)) : Cliques % 2 == 0 ? (setC7(Escolha[1]), SetCliques(Cliques + 1)) : (setC7(Escolha[0]), SetCliques(Cliques + 1)) : ""}>{c7}</button>    
            <button className={shake ? "shake" : ""} style={{ width: "100px", height: "100px", borderRadius: "10%",fontSize: "50px",display: "flex", justifyContent: "center", alignItems: "center"  }} onClick={() => c8 == "" ? Cliques == 1 ? (setC8(Escolha[0]), SetCliques(Cliques + 1)) : Cliques % 2 == 0 ? (setC8(Escolha[1]), SetCliques(Cliques + 1)) : (setC8(Escolha[0]), SetCliques(Cliques + 1)) : ""}>{c8}</button>    
            <button className={shake ? "shake" : ""} style={{ width: "100px", height: "100px", borderRadius: "10%",fontSize: "50px",display: "flex", justifyContent: "center", alignItems: "center"  }} onClick={() => c9 == "" ? Cliques == 1 ? (setC9(Escolha[0]), SetCliques(Cliques + 1)) : Cliques % 2 == 0 ? (setC9(Escolha[1]), SetCliques(Cliques + 1)) : (setC9(Escolha[0]), SetCliques(Cliques + 1)) : ""}>{c9}</button>    
              
            </div>
        </>
            )}
            {(Jogo === false) && (
              <>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent:"center",
              }}>
            <button onClick={() => {
            reiniciarJogo();
            }} style ={{
              background: "red",
              color: "blac",
              width: "100px",
              height: "100px",
              borderRadius: "100%"
            }}
              >Reininicar</button> 
            </div>
            </>
            )}
        </>
    )
  }
  export default Velha
