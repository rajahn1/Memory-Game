import './style.css';
import Logo from '../../assets/logo.svg';

function Sidebar({ setStateCards, cards }) {
    function handleReset(){
        cards.map((card)=> {
            return card.turned = false;
        })
        setStateCards(cards);
    }

    return (
        <div className='sidebar'>
            <img src={Logo} alt='' />

            <button 
            className='reset-btn'
            onClick={() => handleReset()}
            > 
            RESET
            </button>
        </div>
    )
}

export default Sidebar;
