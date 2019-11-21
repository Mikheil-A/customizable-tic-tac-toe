import React from 'react';
import './Settings.css'


const settings = props => {
  return (
    <div className="dimensions">

      <div className="input">
        <span>Width:</span>
        <input type="number"
               placeholder="width"
               onChange={props.widthChanged}
               value={props.width}
        />
      </div>

      <div className="input">
        <span>Height:</span>
        <input type="number"
               placeholder="height"
               onChange={props.heightChanged}
               value={props.height}
        />
      </div>

    </div>
  );
};

export default settings;
