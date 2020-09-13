import * as React from 'react';
import {useState, useEffect} from 'react';


export default () => {
  const hehe = [
    1, 2, 3, 4
  ];

  return (
    <div>
      {
        hehe.map(i => {
          return <div>{i}</div>
        })
      }

    </div>
  )
}
