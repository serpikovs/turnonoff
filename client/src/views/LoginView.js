import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function LoginView() {
  return (
    <div className="loginView mx-auto">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Пользователь" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </div>
  )
}
