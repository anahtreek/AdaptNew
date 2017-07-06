import React from 'react';
import { Card } from 'semantic-ui-react';

class MyCard extends React.Component {
  render() {
      const { name } = this.props;
return (
  <div style={{padding:'10px'}}>
    <Card>
      <Card.Content>
        { name }
      </Card.Content>
    </Card>
</div>
  );
}
}
module.exports = MyCard;
