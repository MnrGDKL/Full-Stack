import './App.css';
import Form from './components/form/Form';
import KeyboardEvents from './components/keyboardEvents/KeyboardEvents';
import EventBind from "./components/eventBinding/EventBind";
import AddEvents from './components/addEvents/AddEvents';
import MouseEvents from './components/mouseEvents/MouseEvents';

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      {/* <AddEvents/> */}
      {/* <MouseEvents/> */}
      <Form/>
      {/* <KeyboardEvents/> */}
      {/* <EventBind/> */}
    </div>
  );
}

export default App;
