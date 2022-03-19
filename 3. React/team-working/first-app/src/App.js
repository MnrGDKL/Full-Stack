import './App.css';
import React from 'react';

// export default class App extends React.Component {
//   state = {
//       weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//     }
    
//   render() {
//     return (
//       <div>
//         <ol>
//          {this.state.weekDays.map((weekDay,index) => {
//             return <li key={index}>{weekDay}</li>
//          })
//           }
//         </ol>
//       </div>
//     )
//   }
// }

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    }
  }

  render() {
    return (
      <div>
        <ol>
         {this.state.weekDays.map((weekDay,index) => (
            <li key={index}>
              <a href='#'>{weekDay} </a>
            </li>
          ))
          }
        </ol>
      </div>
    )
  }
}