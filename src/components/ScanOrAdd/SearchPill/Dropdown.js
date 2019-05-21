import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';


const Swatch = ({color}) => {
  const swatchObject = {
    background: `${color}`,
    padding: '0 12px',
    marginRight: '4px'
  }
  return (
    <span style={swatchObject} />
  );
}

const Dropdown = ({ itemName, itemList, item, setItem }) => {
  return (
    <FormControl variant='outlined' className='form-control'>
      <Select
        value={item}
        onChange={event => setItem(event.target.value)}
        input={
          <OutlinedInput name={item} id={`outlined ${item}`} labelWidth={0} />
        }
      >
        {itemList.map((item, index) => {
          const casedItem = item.toLowerCase();
          return (
            <MenuItem key={index} value={item}>
              <Swatch color={item} /> {casedItem[0].toUpperCase() + casedItem.slice(1)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;