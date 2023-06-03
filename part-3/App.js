const App = () => (
  <div>
    <Person 
    name="Alex"
    age={28}
    hobbies={["Djing", "Music Production", "Video Games"]}/>
    <Person 
    name="Solomon"
    age={41}
    hobbies={["Eating", "MMA", "Working Out"]}/>
    <Person 
    name="Reallylongname"
    age={11}
    hobbies={["Dancing", "Singing", "Watching Movies"]}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))