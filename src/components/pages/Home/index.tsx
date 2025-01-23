
import { Button } from '../../Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import "./style.css";



export default function Home() {
 

  return (
    <div id="page_1">
      

      <div>
        <h2>Bem-Vindo ao</h2>
        <h1>Explorando o cosmos</h1>
        <div id="login">
        <Link to="/story" className="link-sem-sublinhado">
          <Button Icon={ArrowRight} style={{ backgroundColor: '#3b0764', border: '2px solid #93c5fd' }}>Ver Story</Button>
        </Link>
         
        </div>
      </div>

     
      <div className="cosmos-background"></div>
      <div className="stars"></div>

    </div>
  );
}
