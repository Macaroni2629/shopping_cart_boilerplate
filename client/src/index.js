/* 
Supposed to do:

include react stuff
render app
*/

import React from "react"
import ReactDOM from "react-dom/client"

import App from "./components/App"

const root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App />)
