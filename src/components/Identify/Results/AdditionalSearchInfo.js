import React from 'react';
import { withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const AdditionalSearchInfo = ({ history }) => {
  return (
    <div className='results-directions'>
      <section className='new-search'>
        <h4>Can't find what you're looking for?</h4>
        <Button
          variant='outlined'
          onClick={e => {
            e.preventDefault();
            history.push('/identify');
          }}
        >
          Try a new search
        </Button>
        <p>
          You can search to identify your pill by providing either the pill
          name, imprint, or uploading an image
        </p>
      </section>
      <div className='directions'>
        <Typography variant='h3'>Steps to Identify a Pill</Typography>
        <article>
          <ol>
            <li>
              Enter the pill name <span>(optional).</span>
            </li>
            <li>
              Upload image of the pill <span>(optional).</span>
            </li>
            <li>
              Enter the imprint (code, numbers and/or letters on the pill).
            </li>
            <li>Select the color of the pill.</li>
            <li>Select the shape of the pill.</li>
            <li>
              Click the <strong>"Identify Pill"</strong> Button.
            </li>
            <li>Find your medication or make a new search.</li>
          </ol>
        </article>
      </div>
    </div>
  );
};

export default withRouter(AdditionalSearchInfo);
