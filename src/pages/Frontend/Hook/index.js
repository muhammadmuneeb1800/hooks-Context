import React from 'react'
import {Routes , Route} from 'react-router-dom'

import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";


export default function Hooks() {
  return (
    <>
        <Routes>
          <Route path="usestate" element={<UseState />} />
          <Route path="useeffect" element={<UseEffect />} />
          <Route path="usecontext" element={<UseContext />} />
        </Routes> 
    </>
  )
}
