import React, { Component } from 'react';

var randomColor = function (){
  const color = '' + Math.floor(Math.random() * 16777215).toString(16);
  return '#' + color.padEnd(6, '0');
}

class App extends Component {
  handleBack = () => {
    var { previousColors } = this.state;
    const lastColor = previousColors.pop();

    this.setState({ color: lastColor, previousColors: previousColors });
  }

  handleGenerate = () => {
    var { color, previousColors } = this.state;
    previousColors.push(color)

    this.setState({ color: randomColor(), previousColors: previousColors });
  }

  componentWillMount() {
    this.setState({ color: randomColor(), previousColors: [] });
  }

  render() {
    return (
      <section class="section">
        <div class="container">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <figure className="image is-128x128" style={{ backgroundColor: this.state.color }}>
                </figure>
              </div>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.color}
              </div>
            </div>
          </div>
        <button onClick={this.handleBack}>back</button>
        <button onClick={this.handleGenerate}>generate</button>
        </div>
      </section>
    );
  }
}

export default App;
