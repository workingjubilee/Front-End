import React from 'react';

const PillCard = ({ med, medImage }) => {
  return (
    <div
      style={{
        width: '500px',
        height: '62.5px',
        display: 'flex',
        alignItems: 'center',
        margin: '20px auto',
        background: '#F0F3F5',
        borderRadius: '5px',
        boxShadow: 'none'
      }}
    >
      <p
        style={{
          lineHeight: '62.5px',
          padding: '0 20px',
          fontSize: '40px',
          color: '#2D90F5'
        }}
      >
        •
      </p>
      <img
        style={{
          height: '50px',
          width: '50px',
          objectFit: 'cover',
          marginRight: '20px'
        }}
        src={medImage || require('../../../assets/logo.png')}
        alt='your pill'
      />
      <div
        style={{
          lineHeight: '20px',
          fontSize: '15px',
          fontWeight: '100',
          color: '#757575'
        }}
      >
        <div
          style={{ fontSize: '17.5px', fontWeight: '100', color: '#383838' }}
        >
          {med.med_name || 'name'}
        </div>
        {med.med_strength && med.med_strength_unit
          ? med.med_strength + ' ' + med.med_strength_unit
          : 'dose'}
        {' | '}
        {med.med_color || 'color'}
        {' | '}
        {med.med_shape || 'shape'}
      </div>
    </div>
  );
};

export default PillCard;
