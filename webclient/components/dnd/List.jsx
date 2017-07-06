import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DndCard from 'react-dnd-card';
import { Item, createItem } from './Item';
import {Grid} from 'semantic-ui-react';

class List extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      items: this.props.allCards
      // items:[]
        // {
      //   id: 1,
      //   text: 'Write a cool JS library'
      // }, {
      //   id: 2,
      //   text: 'Make it generic enough'
      // }, {
      //   id: 3,
      //   text: 'Write README'
      // }, {
      //   id: 4,
      //   text: 'Create some examples'
      // }, {
      //   id: 5,
      //   text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
      // }, {
      //   id: 6,
      //   text: '???'
      // }, {
      //   id: 7,
      //   text: 'PROFIT'
      // }]
    };
  }

  moveCard(dragIndex, hoverIndex) {
    const { items } = this.state;
    const dragItem = items[dragIndex];

    this.setState(update(this.state, {
      items: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragItem]
        ]
      }
    }));
  }

  render() {
    console.log("###");
    console.log(this.props.allCards);
    console.log("@@@");
    // const { items } = this.state;



    return (
      <div>
      {this.state.items.length > 0
        ?
        this.state.items.map((item, index) => (
          <DndCard
            key={item.id}
            index={index}
            source={item}
            createItem={createItem}
            moveCard={this.moveCard}
            style={{ marginBottom: '.5em' }}
          />
        )):null}
</div>
    );
  }
}


export default DragDropContext(HTML5Backend)(List);
