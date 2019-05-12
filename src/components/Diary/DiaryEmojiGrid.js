import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

import diaryEmojiTiles from './diaryEmojiTiles';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: 500,
    height: 165
  },
  tile: { background: 'white,', color: 'black' },
  selectedTile: { background: 'teal', color: 'white' },
  image: {
    maxWidth: '100%',
    maxHeight: 'auto'
  },
  label: {
    textAlign: 'center'
  }
});

function DiaryEmojiGrid({ classes, diary_emoji }) {
  return (
    <div className={classes.root}>
      <GridList cellHeight={80} className={classes.gridList} cols={6}>
        {diaryEmojiTiles.map(tile => (
          <div
            className={
              tile.value === diary_emoji ? classes.selectedTile : classes.tile
            }
            key={tile.value}
          >
            <GridListTile cols={tile.cols || 1}>
              <div>
                <img
                  className={classes.image}
                  src={tile.img}
                  alt={tile.title}
                />
              </div>
            </GridListTile>
            <div
              className={
                tile.value === diary_emoji ? classes.selectedTile : classes.tile
              }
            >
              <Typography className={classes.label}>{tile.text}</Typography>
              <Typography className={classes.label}>{tile.number}</Typography>
            </div>
          </div>
        ))}
      </GridList>
    </div>
  );
}

export default withStyles(styles)(DiaryEmojiGrid);
