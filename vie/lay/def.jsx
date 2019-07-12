var React = require('react');

class Lay extends React.Component {
render() {
return (
<html>
<head>
<link rel="stylesheet" href="/css/boot.css" />
<link rel="stylesheet" href="/css/bas.css" />
<title>{this.props.title}</title></head>
<body id="bod">
    <div className="container-fluid">
    <div className="row">
    <div className="col bg-bei m-2 p-3">
{this.props.children}
</div></div></div>
</body>
</html>
);
}
}

module.exports = Lay;
