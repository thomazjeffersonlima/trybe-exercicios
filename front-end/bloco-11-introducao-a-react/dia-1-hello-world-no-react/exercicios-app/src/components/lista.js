import React from 'react';

const Task = () => {
    const compromissos = ['um', 'dois', 'tres', 'quatro']
    return (
      compromissos.map((compromisso) => <li>{compromisso}</li>)
    );
  }

class Lista extends React.Component {
    render() {
        return Task()
    }
}

export default Lista;
