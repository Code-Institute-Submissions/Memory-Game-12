# MS2 Project for Code Institute 2020

## Overview
A retro-style game app build using JavaScript, HTML and CSS

### Live Demo: [https://gisellenessi.github.io/Memory-Game/]

Memory game app features two games, first being a simple memory card game where the user can find the match over two cards at the time, you can win by finding all the matches.
The second game features the classic Simon, the game board has instructions on how to play including sound and colour sequences as the user plays. Both games keep count of the score while play and the app has an option to refresh both games to start over again.

The idea of this project is to provide a simple game app for kids and adults to enjoy a break and exercise the brain by playing memory games. This app has the potential to expand and add several more games to create a library of retro style memory games for users.

### Target audience
The target audience for this game app is game lovers, kids and adults interested in playing a quick and fun game while enjoying a break or leisure time. The app can be enjoyed by most people as comes with a set of rules to play the games and it doesn’t require the previous experience. A user looking to exercise their memory muscle can also enjoy playing this game on a regular basis.

## UX
This project recreates the classic games of memory card and Simon in a modern a retro-style single page application.

In order to make the user experience as easy as possible as well as fun, I decided for a simple Single-Page Applications that includes a header introduction, a navigation menu, refresh button to start a new game, footer with contact information, all this easy and accessible for the user to interact with the app.

### User stories

“As a user, I would like to_____”

Take regular breaks of work and play a fun game to exercise my memory

I want a simple and straight forward app with instructions to play retro games

Have an option to easily refresh the game to start over again

Be able to keep my score of the game while playing

Be able to get in touch with the owner of the app for feedback

For more accessibility provide sound where possible to be able to play the game if user poor visibility or disability

## Design
Design and layout are mainly focused on fun and simplicity. 

### Framework
Bootstrap was used as my framework of choice due to its flexibility in responsiveness and modern look and feel classes.

### Colour palette
Colour palette was chosen for the user to have fun, a high contrast and a dark mode visual application to simulate real arcade environments full of colours and bright lights.

### Fonts
The game app uses two fonts from Google fonts, first, font-family is ‘Press Start 2P'’ use for all title, this simulates a pixel-like font to be in line with the theme of the application and the second font-family is 'Roboto Mono' use for the rest of text and paragraphs for an easier to read font for more heavy text throughout the application.

Responsitivity
Wireframes

## Features
### Features in use 
* Navbar: Contains logo link, contact buttons to navigate to a contact form and social icons and a “refresh games” button to start the games again. Navigation is intuitive and clear.
* All content is display in a single page and scrolling through different sections is highlighted by the spy in the navbar.
* Refresh game buttons - Located on the navbar as well as the footer, this will reset the page and start over the games again.
* Interactivity: The game app will give clear feedback about the game being played and how to interact with it, including keeping score, alert for right or wrong and finally when the user wins the game.
* Audio: The Simon game has sound implement when the user is playing to indicate game sequence.
* Strict: The Simon game has an option to play ‘strict’ as in the original game, this is a function for the user if the choice is to play with higher difficulty if selected as the game will not allow for any mistake or will be game over and the game will re-start again.
* Contact form email send working

### To be implemented
* To add difficulties
* To add an option for having a second player
* To add more retro games to build an arcade of games
* To add a login feature for users to keep the history of their scores


## Technologies used
The languages, frameworks, libraries and other tools utilised for building this retro gaming app are:

* HTML5 - The gaming app uses HTML5 as a fundamental basis for building the app.
* CSS3 - The game app uses CSS3 for the styling of all elements within the website. It is linked from the page to the style.css file and is used for all content, including such as colour pallets, navbar, background, images, title, fonts, etc.
* Bootstrap 4.1.3 - The Bootstrap framework has been used to implement the layout of the game app also used to implement responsiveness and mobile fist design.
* JavaScripts - The game app uses Javascript to provide dynamic interactivity with its users, Javascript provides all the functionalities of the games
* jQuery - The game app uses jQuery to simplify some task, such as DOM manipulation.
* Sweetalert2 - Use for alerts on the memory card game, add more fun and interactivity when playing the game in both cases matching or not matching the cards.
* Email.js - To send emails through the contact form
* Fontawesome - The game uses fontawesome for all icons.
* VScode - Visual Studio Code my IDE of choice for this project.
* Github - Has been used for version control of the code using Git functions and remote storage of the project.
* Google fonts - The game app uses Google fonts for all project fonts.

## Testing
Validators

### Manual test 
Several manual tests were performed to ensure the best possible user experience. 
Various methods of testing have been performed to ensure the best possible user experience. The aim is to check the functionality of the code on different devices (mobile, tablet, desktop) with an overall perspective of the responsive and mobile-first design. The site has been viewed and tested in Firefox, Safari, Chrome and Explorer. The devices used to test the site are iPhone 5/SE, Samsung Galaxy, iPad, iPhone X, iPhone 6/7/8 and Macbook Pro laptop.

Compatibility
Known issues

## Issue List

  | Issue  |                 Description                     |       Solution                      |  
  | ------ |:-----------------------------------------------:|:-----------------------------------:|
  |   1    |Attempted to make both games mobile friendly but was unmanageable at this time|Made for bigger screens, alert the user of this|
  |   2    |Navigation works as expected, scrolling was too agressive |Applied scroll-behavior: smooth; on css and fixed the issue|
  |   3    |Issues when flip card on the memory card game, showing only half the image|Fixed with trasform option in CSS but issues comes back but works in firefox|
  |   4    |Composite chart , Stacked bar chart and Bar graph not scaling correctly on smaller devices |Used viewbox resize to scale correctly |
  |   5    |Dates on Composite Chart X-axis displaying incorrectly (e.g. 1,985)|Function added to bottom of `show_country_year`  to correct this |
  |   6    |Attempted to use Age Range function that would separate the ages Pie Chart into ranges |This did not connect to other charts. Added Age range column to .csv file |
  |   7    |Queue, Crossfilter and and DC.js showing as ‘Undefined’ in main.js tab | `/*global varname*/` added to remove undefined variable errors |
  |   8    |Header image and title took up too much space in responsive views | Changed display to none in media query below tablet resolution |
  |   9    |”Next” and “Last” buttons did not work on Table |Event listener added to these buttons to globally rectify this |
  |   10   |Explorer displaying the charts which use viewbox resizing too small |Decided to leave this, as browser being phased out and rarely used |
  |   11   |Second intro paragraph did not fit on tablet size and was left in row alone | Removed from tablet view using media query |
  |   13   |Table not scaling correctly on smaller devices |Used media query to remove table from smaller devices |
  |   14   |Needed to validate CSS for debugging purposes | Utilised jigsaw.W3 CSS Validator (zero errors) |
  |   15   |Needed to validate JavaScript for debugging purposes | Utilised jshint.com (no errors) |
  |   16   |Needed to validate HTML for debugging purposes | Utilised W3 Markup Validation Service (1 warning) |
  |   17   |HTML Validation warning "Section lacks heading" | This warning can be ignored as does not affect code |
  |   21   |Is HTML self explanatory  | Added further comments to index.html file |
  |   22   |Is app.js self explanatory  | Added detail comments |

## Deployment

* To deploy the project to Github repository the following steps were taken:
* Created master branch in Github repository
* Created a new branch to implement the Simon game feature, once tested and working then merch to the master branch
* Used Local VS code environment to code and build the site
* Committed files to the staging area using zhs terminal commands: git status, add (specify directory), git commit -m “add message”
* Pushed files to the working environment using git push, which updates the repository, it’s also viable as a link (link to GitHub) for cloning, testing on any device and screens.
* Published site from master branch using settings tab in the main page of the repository, select source as a master branch, then save.
* The repository can be cloned by clicking Clone or Download on the main page of the repository
* In the clone with HTTP section, click the click board icon to copy the URL for the repository
* Open Git zhs terminal
* Type git clone, and then paste the URL
* Press Enter. A local clone will be created

### Live Version
The live version of this website is hosted on GitHub Pages and will update as new commits occur.

The method used to deploy this website was as follows:

* In GitHub, navigated to my repository.
* Under my repository, clicked "Settings".
* Under the "GitHub Pages" section, used the Source drop-down menu and selected a publishing source, in this case the Master Branch .
* The website was immediately published and a green tab appeared with a link to the live website.
* The link obtained is the one displaying at the top of this document.

Credits
Content
Media
Audio
Code
Acknowledgements


