
import {BrowserRouter as Router, Route, Link, Switch} from "./react-router-dom-reimplement";
import HomePage from "./pages/home";
import ListPage from "./pages/list";
import DetailPage from "./pages/detail";

function App() {
  const id = 123;
  return (
    <div className="App">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/list">列表</Link>
        <Link to="/detail/:xx">详情</Link>

        {/* <Switch> */}
          <Route
            path="/"
            exact
            //children={children}
            component={HomePage}
            //render={() => <HomePage />}
            //render={render}
          />
          <Route path="/" exact component={HomePage}>
            HomePage
          </Route>
          <Route path="/list" component={ListPage} />
          <Route path="/detail/:xx" component={DetailPage} />
          {/* <Route component={_404Page} /> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
