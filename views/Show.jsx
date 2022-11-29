const React = require('react')
const DefaultLayOut = require("./layout/Default")
class Show extends React.Component {
    render() {
        // const fruit = this.props.fruit
        //if u use above variable then use (fruit.name) and fruit.color in line 11
        const {name, color, readyToEat} = this.props.fruit
        //props is the main thing in react 
        return (
            <DefaultLayOut title={`${name} Show Page`}>
              <h1>Show Page</h1>
      
              <div>
                <p>The {name} is {color}.</p>
                {readyToEat? "It is ready to eat!" : "It is not ready to eat... dont touch that"}
              </div> 
            </DefaultLayOut>
          )
        }
      }
      // We can write javascript code within the curly brackets
      
      module.exports = Show