import React from "react";
import "../styles/Contador.css"

export default function Contador({ numclick }) {
  return (
    <div className="contador">
      {numclick}
    </div>
  )
}