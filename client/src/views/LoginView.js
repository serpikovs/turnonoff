import React,{ useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { api } from "../api"
import { Redirect, Route } from "react-router-dom"

export default function LoginView(props) {
  const [userInput, setUserInput] = React.useState({
    name: "Пользователь 1",
    password: "pass1",
  })


  const [hasRendered, setHasRendered] = useState(false)

  const [redirectPath,setRedirectPath] = React.useState()
  const [redirectRequest, setRedirectRequest] =  React.useState(false)

  function submitHandler() {
    api.login(userInput).then((data) => {
      if (data.token) {
        props.setToken(data.token)
        props.setTokenStatus(true)
        localStorage.setItem("token",data.token)
      }
      if (data.role) {
        props.setRole(data.role)
        localStorage.setItem("role",data.role)
        if (data.role === "admin") setRedirectPath("/adminpanel")
        if (data.role === "user") setRedirectPath("/userpanel")

        setRedirectRequest(true)
      }
    })
  }

  useEffect(() => setHasRendered(true), [hasRendered])
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")
  if (!hasRendered && token!='') {
    
    api.isTokenValid(token).then((res)=>{
      if (res.status==200) {
        props.setToken(token)
        props.setTokenStatus(true)

        if (role === "admin") setRedirectPath("/adminpanel")
        if (role === "user") setRedirectPath("/userpanel")


        setRedirectRequest(true)

      }
    }
    )
  }

  return (
    <div className="loginView mx-auto mt-3">
      <Route>
      {redirectRequest && <Redirect to={redirectPath}/>}
      </Route>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) =>
              setUserInput({ ...userInput, name: e.target.value })
            }
            value={userInput.name}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder=""
            onChange={(e) =>
              setUserInput({ ...userInput, password: e.target.value })
            }
            value={userInput.password}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={submitHandler}>
          Войти
        </Button>
      </Form>
    </div>
  )
}
