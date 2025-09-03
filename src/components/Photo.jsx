

import React, { useState } from 'react';

export default function Photo() {
  const [file, setFile] = useState('');

  const getFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={getFile}></input>
      <img src={file} />
    </div>
  );
}
