import React from 'react'
import {Routes, Route} from 'react-router-dom'

export default function App() {

  return (
    <div className='main'>
      <aside>
        <></>
      </aside>
      <main>
        <Routes>
          <Route
            path=''
            element={<div></div>}>
          </Route>
        </Routes>
      </main>
    </div>
  )
}