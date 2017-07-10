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
        this.updateStatus = this.updateStatus.bind(this);
    }

addCard(id, name) {
  var cardArray = this.state.allCards;
  cardArray.push({id:id,name:name});
  this.setState({
    allCards: cardArray
  });
  var stat="";
  cardArray.map((item, index) => {
    stat += '-'+item.id;
  });
  this.updateStatus(stat);
}

updateStatus(stat){
  this.setState({status:stat})
  console.log('status'+this.state.status);
  let data = {
              userId: "351928",
              scenarioId: "1",
              status: this.state.status
  };
  // $.ajax({
  //       url: '/dnd/updateStatus',
  //       type: 'POST',
  //       data: data,
  //       success: function() {
  //         console.log("Status posted successfully");
  //       },
  //       error: function(err) {
  //         console.log("Error occured", err);
  //       }
  // });
}

changeCard(cards){
  this.setState({
    allCards: cards
  });
  var stat="";
  this.state.allCards.map((item, index) => {
    stat += '-'+item.id;
  });
  this.updateStatus(stat);
}

  render() {


    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <Grid celled style={{height:'60%'}}>
            <Grid.Column width={4}>
              <div>
                <Box id={1} name="Glass" addCard={this.addCard.bind(this)} place='left'/>
                <Box id={2} name="Banana" addCard={this.addCard.bind(this)} place='left'/>
                <Box id={3} name="Paper" addCard={this.addCard.bind(this)} place='left'/>
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
