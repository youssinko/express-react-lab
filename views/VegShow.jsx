const React = require('react')
class VegShow extends React.Component {
    render() {
        // const fruit = this.props.fruit
        //if u use above variable then use (fruit.name) and fruit.color in line 11
        const {name, color, readyToEat} = this.props
        //props is the main thing in react 
        return (
            <div>
              <h1>Show Page</h1>
      
              <div>
                <p>The {name} is {color}.</p>
                {readyToEat? "It is ready to eat!" : "It is not ready to eat... dont touch that"}
              </div> 
            </div>
          )
        }
      }
      // We can write javascript code within the curly brackets
      
      module.exports = VegShow