import './App.css';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

function App() {
  return (
    <div>
      <input type="date" id="datepicker" />
      <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />
    </div>
  );
}

export default App;
