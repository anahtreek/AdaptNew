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
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
    this.props.changeCard(this.state.items);
    this.setState({items: this.props.allCards})
  };
  render() {
    return <SortableList items={this.props.allCards} onSortEnd={this.onSortEnd}/>;
  }
}
