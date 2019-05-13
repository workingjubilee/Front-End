import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Tabber(props) {
  const { state, dispatch } = props
  const { tab } = state;

  return (
    <Tabs
      value={tab}
      onChange={(e, newValue) => dispatch({ type: 'tab', payload: newValue })}
      indicatorColor="primary"
    >
      <Tab label="Scan" />
      <Tab label="Add" />
    </Tabs>
  )
}