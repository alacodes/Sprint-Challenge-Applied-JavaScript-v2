# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to compconste this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager
1. What is the DOM?
 *****ANSWER*****
 While the DOM and HTML are related, they are not the same thing. The Document Object Model is a tree structure made up of nodes that can be made into different things with different properties and methods. It helps us access and manipulate web pages because the DOM is a live data structure. This means when it's modified, the user's screen is updated to reflect the changes immediately.
2. What is an event?
*****ANSWER*****
An event can be any interaction with a user that triggers something in our code to add features or modify existing ones during that specific user's experience. These triggers can be mouse clicks, drag and dropping, scrolling, and a number of other things. 
Source: https://learn.lambdaschool.com/fsw/module/recJWv3RIfa4NFXbn/
3. What is an event listener?
*****ANSWER*****
Event listeners are specific user actions that certain elements are designed to look for. When the event occurs, a programmed response/reaction will occur. An example would be a mouse moving off of the main window triggering a pop-up asking the user to sign up for a mailing list.
Source: https://idratherbewriting.com/events-and-listeners-javascript/
4. Why would we convert a NodeList into an Array?
*****ANSWER*****
Event listeners are specific user actions that certain elements are designed to look for. When the event occurs, a programmed response/reaction will occur. An example would be a mouse moving off of the main window triggering a pop-up asking the user to sign up for a mailing list.
Source: https://idratherbewriting.com/events-and-listeners-javascript/
5. What is a component?
*****ANSWER*****
Components are put together by developers to make parts of their HTML, CSS, and JS reusable. 
Source: https://learn.lambdaschool.com/fsw/module/rec847sNXZX9CVDNl/

### Git Set up

* [x] Fork the project into your GitHub user account
* [x] Clone the forked project into a directory on your machine
* [x] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [x] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [x] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled it. DO NOT add any code to the HTML file itself.

* [ ] Following the instructions in the `Header/index.js` file, create the Header component. 

* [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to compconste it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Compconste the carousel functionality in `Carousel.js`

* [ ] If you compconste the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
