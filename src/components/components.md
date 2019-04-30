# Components 💯

## Register / Login:

Basic stuff we've been doing, I can explain more if needed.
Chris: Changed all mentions of 'SignUp' to 'Register' per group discussion.

## Scan:

Some sort of form that can accept an image as an input. Maybe allow users to take photos inside the app somehow. Submit sends the photo to the data science magic. Not sure what to do from there.

## Diary:

A little confused what is entailed with this view. I mentioned earlier `medication` and `medication list` views so maybe those instead of being views could be components inside this view? just spit balling

Chris: Moved meds to their own folder. Those are the list of meds the user has entered. Diaries are when a user wants to record their experience of a medication. Names shortened to Meds (the list of all a user's meds) and Med (one user med).

## Dasboard:

For this one I went off the image Olu gave us. For all the numerical values I just see that coming from mapStateToProps. In regards to the Scheduled and Taken buttons that can be a ternary based display? As for the times to take things that's some logic I haven't thought about yet.
