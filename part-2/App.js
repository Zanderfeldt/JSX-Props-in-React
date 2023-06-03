const App = () => (
  <div>
    <Tweet 
    name="Bob Smith" 
    username="Bobobob" 
    date={new Date().toDateString()}
    message="What up"/>
    <Tweet 
    name="Duke Nukem" 
    username="Duker" 
    date={new Date().toDateString()}
    message="Hello"/>
    <Tweet 
    name="Joe Biden" 
    username="Brandon" 
    date={new Date().toDateString()}
    message="Huh?"/>
  </div>
)




ReactDOM.render(<App />, document.getElementById("root"))