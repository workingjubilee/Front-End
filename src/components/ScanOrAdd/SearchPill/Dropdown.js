import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Dropdown = ({ itemName, itemList, item, setItem, }) => {

return (
      <FormControl>
        <InputLabel>{itemName}</InputLabel>
        <Select value={item} onChange={(event) => setItem(event.target.value)}>
          {itemList.map((item,index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      )
}

export default Dropdown;



// .wrapper-dropdown {
//     position: relative;
//     width: 200px;
//     background: #FFF;
//     color: #2e2e2e;
//     outline: none;
//     cursor: pointer;
// }
// .wrapper-dropdown > span {
//   width: 100%;
//   display: block;
//   border: 1px solid #ababab;
//   padding: 5px;
// }
// .wrapper-dropdown > span > span {
//   padding: 0 12px;
//   margin-right: 5px;
// }
// .wrapper-dropdown > span:after {
//     content: "";
//     width: 0;
//     height: 0;
//     position: absolute;
//     right: 16px;
//     top: calc(50% + 4px);
//     margin-top: -6px;
//     border-width: 6px 6px 0 6px;
//     border-style: solid;
//     border-color: #2e2e2e transparent;
// }

// .wrapper-dropdown .dropdown {
//     position: absolute;
//     z-index: 10;
//     top: 100%;
//     left: 0;
//     right: 0;
//     background: #fff;
//     font-weight: normal;
//     list-style-type: none;
//     padding-left: 0;
//     margin: 0;
//     border: 1px solid #ababab;
//     border-top: 0;
// }

// .wrapper-dropdown .dropdown li {
//     display: block;
//     text-decoration: none;
//     color: #2e2e2e;
//     padding: 5px;
//     cursor: pointer;
// }

// .wrapper-dropdown .dropdown li > span {
//   padding: 0 12px;
//   margin-right: 5px;
// }

// .wrapper-dropdown .dropdown li:hover {
//     background: #eee;
//     cursor: pointer;
// }