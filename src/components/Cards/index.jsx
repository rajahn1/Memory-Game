import './style.css';
import backcardImage from '../../assets/card-back.png';
function Card({ card, stateCards, setStateCards, id, prev, setPrev  } ) {

  function check(current) {
    let localCards = [...stateCards];

    if (localCards[current].slug == localCards[prev].slug && localCards[current].position !== localCards[prev].position) {
        setStateCards(localCards);
        setPrev(-1);
        setTimeout(() => {
          localCards = localCards.filter((card) => {
            return card.slug !== localCards[current].slug;
          })
          setStateCards(localCards);
        },500)

    } else {
      setStateCards(localCards);
      setTimeout(()=> {
        localCards[current].turned = false;
        localCards[prev].turned = false;
        setStateCards(localCards);
        setPrev(-1);
      }, 500)
    }
  }
  
  function handleClick(cardId) {
    let localCards = [...stateCards];

    const turnedCards = localCards.filter((card)=> {
      return card.turned === true;
    });
    if (turnedCards.length === 2) return;

    if (prev === -1) {
      localCards[cardId].turned = true;
      setStateCards(localCards);
      setPrev(cardId);

    } else {
      localCards[cardId].turned = true;
      check(cardId)
    }
    
  }
  
  return (  
      <div>
        <img 
        className='card'
        src={`${card.turned ? card.image : backcardImage}`}
        alt='card'
        onClick={() => handleClick(id)}
        />

      </div>
  );
}

export default Card;
