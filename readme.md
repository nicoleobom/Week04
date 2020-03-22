# 04 Web APIs: Code Quiz

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## My Code Quiz

```
When a user visits the site, instructions, start button, and recent scores button appears as page loads
Once start button is clicked, timer begins and question 1 appears with a set of multiple choice answers
If answer choice is correct, 5 points are added to the user's score and next question appears
If answer choice is incorrect, 10 seconds are deducted from the seconds remaining
When timer reaches 0 OR all 10 questions have been answered, timer disappears, score appears with text area to submit initials
Once initials are submitted, they are added to the recent scores div and a restart button appears
Once restart button is clicked, user is prompted with question 1 again
When "view recent scores" button is clicked, user can hide and show all recent scores within that same site visit
