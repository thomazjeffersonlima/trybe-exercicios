import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { especie: { name, type, image, averageWeight: { value, measurementUnit } } } = this.props;
    return (
      <div className="card-pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{value} {measurementUnit}</p>
        </div>
        <div>
          <img src={image}/>
        </div>
       
      </div>
    )
  }
}

export default Pokemon;