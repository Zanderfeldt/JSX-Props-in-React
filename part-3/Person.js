const Person = (props) => {
  let voteText = props.age >= 18 ? "Go vote!" : "You must be 18";
  let name = props.name.length > 8 ? props.name.slice(0,6) : props.name;
  return (
  <div>
    <p>Learn some information about this person</p>
    <ul>
      <li>Name: {name}</li>
      <li>Age: {props.age}</li>
      <ul>
      Hobbies:
        {props.hobbies.map(h => <li>{h}</li>)}
      </ul>
    </ul>
    <h3>{voteText}</h3>
  </div>
  );
}