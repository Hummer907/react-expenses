import { useLoaderData } from 'react-router-dom';

import React from 'react';

function Error({ message }) {
  return (
    <div>
      <h2>An error occurred:</h2>
      <p>{message}</p>
    </div>
  );
}

export default Error;
