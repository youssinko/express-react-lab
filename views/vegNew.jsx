const React = require('react')

class VegNew extends React.Component {
    render() {
        return (
            <div>
                <h1>New Vegetables Page</h1>
                <nav>
                    <a href="/vegetables">Home Page</a>
                </nav>
                <form action="/vegetables" method="POST">
                    Name: <input type="text"
                        name='name' />
                    <br />
                    Color : <input type="text" name='color' />
                    <br />
                    Is Ready to eat : <input type="checkbox" name='readyToEat' />
                    <br />
                    <input type="submit" value="Create Fruit" />
                </form>
            </div>
        )
    }
}
module.exports = VegNew