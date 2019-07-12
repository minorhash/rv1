var React = require('react');
var Lay=require("./lay/def")
require("../public/css/boot.css")

class Err extends React.Component {
render() {
return (
<Lay title={this.props.title}>          
<div className="container-fluid">
err
</div>
</Lay>
      
);
}
}

module.exports = Err;
