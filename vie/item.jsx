var React = require('react');
var Lay=require("./lay/def")

const crNum=()=>{
const nums= [303, 304, 305, 306];
const ls=nums.map((nr) =><span>{nr}</span>
);

const thr=<span ><a href="">{nums[2]}</a></span>

return <div>{nums[0]}  {nums[1]} {thr}</div>
}


class Ite extends React.Component {

render() {
return <Lay >          
{this.props.title}
{this.props.par}
</Lay>
      
}
}

module.exports = Ite;
