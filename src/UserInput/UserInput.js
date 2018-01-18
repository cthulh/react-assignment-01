import React from 'react';

const userinput = (props) => {
  return (
    <div className="Userinput">
      <input style={props.style} type="text" value={props.defaultname} onChange={props.change} />
    </div>
  )
}

export default userinput;
