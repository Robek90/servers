import React from 'react';

// import useStyles from './muistyle';

export default function Button(props) {
//   const classes = useStyles();

  return (
  <>
    <button 
      index={props.index}
      className={props.style}
      onClick={() => props.action(props.index)}
    >
          {props.title}
    </button>
  </>
  );
}