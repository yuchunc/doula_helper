var React = require("react");
var HelloMessage = React.createClass({
  render: function() {
    return <div>error page {this.props.name}</div>;
  }
});

module.exports = HelloMessage;