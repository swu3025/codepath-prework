# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Samuel Wu**

Time spent: **7** hours spent in total

Link to project: https://glitch.com/edit/#!/good-upbeat-catboat

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Instead of having a different pattern each time, I created a button that creates a new pattern. That way, users can be able to choose when to move on to another pattern instead of being forced to go to another pattern each game.
- [x] Everytime the user wins the game, the next game will have a new patttern generated.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![](http://g.recordit.co/iC1aZ1hR9W.gif)

![](http://g.recordit.co/zwrVAy7k15.gif)

![](http://g.recordit.co/KhD91FjL85.gif)

![](http://g.recordit.co/pasbG8DQBu.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    One challenge I encountered in creating this submission was during the creation of the different pattern optional feature. At first, I thought it was a pretty easy and straightforward feature where I only needed to create a function that generates a random generator for my pattern array. However, I noticed a problem after running my program. Everytime I started the game, the pattern would be the same. I wasn't sure what the problem was at first and my function look right to me. That was when I realized about a problem I had encountered before where the random numbers were always the same everytime the program was executed. I researched on this particular problem and found out about seeding, however, it turned out seeding was not possible with javascript and the solutions provided were very complicated. After continually analyzing my code, I realized the random generator actually did in fact generate new numbers each time. What I failed to do was empty out my pattern array after every game. My previous program added onto the pattern array (length of 10 became length of 20 and so on). I solved this problem by initializing the pattern array to be an empty array in the startGame function. (my startGame does not reflect this change since I altered my program to include the additional features).

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    One question I have about web development are the libraries and frameworks use in it. I realized after completing my submission that there are a lot of things I need to know about HTML, CSS, and Javascript. However, I learned that there are multiple libraries and frameworks that are used in web development, such as React, Node.js, and jQuery. The question I have is do I need to learn them all? I've looked into some of these frameworks and libraries and they seem like a whole new language and it made me realize there is a whole lot of things to learn for web development.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    If I had a few more hours to work on this project, I would spend them finishing the optional features and including additional features that I think of. I skimmed the rest of the optional features provided and I realized that it does get harder and harder to implement. I believe with those remaining features, if I were to continue working on the project, I would first need to do some research. For example, for the game button appearance change, I would need to look into the image component of html and how to implement it. I would also need to learn how to replace the button with the image. My first thought was to move the image over the button, but it requires some alteration of the CSS file. I also believe that I can refactor some features to make them even better just how I did to the new pattern button.




## License

    Copyright Samuel Wu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
