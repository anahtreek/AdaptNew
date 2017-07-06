import React, {Component} from 'react';
import {DragDropContextProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import {Grid} from 'semantic-ui-react';

export default class Container extends Component {
  constructor() {
        super();
        // this.addCard = this.addCard.bind(this);
        this.state = {
            allCards: []
        };
    }

addCard(id, name) {
  console.log('hiiiiiiiiii');
  // console.log(id + " " + name );
  var cardArray = this.state.allCards;
  cardArray.push({id:id,name:name});
  this.setState({
    allCards: cardArray
  });
  console.log(this.state.allCards);
}

changeCard(cards){
  this.setState({
    allCards: cards
  });
}

  render() {


    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div style={{height:'1000px'}}>
          <Grid celled>
            <Grid.Column width={3}>
              <div style={{
                overflow: 'hidden',

                clear: 'both'
              }}>
                <Box id={1} name="Glass" addCard={this.addCard.bind(this)} changeCard={this.changeCard.bind(this)}}/>
                <Box id={2} name="Banana" addCard={this.addCard.bind(this)} changeCard={this.changeCard.bind(this)}/>
                <Box id={3} name="Paper" addCard={this.addCard.bind(this)} changeCard={this.changeCard.bind(this)}/>
              </div>
            </Grid.Column>
            <Grid.Column width={11}>
              <div style={{
                overflow: 'hidden',
                clear: 'both'
              }}>
                <Dustbin allCards={this.state.allCards}/>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </DragDropContextProvider>
    );
  }
}
