import React from 'react';
import { shapes } from '../../data/shapes';
import { colors } from '../../data/colors';

const StepOne = props => {
  const handleShapeChange = e => {
    props.updateShape(e.target.options[e.target.selectedIndex].id);
    console.log(shapes[e.target.options[e.target.selectedIndex].id]);
  };
  const handleColorChange = e => {
    props.updateColor(e.target.options[e.target.selectedIndex].id);
    console.log(colors[e.target.options[e.target.selectedIndex].id]);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.nextStep();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Pill Name</p>
        <input
          type='text'
          name='name'
          value={props.name.value}
          onChange={props.name.updateValue}
        />
      </div>
      <div>
        <p>Imprint</p>
        <input
          type='text'
          name='imprint'
          value={props.imprint.value}
          onChange={props.imprint.updateValue}
        />
      </div>
      <div>
        <p>pill Shape</p>
        <select onChange={handleShapeChange}>
          {shapes.map(shape => (
            <option key={shape.id} id={shape.id}>
              {shape.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>pill Color</p>
        <select onChange={handleColorChange}>
          {colors.map(color => (
            <option key={color.id} id={color.id}>
              {color.name}
            </option>
          ))}
        </select>
      </div>
      <input type='submit' />
    </form>
  );
};

export default StepOne;
