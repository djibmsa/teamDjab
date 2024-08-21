/*function Snoop(props) {
    return `Whats my name ${props.name} nigger ${props.nickname} age ${props.age}!`;
  }
  
 
function Snoop(props) {
  const {name, nickname, age} = props
    return `Whats my name ${props.name} nigger ${props.nickname} age ${props.age}!`;
  }
  */
  
//le mieux est d'utiliser cette façon de faire plus lisible 
  
function Snoop({name, nickname, age}) {
    return `Whats my name ${name} nigger ${nickname} age ${age}!`;
  }
  
  export default Snoop;