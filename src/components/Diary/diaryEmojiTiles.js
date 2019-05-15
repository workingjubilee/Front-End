import painFace1 from './Diary_Emoji_Assets/painFace1.png';
import painFace2 from './Diary_Emoji_Assets/painFace2.png';
import painFace3 from './Diary_Emoji_Assets/painFace3.png';
import painFace4 from './Diary_Emoji_Assets/painFace4.png';
import painFace5 from './Diary_Emoji_Assets/painFace5.png';
import painFace6 from './Diary_Emoji_Assets/painFace6.png';

const diaryEmojiTiles = [
  {
    value: '1',
    title: 'No Pain',
    img: painFace1,
    text: 'No Pain',
    number: '0'
  },
  { value: '2', title: 'Mild', img: painFace2, text: 'Mild', number: '1-3' },
  {
    value: '3',
    title: 'Moderate',
    img: painFace3,
    text: 'Moderate',
    number: '4-5'
  },
  {
    value: '4',
    title: 'Severe',
    img: painFace4,
    text: 'Severe',
    number: '5-6'
  },
  {
    value: '5',
    title: 'Very Severe',
    img: painFace5,
    text: 'Very Severe',
    number: '7-9'
  },
  {
    value: '6',
    title: 'Worst Pain Possible',
    img: painFace6,
    text: 'Worst Pain Possible',
    number: '10'
  }
];

export default diaryEmojiTiles;
