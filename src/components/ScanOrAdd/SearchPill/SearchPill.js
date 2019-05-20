import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { valid_shapes as shapes } from 'data/rxdata.json';
import { valid_colors as colors } from 'data/rxdata.json';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dropdown from './Dropdown';
import parseMedStrengths from 'utilities/parseMedStrengths';

// import AddPillButton from '../Scan/SearchResults/AddPillButton';

const SearchPill = ({ dispatch, setData, ...rest }) => {
  const [name, setName] = useState('');
  const [imprint, setImprint] = useState('');
  const [color, setColor] = useState('');
  const [shape, setShape] = useState('');

  const textEndpoint = `${process.env.REACT_APP_DATA_SCIENCE}/rxdata`;

  // useEffect(() => {}, [color, shape]);
  const search = async e => {
    e.preventDefault();
    const query = {
      pill_name: name,
      imprint,
      shape,
      color
    };
    console.log(query);
    try {
      const results = await axios.post(textEndpoint, query);
      const parsedResults = parseMedStrengths(results.data);
      setData(parsedResults);
    } catch (error) {
      console.error(error);
    }
    // Search for pill
  };
  return (
    <section className='option2-container'>
      <h4>Option 2 - Identify by direct input</h4>
      <div className='search-container'>
        <form className='form-container' onSubmit={search}>
          <div className='field-container'>
            <h5>Pill Name</h5>
            <TextField
              value={name}
              onChange={e => setName(e.target.value)}
              margin='normal'
              variant='outlined'
              className='field'
            />
          </div>
          <div className='field-container'>
            <h5>Imprint</h5>
            <TextField
              value={imprint}
              onChange={e => setImprint(e.target.value)}
              margin='normal'
              variant='outlined'
              className='field'
            />
          </div>
          <div className='field-container'>
            <h5>Pill Color</h5>
            <Dropdown
              itemName='color'
              itemList={colors}
              item={color}
              setItem={setColor}
              className='field'
            />
          </div>
          <div className='field-container'>
            <h5>Pill Shape</h5>
            <Dropdown
              itemName='shape'
              itemList={shapes}
              item={shape}
              setItem={setShape}
              className='field'
            />
          </div>
          <div className='button-container'>
            <Button variant='contained' className='reset-button'>
              Reset form
            </Button>
            <Button onClick={search} variant='contained' className='id-button'>
              Identify Pill
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    pillOnDeck: state.medsReducer.pillOnDeck
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchPill);
