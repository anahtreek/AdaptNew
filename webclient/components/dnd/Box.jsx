import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Card from './card.jsx';

const style = {
  border: '1px dashed black',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

const boxSource = {
  beginDrag(props) {
    return {
      id: props.id,
      name: props.name,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      // console.log(item.id+"...."+item.name);
      // window.alert( // eslint-disable-line no-alert
      //   `You dropped ${item.name} into ${dropResult.name}!`,
      // );

      props.addCard(item.id,item.name);

//       this.setState({
//         status:stat
//       })
//       console.log(this.state.status);
    }
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  // addCard: PropTypes.func.isRequired,
};

class Box extends Component {

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;

    return (
      connectDragSource(
        <div>
          <Card name={name}/>
        </div>
        // <div style={{ ...style}}>
        //   {name}
        // </div>,
      )
    );
  }
}

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);
