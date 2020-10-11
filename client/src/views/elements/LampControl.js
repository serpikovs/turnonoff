import React from "react"
import { Form } from "react-bootstrap"
import { api } from "../../api"

export default function LampContol(props) {
  const state = props.lamp.state ? true : false
  const [checkboxState, setCheckboxState] = React.useState(state)

  function checkboxHandler(value) {
    setCheckboxState(value)
    api.setLampState(props.token, props.lamp.adress, value)
  }

  return (
    <div>
      <Form.Group id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label={props.lamp.adress + "(" + props.lamp.model + ")"}
          checked={checkboxState}
          onChange={(e) => {
            checkboxHandler(e.target.checked)
          }}
        />
      </Form.Group>
    </div>
  )
}
