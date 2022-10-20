import React, {useState} from 'react';
import cl from './BDViewer.module.css'

function BDViewer({BD,...props}) {
  
  return(
    <table
      {...props}
    >
      <thead>
        <tr>
          {
            Object.keys(BD[0]).map(key=>
              <th>{key}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          BD.map(row=>
            <tr>
              {Object.values(row).map(value=>
                <td>{value}</td>
              )}
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default BDViewer;