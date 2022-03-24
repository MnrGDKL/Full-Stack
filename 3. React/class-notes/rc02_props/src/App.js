import Person from "./Components/Person";

function App(props) {
  return (
    <div>
      <Person 
        name="Ahmet Can" 
        img="www.google.com"
        tel="555-55-55"
        />
        <Person 
        name="Mehmet" 
        img="www.google.com"
        tel="444-44-44"
        />
    </div>
  );
}


export default App;
