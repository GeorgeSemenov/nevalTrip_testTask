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
            // Object.keys(BD[0]).map(key=>
            //   <th>{key}</th>
            // )
          }
        </tr>
      </thead>
      <tbody>
        {
          BD.map(row=>
          //   <tr>
          //     {row}
              
          //   </tr>
          // )
        }
      </tbody>
    </table>
  )
}

export default BDViewer;