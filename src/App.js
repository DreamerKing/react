import './App.css';
import FancyButton from './components/FancyButton';
import WrapFancyButton from './components/WrapFancyButton'
import React, { Component, Profiler } from 'react';
import HelloReact from './components/HelloReact';
import Todo from './components/Todo';
import ListOfTenThings from './components/Repeat';
import Test from './components/Test';


/* ref.current.addEventListener('click', () => {
  console.log('click');
}) */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: 'Click Me',
      text: 'is ok!'
    }
    this.btnRef = React.createRef();
  }

  componentDidMount() {
    this.btnRef.current.addEventListener('click', (e) => {
      this.setState({
        btnText: "Click"
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Profiler id="list" onRender={renderListCallback}>
          <ListOfTenThings />
        </Profiler>
        <WrapFancyButton ref={this.btnRef} text={this.state.text} >
          {this.state.btnText}
        </WrapFancyButton>
        <div>{'>'} {0} {'<'} </div>
        <Test name="King" />
        {/* <HelloReact name="King" /> */}
        {/* <Todo></Todo> */}
      </div>
    );
  }
}

function renderListCallback(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
  console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);
}

export default App;
