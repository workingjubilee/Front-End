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
      <Typography component='p'>Dosage Duration</Typography>
      <Card style={{ display: 'flex' }}>
        <Typography component='p'>Number of days</Typography>

        <Button
          onClick={
            dosageDuration > 0
              ? () => setDosageDuration(dosageDuration - 1)
              : null
          }
        >
          <RemoveIcon />
        </Button>

        <Typography component='p'>{dosageDuration}</Typography>

        <Button onClick={() => setDosageDuration(dosageDuration + 1)}>
          <AddIcon />
        </Button>
      </Card>
    </CardContent>
  );
};

export default DosageDuration;
