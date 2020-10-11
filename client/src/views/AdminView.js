import React, { useState, useEffect } from "react"
import {
  DropdownButton,
  Dropdown,
  FormControl,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap"
import { api } from "../api"

export default function AdminView(props) {
  const [hasRendered, setHasRendered] = useState(false)

  const [models, setModels] = React.useState([])
  const [users, setUsers] = React.useState([])

  const [newLamp, setNewLamp] = React.useState({
    model: "",
    adress: "",
    owner: "",
    defaultState: false,
  })

  function saveLamp() {
    api.addLamp(props.token, newLamp)
  }

  useEffect(() => setHasRendered(true), [hasRendered])
  if (!hasRendered) {
    api.getLampModels(props.token).then((res) => setModels(res.models))
    api.getUsers(props.token).then((res) => setUsers(res.users))
  }

  return (
    <div className="adminView mx-auto ">
      <div className="card1">
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title="Выберите модель"
            id="input-group-dropdown-1"
            onSelect={(e) => {
              //setChoosenLampModel(e)
              setNewLamp({ ...newLamp, model: e })
            }}
          >
            {models.map((model) => (
              <Dropdown.Item eventKey={model.name} key={model.id}>
                {model.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <FormControl
            aria-describedby="basic-addon1"
            value={newLamp.model}
            onChange={(e) => setNewLamp({ ...newLamp, model: e.target.value })}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">Адрес:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={(e) => setNewLamp({ ...newLamp, adress: e.target.value })}
          />
        </InputGroup>

        <div className="text-left">Назначить пользователю:</div>

        <div className="d-flex flex-row">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              as="select"
              onChange={(e) =>
                setNewLamp({ ...newLamp, owner: e.target.value })
              }
            >
              <option></option>
              {users.map((user) => (
                <option key={user.id}>{user.name}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group
            className="align-self-center px-3"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              type="checkbox"
              label="Вкл. по умолчанию"
              onChange={(e) =>
                setNewLamp({ ...newLamp, defaultState: e.target.checked })
              }
            />
          </Form.Group>
          <div className="ml-auto">
            <Button variant="primary" onClick={() => saveLamp()}>
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
