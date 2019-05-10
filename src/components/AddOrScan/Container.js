import React, { useState } from 'react';
import AddPill from '../AddPill/AddPill.js';
import Scan from '../Scan/Scan.js';

const AddOrScan = ({ location }) => {
  const [add,setAdd] = useState(
    location.pathname === '/add' ? true : false
  );

  console.log(location);


  return (
    <section>
      { add === false ? <Scan add={add} setAdd={setAdd} /> : <AddPill /> }
      { add ? "*" : "" }
    </section>
  );
};


export default AddOrScan;