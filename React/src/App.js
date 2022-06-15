import './App.css';
import Multiple from './Components/Multiple';
import UserDefined from './Components/UserDefined';
import StateHook from './Components/StateHook';

const Message = props => <h4>{props.msg}</h4>

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Multiple/>
      <Message msg="Good Night"/>
      <Message msg="Lets meet tomorrow"/>
      <UserDefined/><br/>
      <StateHook/>
    </div>
  );
}

export default App;
