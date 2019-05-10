import React, { useState } from 'react';
import AddPill from '../AddPill/AddPill.js';
import Scan from '../Scan/Scan.js';

const AddOrScan = props => {
  const [add,setAdd] = useState(false);

  return (
    <section>
      { add === false ? <Scan add={add} setAdd={setAdd} /> : <AddPill /> }
      { add ? "*" : "" }
    </section>
  );
};


export default AddOrScan;