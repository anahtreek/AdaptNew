import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Card from './card';

const SortableItem = SortableElement(({value}) => <Card name={value}/>);

const SortableList = SortableContainer(({items}) => {
  return (
    <div>
      {items.map((value, index) => (<SortableItem key={`item-${index}`} index={index} value={value.name}/>))}
    </div>
  );
});

export default class SortableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.allCards,
      status: ""
    };
    // this.changeStatus = this.changeStatus.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  // changeStatus() {
  //   var stat = "";
  //   this.state.items.map((item, index) => {
  //     stat += item.id;
  //   })
  //   this.setState({status: stat});
  //   console.log('status', this.state.status);
  // }

  onSortEnd({oldIndex, newIndex}) {

    // console.log('old' + oldIndex + 'new' + newIndex);
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
    // console.log(this.state.items);
    this.props.changeCard(this.state.items);
    this.setState({
      items: this.props.allCards
    })
    // this.changeStatus();
  };
  render() {
    // console.log("reorder",this.props.allCards);
    return <SortableList items={this.props.allCards} onSortEnd={this.onSortEnd}/>;
  }
}
