function Wel(props) {
  return React.createElement(
    "h5",
    null,
    "Hello, ",
    props.name
  );
}

function Nam() {
  return React.createElement(
    "div",
    null,
    React.createElement(Wel, { name: "jane" }),
    React.createElement(Wel, { name: "dave" })
  );
}

var doc = document.getElementById('hell');
ReactDOM.render(React.createElement(Nam, null), doc);