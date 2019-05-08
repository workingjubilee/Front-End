import React from 'react';
import { connect } from 'react-redux';

import DiaryEntry from './DiaryEntry';

const DiaryEntries = ({ diary }) => {
  return (
    <div>
      <div>
        <h2>Entries</h2>
        {diary.map(diaryEntry => (
          <DiaryEntry key={diaryEntry.id} diaryEntry={diaryEntry} />
        ))}
      </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  diary: state.diary
});

export default connect(
  mapStateToProps,
  null
)(DiaryEntries);
