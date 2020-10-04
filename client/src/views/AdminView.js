import React from "react"
import {
  DropdownButton,
  Dropdown,
  FormControl,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap"
import Communication from '../api/communication'

export default function AdminView() {
  const models = Communication.getLampModels()
  const users = Communication.getUsers()

  const [choosenLampModel, setChoosenLampModel] = React.useState("")
  const [lampAdress, setLampAdress] = React.useState("")
  const [owner, setOwner] = React.useState()


  function assignUser() {
    console.log(choosenLampModel)
    console.log(lampAdress)
    console.log(owner)
  }


  return (
    <div className="adminView mx-auto ">
      <div className="card1">
        <InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Выберите модель"
            id="input-group-dropdown-1"
            onSelect={(e) => {
              setChoosenLampModel(e)
            }}
          >
            <Dropdown.Item eventKey={models[0]}>{models[0]}</Dropdown.Item>
            <Dropdown.Item eventKey={models[1]}>{models[1]}</Dropdown.Item>
            <Dropdown.Item eventKey={models[2]}>{models[2]}</Dropdown.Item>
          </DropdownButton>
          <FormControl
            aria-describedby="basic-addon1"
            value={choosenLampModel}
            onChange={(e) => setChoosenLampModel(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">Адрес:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl id="basic-url" aria-describedby="basic-addon3" 
          onChange={(e)=>setLampAdress(e.target.value)}/>
        </InputGroup>

        <div className="text-left">Назначить пользователю:</div>
        
        <div className="d-flex flex-row">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              as="select"
              onChange={(e) => setOwner({ ...owner, key: e.target.value })}
            >
              <option></option>
              <option>{users[0]}</option>
              <option>{users[1]}</option>
              <option>{users[2]}</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className='align-self-center px-3' controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Вкл. по умолчанию"
              onChange={(e) =>
                setOwner({ ...owner, defaultState: e.target.checked })
              }
            />
          </Form.Group>
          <div className="ml-auto">
            <Button variant="primary" onClick={() => assignUser()}>
              Сохранить
            </Button>
          </div>
        </div>
      </div>

    </div>
  )
}
