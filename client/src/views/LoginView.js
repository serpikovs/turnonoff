import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Communication from "../api/communication"

export default function LoginView() {
  
  const [userInput, setUserInput] = React.useState({name: "Пользователь 1", password: "pass1"})
  
  function submitHandler() {
    Communication.auth(userInput)
  }

  return (
    <div className="loginView mx-auto">
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="" 
          onChange={(e)=>setUserInput({...userInput,name:e.target.value})}
          value={userInput.name}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder=""  
          onChange={(e)=>setUserInput({...userInput,password:e.target.value})}
          value={userInput.password}/>
        </Form.Group>
        <Button variant="primary" type="button"
        onClick={submitHandler}>
          Войти
        </Button>
      </Form>
    </div>
  )
}
