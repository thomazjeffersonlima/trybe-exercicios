import React from 'react';

const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

class Lista extends React.Component {
    render() {
        return Task('teste')
    }
}
export default Lista;