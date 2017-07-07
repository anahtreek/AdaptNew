import React, {Component} from 'react';
import {DragDropContextProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import {Grid} from 'semantic-ui-react';
import {Scrollbars} from 'react-custom-scrollbars';

export default class Container extends Component {
  constructor() {
        super();
        this.state = {
            allCards: [],
            status:''
        };
    }

addCard(id, name) {
  var cardArray = this.state.allCards;
  cardArray.push({id:id,name:name});
  this.setState({
    allCards: cardArray
  });
  var stat="";
  cardArray.map((item, index) => {
    stat += item.id;
  })
  this.setState({status:stat})
  console.log('status'+this.state.status);
}

changeCard(cards){
  this.setState({
    allCards: cards
  });
  var stat="";
  this.state.allCards.map((item, index) => {
    stat += item.id;
  })
  this.setState({status:stat})
  console.log('status'+this.state.status);
}

  render() {


    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <Grid celled style={{height:'60%'}}>
            <Grid.Column width={4}>
              <div>
                <Box id={1} name="Glass" addCard={this.addCard.bind(this)}/>
                <Box id={2} name="Banana" addCard={this.addCard.bind(this)}/>
                <Box id={3} name="Paper" addCard={this.addCard.bind(this)}/>
              </div>
            </Grid.Column>
            <Grid.Column width={11}>
              <div>
                <Scrollbars renderTrackHorizontal={props => <div {...props} className="track-horizontal"
                style={{
                  display: 'none',
                  position: 'right'
              }}/>} autoHeight autoHeightMin={400}>
                <Dustbin allCards={this.state.allCards} changeCard={this.changeCard.bind(this)} style={{height:'500px'}}/>
              </Scrollbars>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </DragDropContextProvider>
    );
  }
}
