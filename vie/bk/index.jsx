//var React = require('react');
import React,{Component} from "react"
import Button from 'react-bootstrap/Button';
var Lay=require("./lay/def")
const E=React.createElement
    
const gId=(id)=>document.getElementById(id)

const Week1=()=>{
const pre= ["tom","bob","sam"];

var stPre=E("ul",{},
pre.map(nam=>E("li",{key:nam},nam)
)
)
//const mydiv=<div className="bg-mis p-2" >{stPre}</div>
const mydiv=E("div",{className:"bg-mis p-2"},stPre)
return mydiv
}//week

class Hell extends React.Component {

render() {
return <Lay>          
<div className="p-2 text-center bg-ali">
{this.props.title}
</div>

{Week1()}
</Lay>
      
}// rend
}// hell

//module.exports = Hell;
export default Hell
