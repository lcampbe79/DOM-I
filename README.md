# DOM I - JavaScript Content Management System

## Project Description
You are going to be emulating a content managment system by controlling the content in the JavaScript file instead of the HTML file. This project is an excercise pointed at selecting elements and then updating them without touching the HTML file using the DOM.

You have been provided a [JSON object](js/index.js) with all the necessary data to accomplish this task.  Use dot or bracket notation to traverse the data provided.

**ONE RULE: You cannot update the HTML or CSS files directly.  You must use JavaScript and the DOM only for your tasks today.**

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [X] Create a forked copy of this project.
* [X] Add your project manager as collaborator on Github.
* [X] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [X] Create a new branch: git checkout -b `<firstName-lastName>`.
* [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [X] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
* [X] Add your project manager as a reviewer on the pull-request
* [X] Your project manager will count the project as complete by merging the branch back into master.

## Task 1: Create selectors to point your data into elements
* [X] Create selectors by using any of the DOM element's methods
* [X] Note that IDs have been used on all images.  Use the IDs to update src path content

## Task 2: Update the HTML with the JSON data
* [X] Remember, NO direct updating of the HTML source is allowed.
* [X] Using your selectors, update the content to match the example file.
* [X] Remember to update the src attributes on images

## Task 3: Add new content
* [X] Change the color of the navigation text to be green.
* [X] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.

## Stretch Goals
* [ ] Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.  
* [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

## Stretch Project: Digital Timer
This project is heavier on logic but employs some DOM manipulation to achieve it's goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get. 