import React from 'react';
import data from './data';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {
  render() {
    return (
      <div className="card-pokedex">
        {
          data.map((element) => {
            return (
            <Pokemon especie={element}/>
            )
          })
        }
      </div>
    )
  }
}

export default Pokedex;