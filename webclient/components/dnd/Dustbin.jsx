import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import List from './List.jsx';
import Card from './card';
import Reorder from './reorder.jsx';

const style = {
  height: '500px',
  width: '100%',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  backgroundColor:'lightblue'
};

const boxTarget = {
  drop() {
    return { name: 'Dustbin' };
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

const propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
};


class Dustbin extends Component {

  changeCard(cards)
  {
    this.props.changeCard(cards);
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div style={{ ...style}}>
        {isActive ?
          'Release to drop' :
          'Drag a box here'}
          <Reorder allCards={this.props.allCards} changeCard={this.changeCard.bind(this)}/>
  </div>,
    );
  }
}

export default DropTarget(ItemTypes.BOX, boxTarget, collect)(Dustbin);
