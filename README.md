# treadmill

[![Build Status](https://travis-ci.org/petvajda/treadmill.svg?branch=master)](https://travis-ci.org/petvajda/treadmill)

Music theory learning Application. You can use it to memorise scale notes and
note positions on bass guitar. You may use it during your treadmill routine.

The project also includes a basic Solfège JavaScript library:

Scale and modes support:
```javascript
> const solfege=require('./solfege.js');
undefined
> cdor = new solfege.Scale("Bb", 2)
{ majorBase: 'Bb',
  mode: 'II',
  notes: [ 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb' ],
  name: 'C Dorian' }
> cdor.toString()
'C Dorian: C D Eb F G A Bb'
```

Chord support:
```javascript
> ebm7 = new solfege.Chord("Db", 2);
SolfegeBase {
  majorBase: 'Db',
  mode: 'II',
  notes: [ 'Eb', 'Gb', 'Bb', 'Db' ],
  name: 'Ebm7' }
> ebm7.toString()
'Ebm7: Eb Gb Bb Db'
```

Also random key and sequence generation:
```javascript
> solfege.randomKey()
'Cb'
> solfege.randomModesSequence()
[ 2, 4, 6, 1, 3, 5, 7 ]
```

## Original email from Ant the idea for the Application

```
Treadmill routine:

Index card with a scrambled order of keys and the numbers 1 thru 7 scramble on it.

3 7 2 4 6 1 5

Once you pick one of the 15 Keys start going through the numbers in the scrambled order.

These are the things that you’re saying and in this order.

1.      Note

2.      Where is it on the bass(all strings or 1 string, high to low

3.      The mode name and its notes

4.      The chord name and its notes

5.      The pentatonic name and its notes
```
## Screenshot of the react App
![TreadmillApp Picture](https://github.com/petvajda/treadmill/blob/master/TreadmillApp.png)
