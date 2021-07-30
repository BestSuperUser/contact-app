import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AddContact from "./Components/AddContact"
import Contacts from "./Components/Contacts"
import Header from "./Components/Header"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Contacts}></Route>
          <Route path="/addcontact" exact component={AddContact}></Route>
        </Switch>
      </Router>
    </div>
  );
}
 
export default App;