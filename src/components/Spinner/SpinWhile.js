import React, { Fragment } from 'react';
import Spinner from 'components/Spinner/Spinner';

export default function SpinWhile({ still, children, ...props }) {
  if (still) {
    return <Spinner />;
  } else {
    return <Fragment>{children}</Fragment>;
  }
}
