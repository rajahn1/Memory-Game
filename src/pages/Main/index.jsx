import './style.css';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Cards';
import cards from '../../cards';
import { useState } from 'react';
import congratsImage from '../../assets/congrats.png';

function Main() {
  const [stateCards, setStateCards] = useState([...cards].sort(() => Math.random() - 0.5));
  const [prev, setPrev] = useState(-1);
  return (
    <div className='container'>
      <Sidebar
      cards={cards}
      setStateCards={setStateCards}
       
      />
      <div className='container-main'>
        <div
        style={{'justifyContent' : `${stateCards.length ? 'flex-start' : 'center'}`}}
        className='container-cards'>

          {stateCards.length? stateCards.map((card, index)=>(
            <Card
            className='img-card'
            key={index}
            card={card}
            id={index}
            stateCards={stateCards}
            setStateCards={setStateCards}
            prev={prev}
            setPrev={setPrev}
            />
        ))
      :
      <img src={congratsImage} alt="congrats"/>
      }
        </div>
      </div>
    </div>
  )
}

export default Main;
