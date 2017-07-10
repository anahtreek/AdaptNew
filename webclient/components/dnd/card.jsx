import React from 'react';
import {Card, Icon, Button} from 'semantic-ui-react';

class MyCard extends React.Component {
  constructor() {
    super();
    // this.remove = this.remove.bind(this);
  }
  abc(){
      // console.log(this.props.abc);
      this.props.callpar();
    }
  render() {
    const {name} = this.props;
    var icon = '';
    if (this.props.place == 'right') {
      icon = <Button basic color='red' size='mini' style={{float:'right',border:'white',padding:'5px'}} onClick={this.abc.bind(this)}>X</Button>
    }

    return (
      <div style={{
        padding: '10px'
      }}>
        <Card style={{
          margin: 'auto'
        }}>
          <Card.Content>
            {name}
            {icon}
          </Card.Content>
        </Card>
      </div>
    );
  }
}
module.exports = MyCard;
