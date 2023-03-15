import React from 'react';
import './pokemonLists.css';

function PokemonCard({keyValue, id, image, name, type, pokemonData, detail, modalShow}) {
    const style = type + " cardContainer";

    const handleClick = () => {
        detail(pokemonData,name);
        modalShow(true);
    }
  return (
    <div className={style} key={keyValue} onClick={()=> handleClick()}>
        <div className='number'><small className='smallNumber'> #0{id} </small></div>
        <img src={image} alt={name}/>
        <div className='detailWrapper'>
            <h4> {name} </h4>
            <small> Type: {type} </small>
        </div> 
    </div>
  )
}

export default PokemonCard
