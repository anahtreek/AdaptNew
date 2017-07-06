import React from 'react';
import ReactReorderable from 'react-reorderable';
import Card from './card';

function addRow(data) {
  var el = document.getElementById('events');
  el.innerHTML += '<br>' + data;
}

function getLabel(node) {
  return node.props.children[1].props.children
}
export default class Reorder extends React.Component {
  render() {
    return (
      React.createElement(ReactReorderable, {
      handle: '.draggable-handle',
      mode: 'grid',
      onDragStart: function(data) {
        addRow('Drag start: ' + getLabel(data.props.children));
      },
      onDrop: function(data) {
        addRow('Drop: ' + data.map(getLabel).join(', '));
      },
      onChange: function(data) {
        addRow('Change: ' + data.map(getLabel).join(', '));
      }
    },
      this.props.allCards.map((item, index) => (
          <div className='draggable-handle'>
            <Card name={item.name}/>
          </div>
        ))


    ))}
}
