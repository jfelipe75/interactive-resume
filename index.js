// Menu's display code.

// store the menu button html element in a variable.
const menuButton = document.querySelector('.menu-button');
const menuDropdown = document.querySelector('.menu-dropdown');

menuButton.addEventListener('click', () => {
    //toggle the display of the dropdown menu.
    menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
})

// Close the menu if the user clicks anywhere else
document.addEventListener('click', (event) => {
    if(!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
        menuDropdown.style.display = 'none';
    }
});


// Wrap JS code on an eventListener of type DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
// store all instances of class .section-title in an array like structure(not an array).
    const sectionTitle = document.querySelectorAll('.section-title');
// Implement the forEach method to give all the titles in the .section-title class the select and unselect functionality.
sectionTitle.forEach(title => {
    // handleEvent function to keep section titles in their default state as long as user doesn't mouseover their text content.
    const unselectElement = (event)  => {
        event.target.style.fontWeight = window.getComputedStyle(event.target).fontWeight;
        event.target.style.color = "black"
    } 
    
    title.addEventListener('mouseout', unselectElement)
    
    // handleEvent function that makes h2 bolder and changes its color to blue when an user hovers the mouse over h2 text.
    const selectElement = (event) => {
        event.target.style.fontWeight = "bold"
        event.target.style.color = "blue"
    } 
    
    title.addEventListener('mouseover', selectElement);
  
})

// handleEvent function that adds text content to professional summary if user clicks on h2 text.
const addProSummaryText = (event) => {
    const sectionContent = document.querySelector('.section-content');
    if(sectionContent.value) { // if section content value is a boolean value true.
        sectionContent.value = false;  // then reassign section value to boolean false.
        sectionContent.textContent = '';
    } else { // else if section content value is NOT a boolean value true.
       
        sectionContent.value = true; // then reassign section content value to true.

       sectionContent.textContent = `My name is Juan Felipe, though I prefer to go by Felipe. I'm someone who's deeply passionate about 
       learning. From a young age, I've enjoyed the process of practicing and improving to master new skills. Growing up, I developed a 
       love for rock music, largely thanks to my dad, a devoted Guns N' Roses fan. I was fascinated by how effortlessly musicians seemed to 
       play their instruments, and I became determined to teach myself the guitar. The more I practiced, the more I improved, and the joy 
       of entering a flow state kept me practicing for hours on end. Encouraged by my progress with the guitar, I decided to learn the piano
       as well. Little did I know that this journey would eventually lead me to where I am today. A few years ago, I had a conversation with
       a software engineer who had recently graduated from college. He shared some of the personal projects he'd worked on during his 
       studies, and I was blown away. His work sparked a flood of questions in my mind, and he recommended I try Harvard's CS50 online 
       course as a starting point. As I dove into the course, I became captivated by computer science. This interest led me to earn a 
       certification in the field from Stanford University, and eventually, it brought me to web development. Currently, I'm enrolled in a 
       web development program sponsored by Marcy Labs School, where I'll accumulate over 2,000 hours of technical practice. It's been an 
       exciting and rewarding journey, and I'm eager to continue learning and growing in this field.` // and reassign text content to section content.
    } 
}

// event listener on h2 tracking an event of type click.
document.querySelector('#personal-summary').addEventListener('click', addProSummaryText);

    // store the divs sharing the class .experience-items in a variable.
    const experienceItems = document.querySelectorAll('.skill-item');  // experienceItems = [<div>, <div>];
    // iterate through all divs containing experience items.
    experienceItems.forEach((item, index, arr) => {
        // handleEvent function that removes and adds divs contents sharing the class .experience-item.
        const toggleExperienceContent = (event) => {
        // use index number of each item to assign the correct text content to each div.
        if (index === 0) {
             // for each item, if their value is true then reassign the value to false and remove the current div.
            if (item.value) {
               item.value = false;
               item.innerHTML =  ''
             } else { // else if items value is false then reassign its value to true and add all text content.
               item.value = true;
               // adds h3 element to current item.
               const h3 = document.createElement('h3');
               h3.textContent = 'Programming Languages:';
               item.append(h3);
               // adds ul element to current item.
               const ul1 = document.createElement('ul');
               item.append(ul1);
               // adds li element
               const li11 = document.createElement('li');
               li11.textContent = 'JavaScript';
               // append list item to unordered list.
               ul1.append(li11);
               // adds li element
               const li12 = document.createElement('li');
               li12.textContent = 'C';
               // append list item to unordered list.
               ul1.append(li12);
             }
        } 
        // if index 1

        if(index === 1) {
                if (item.value) {
                   item.value = false;
                   item.innerHTML = '';
              } else { // else if items value is false then reassign its value to true and add all text content.
                item.value = true;
                // adds h3 element to current item.
                const h32 = document.createElement('h3');
                h32.textContent = "Front-end Development:";
                item.append(h32);
                // adds ul element to current item.
                const ul2 = document.createElement('ul');
                item.append(ul2);
                // adds li element
                const li21 = document.createElement('li');
                li21.textContent = 'HTML';
                // append list item to unordered list.
                ul2.append(li21);
                // adds li element
                const li22 = document.createElement('li');
                li22.textContent = `CSS`;
                // append list item to unordered list.
                ul2.append(li22);
                // adds li element
                const li23 = document.createElement('li');
                li23.textContent = 'React'
                // append li element
                ul2.append(li23);
                // adds li element
                const li24 = document.createElement('li')
                li24.textContent = 'Node.js'
                // append li element
                ul2.append(li24);
              }
        }
        if (index === 2) {
            if (item.value) {
               item.value = false;
               item.innerHTML = '';
          } else { // else if items value is false then reassign its value to true and add all text content.
            item.value = true;
            // adds h3 element to current item.
            const h33 = document.createElement('h3');
            h33.textContent = "Version Control:";
            item.append(h33);
            // adds ul element to current item.
            const ul3 = document.createElement('ul');
            item.append(ul3);
            // adds li element
            const li31 = document.createElement('li');
            li31.textContent = 'Git';
            // append list item to unordered list.
            ul3.append(li31);
            // adds li element
            const li32 = document.createElement('li');
            li32.textContent = `GitHub`;
            // append list item to unordered list.
            ul3.append(li32);
          }      
    }
    if (index === 3) {
        if (item.value) {
           item.value = false;
           item.innerHTML = '';
      } else { // else if items value is false then reassign its value to true and add all text content.
        item.value = true;
        // adds h3 element to current item.
        const h34 = document.createElement('h3');
        h34.textContent = "Languages:";
        item.append(h34);
        // adds ul element to current item.
        const ul4 = document.createElement('ul');
        item.append(ul4);
        // adds li element
        const li41 = document.createElement('li');
        li41.textContent = 'Spanish (native)';
        // append list item to unordered list.
        ul4.append(li41);
        // adds li element
        const li42 = document.createElement('li');
        li42.textContent = `Italian (proficient)`;
        // append list item to unordered list.
        ul4.append(li42);
      }      
    } 
  }
  document.querySelector('#skills').addEventListener('click', toggleExperienceContent);
});

// change Hobbies section display from none to block if the user clicks on its section-title.
// First let's write our handle event() func
const toggleHobbiesVideos = (event) => {
    // create variable to store video grid container.
    const videoGrid = document.querySelector('.video-grid');
    // If event's target value is 'true' then set it to false and make videogrid invisible.
    if (event.target.value) {
        event.target.value = false;
        // The display property is changed to none so videogrid is not visible
        videoGrid.style.display = 'none' // hides videogrid

        // else if event's target value is not true then set it to true and make the videogrid visible
    }else {
        event.target.value = true;
        videoGrid.style.display = 'grid';
    }
}

// add event listener to section title hobbies.
document.querySelector('#hobbies').addEventListener('click', toggleHobbiesVideos);

// Toggle youtube's button visibility if user clicks on h2 "Why You Should Hire Me!".

// First let's write our handleEvent() func

const toggleYoutubeButtonVisibility = (event) => {
    // create variable to store html element button with the class of ".youtube-button".
    const youtubeButton = document.querySelector('.youtube-button');
    // If event's target value is 'true' then set it to false and make youtube button not visible to user.
    if (event.target.value) { 
        event.target.value = false;
        // The display property hides the button entirely and removes it from the document layout.
        youtubeButton.style.display = 'none' // Hide the button. 
   
    // else if event's target value is not true then set it to true and make the youtube button visible to the user.
    } else {
        event.target.value = true;
        youtubeButton.style.display = 'block' // Show the button.
    }
}

// Add event listener to section title with id of "#why-hire-me"

document.querySelector('#why-hire-me').addEventListener('click', toggleYoutubeButtonVisibility);

// handleEvent func to make the form display visible or invisible if an user clicks on it's section's title.

const toggleFormVisibility = (event) => {
    // create variable to store html element form with the class of ".contact-me-form".
    const form = document.querySelector('.contact-me-form');
    // If event's target value is 'true' then set it to false and make form not visible to user.
    if (event.target.value) { 
        event.target.value = false;
        // The display property hides the form entirely and removes it from the document layout.
        form.style.display = 'none' // Hide the button. 
   
    // else if event's target value is not true then set it to true and make the form visible to the user.
    } else {
        event.target.value = true;
        form.style.display = 'block' // Show the button.
    }
}
 // Event lister tracking event of type click on section title "contact-me"

 document.querySelector('#contact-me').addEventListener('click', toggleFormVisibility);

 // Retrieve data when form .contact-me-form 
 // first we're going to create a variable to store the history of form data values
 let formHistory = [];
 //  we're going to make a hadleEvent() func to set the behavior we want when a form is submitted
 
 const retrieveFormData = (event) => {   
    
    event.preventDefault(); // prevent the form from submitting

    // retrieve the form data
       const name = document.querySelector("#name").value;
       const email = document.querySelector("#email").value;
       const message = document.querySelector("#message").value;
       // if none of the form values are undefined then submit the form, otherwise form has default behavior
       if (name === '' || email === '' || message === '') {
          alert("Please fill in all the fields before submitting the form.")
          return;
       }

        // display the data in the console
       const formData = { name, email, message }; // stores data in variable
       console.log("Stored form data:", formData);
       // store the current submission into formHistory variable
       formHistory.push(formData);
       console.log('Form History:', formHistory);
       

       // reset form
       const form = document.querySelector('.contact-me-form');
       form.reset()
       // add "Message was sucessfully sent" text at the bottom of the form.
       const p = document.createElement('p')
       p.id = "submission-completed"
       p.textContent = 'Message was successfully sent'
       form.append(p);
       // reset the message after 3.5 seconds
       setTimeout(() => {
         p.textContent = ''
       }, 3500)

 };

 document.querySelector('#submit-button').addEventListener('click', retrieveFormData);
 
 
});
 

