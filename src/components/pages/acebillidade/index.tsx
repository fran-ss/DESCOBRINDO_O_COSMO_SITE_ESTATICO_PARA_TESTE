import { Button } from "../../Button";
import { ArrowLeft, ListChecks } from "lucide-react";
import "./style.css";
import { Link } from 'react-router-dom';

export function Acessivel() {
  return (
    <div id="acessivel">
      <div id="btnacessivel">
        <div>
          <h2 id="h2acessivel">Selecione a opção que melhor se adequa a você:</h2>
        </div>

        <div id="botoes">
          <Link to="/assuntos-baixa-visao" className="link-sem-sublinhado">
            <button className="acessivelbotton">Baixa Visão</button>
          </Link>
          <Link to="/assuntos-daltonismo" className="link-sem-sublinhado">
            <button className="acessivelbotton">Daltonismo</button>
          </Link>
          <Link to="/assuntos" className="link-sem-sublinhado">
            <button className="acessivelbotton">Sem Acessibilidade</button>
          </Link>
        </div>
      </div>

      <div id="voltar-home">
        <Link to="/">
          <Button Icon={ArrowLeft} style={{ backgroundColor: '#3b0764', border: '2px solid #93c5fd' }} />
        </Link>
        <div id="story">

        <p style={{color:'#ffff', marginTop:'-6rem', fontSize: '24px'}}>Quiz</p>
        <Link to="/quiz" className="link-sem-sublinhado">
          <Button Icon={ListChecks} style={{ backgroundColor: '#3b0764', border: '2px solid #93c5fd',  marginTop:'-3.5rem'}}>Ver Quiz</Button>
        </Link>
        </div>
        
      </div>
    </div>
  );
}
