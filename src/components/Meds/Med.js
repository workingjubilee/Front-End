import React from 'react';

const Med = ({ med }) => {
  return (
    <div className='med'>
      <h2>{med.med_name}</h2>
      <p>med_rx: {med.med_rx}</p>
      <p>med_pharm_phone: {med.med_pharm_phone}</p>
      <p>med_type: {med.med_type}</p>
      <p> med_admin_mode: {med.med_admin_mode}</p>
      <p> med_color: {med.med_color}</p>
      <p> med_shape: {med.med_shape}</p>
      <p> med_strength: {med.med_strength}</p>
      <p> med_strength_unit: {med.med_strength_unit}</p>
      <p> med_dose: {med.med_dose}</p>
      <p> med_dose_unit: {med.med_dose_unit}</p>
      <p> med_dose_freq: {med.med_dose_freq}</p>
      <p> med_dose_freq_unit: {med.med_dose_freq_unit}</p>
    </div>
  );
};

export default Med;
