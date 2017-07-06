import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import List from './List.jsx';
import Card from './card';
import Reorder from './reorder.jsx';
// import ReactReorderable from 'react-reorderable';

const style = {
  height: '1000px',
  width: '1000px',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  // border: '1px dashed black',
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

changeCard()
{
  this.props.changeCard(cards);
}

class Dustbin extends Component {

  render() {
    console.log("dustbin...",this.props.allCards);
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      // <div>
      // <ReactReorderable>
      <div style={{ ...style}}>
        {isActive ?
          'Release to drop' :
          'Drag a box here'}
          <Reorder allCards={this.props.allCards} changeCard={this.changeCard.bind(this)}/>

          {/* // {this.props.allCards.length > 0?
          //   this.props.allCards.map((item, index) => (<Card name={item.name}/>))
          //           : null} */}
        {/* <List allCards={this.props.allCards}/> */}
      {/* </div>
    </ReactReorderable> */}
  </div>,
    );
  }
}

export default DropTarget(ItemTypes.BOX, boxTarget, collect)(Dustbin);
