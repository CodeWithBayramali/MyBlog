import Navi from "./components/Navi";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PostList from "./components/PostList";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Container className="mt-5">
        <Route path="/" component={PostList}/>
        </Container>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
