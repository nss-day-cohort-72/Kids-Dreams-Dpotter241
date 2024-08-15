# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The module with the event listener is "Kids.js". 
   Starting on line 5, the event listener is looking for clicks on the entire webpage.
   document.addEventListener(
    "click",
    (clickEvent) => {
        // Event handler logic
    }
   )
   Then, my event handling logic looks to identify what the clicked element was. 
   const itemClicked = clickEvent.target
   It checks for the relevant data attribute I assigned it (in this case, if the item clicked on was "child") to if that attribute was clicked on. 
   if (itemClicked.dataset.type === "child")
   Once the event listener has confirmed it was a member of the child data set, it retrieved the child's Id from the data-id
   const kidId = parseInt(itemClicked.dataset.id)
   then it looks through my database for the corresponding child. It does this by iterating over the "children" array to find the child with the matching ID. 
   for (const kid of children) {
    if (kid.id === kidId) {
        // Logic to handle the found child
    }
   }
   I use that ID and the information listed with the child, to fill in my window.alert that appears with the child's name and their wish 
   window.alert(`${kid.name}'s wish is for ${itemClicked.dataset.wish}`)


2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > The for...of loop ensures that the code can correctly match each child with their corresponding celebrity. To start, the for...of loop iterates through each 'kid' in the 'kids' array. Within each iteration, 'findCelebrityMatch(kid, celebrities)' is called to find the celebrity that matches the 'celebrityId' associated with the current 'kid'. After finding the match, the html string for that pairing is constructed and added to my 'html' variable. Once all the pairings are processed, the final HTML string is returned, containing a list of the kids and their celebrities. 
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > When a user clicks on the list item, my eventlistener checks if the clicked element was a celebrity by referencing itemClicked.dataset.type. Next, the data-id and data-sport attributes of the clicked element are accessed with const celebrityId = parseInt(itemClicked.dataset.id) and  const celebritySport = itemClicked.dataset.sport. Data-id is used to identify which celebrity was clicked, and data-sport provides the sports information. the for...of loop iterates through the celebrities array to find the object that matches the clicked celebrity's ID. Then the 'window.alert' displays the name of the celebrity and the sport. Since ${celebritySport} is obtained from data-sport, it directly shows the sport information
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > First, I import my modules
  // import { Pairings } from "./Pairings.js"
   import { Celebrities } from "./CelebrityList.js"
   import { Kids } from "./Kids.js"//
   these lines import the functions Pairings, CelebrityList, and Kids from their respective modules. These will generate HTML content for different parts of the main.js code

   Then, I select the main container
  // const mainContainer = document.querySelector("#container") //
   This selects the DOM element with the ID 'Container' and stores it in the mainContainer variable. This will insert the generated HTML into the webpage

   Next, I define the application
  //const applicationHTML = `
    <h1>Make a Memory for Kids</h1>//

   this displays the main title of the page
   //
      <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>
   //
   this contains sections for kids and celebrities, creating the list by calling on the Kids, and Celebrities functions I imported earlier

 Finally, I inject HTML into the main container
// mainContainer.innerHTML = applicationHTML //
This code sets the 'innerHTML' property of the 'mainContainer' element to the 'applicationHTML' string. It inserts the generated HTML content into the webpage, giving me my structure with lists for kids, celebrities, and their pairings
