import React, { useState, useEffect } from "react"
import { api } from "../api"
import LampContol from "./elements/LampControl"

export default function UserView(props) {
  const [hasRendered, setHasRendered] = useState(false)
  const [lampList, setLampList] = React.useState([])

  useEffect(() => setHasRendered(true), [hasRendered])
  if (!hasRendered) {
    api.getLampList(props.token).then((res) => setLampList(res))
  }

  return (
    <div className="userView mx-auto">
      <div className="text-left">
        {lampList.map((value, index, arr) => (
          <LampContol key={index} token={props.token} lamp={value} />
        ))}
      </div>
    </div>
  )
}
