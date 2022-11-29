const React = require('react')
const DefaultLayOut = require("./layout/Default")

class New extends React.Component {
    render() {
        return (
            <DefaultLayOut title="New Fruit Page">
                <h1>New Fruit Page</h1>
                <nav>
                    <a href="/fruits">Home Page</a>
                </nav>
                <form action="/fruits" method="POST">
                    Name: <input type="text"
                        name='name' />
                    <br />
                    Color : <input type="text" name='color' />
                    <br />
                    Is Ready to eat : <input type="checkbox" name='readyToEat' />
                    <br />
                    <input type="submit" value="Create Fruit" />
                </form>
            </DefaultLayOut>
        )
    }
}
module.exports = New