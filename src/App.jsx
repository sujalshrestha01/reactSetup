import React, { useState } from "react";

import './App.css'

import Friend from "./components/Friend";
import UpdateObject from "./components/updateObject";
import Component1 from "./components/Component1";
import { Form } from "./components/Form";
 
function App() {
  const [value,setValue]=useState(0)

return (
  <>
  <Form/>
  </>
)
}

export default App
