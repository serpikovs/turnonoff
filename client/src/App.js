import React from "react"
import "./App.css"
import LoginView from "./views/LoginView"
import AdminView from "./views/AdminView"
import UserView from "./views/UserView"
import { Navbar, Nav } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom"

function App(props) {
  const [token, setToken] = React.useState("")
  const [tokenStatus, setTokenStatus] = React.useState(false)
  const [role, setRole] = React.useState("")

  function PrivateRoute({ children, ...rest }) {
    let expectedRole = ""

    switch (rest.path) {
      case "/adminpanel":
        expectedRole = "admin"
        break
      case "/userpanel":
        expectedRole = "user"
        break
    }

    return (
      <Route
        {...rest}
        render={({ location }) =>
          expectedRole === role ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  }

  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Лампы</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Главная</Nav.Link>
          <Nav.Link href="/adminpanel">Добавить лампу</Nav.Link>
          <Nav.Link href="/userpanel">Управлять лампами</Nav.Link>
        </Nav>
      </Navbar>

      <div className="App">
        <div className="mt-5">
          <Switch>
            <Route exact path="/">
              <h1>Добро пожаловать</h1>
            </Route>

            <Route path="/login">
              <LoginView
                setToken={setToken}
                setTokenStatus={setTokenStatus}
                setRole={setRole}
              />
            </Route>

            <PrivateRoute path="/adminpanel">
              <AdminView token={token} />
            </PrivateRoute>

            <PrivateRoute path="/userpanel">
              <UserView token={token} />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
