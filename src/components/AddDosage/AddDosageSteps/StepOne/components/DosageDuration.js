import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const DosageDuration = ({ dosageDuration, setDosageDuration }) => {
  return (
    <CardContent style={{ display: 'flex' }}>
      <Typography style={{ width: '150px', alignSelf: 'center' }} component='p'>
        Dosage Duration
      </Typography>
      <Card
        style={{
          display: 'flex',
          height: '40px',
          paddingLeft: '20px',
          boxShadow: '0px 0px 10px 5px #f3f3f3',
          margin: '0 10px',
          textTransform: 'none'
        }}
      >
        <Typography style={{ lineHeight: '40px' }} component='p'>
          Number of weeks
        </Typography>

        <Button
          onClick={
            dosageDuration > 0
              ? () => setDosageDuration(dosageDuration - 1)
              : null
          }
        >
          <RemoveIcon style={{ color: '#2D90F5' }} />
        </Button>

        <Typography style={{ lineHeight: '40px' }} component='p'>
          {dosageDuration}
        </Typography>

        <Button onClick={() => setDosageDuration(dosageDuration + 1)}>
          <AddIcon style={{ color: '#2D90F5' }} />
        </Button>
      </Card>
    </CardContent>
  );
};

export default DosageDuration;
