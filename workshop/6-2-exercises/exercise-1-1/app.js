// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const btns = document.getElementById('btn-list');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');

function change (event){
    let btnId = document.getElementById(event.target.id);
    switch(btnId){
        case btn1:
            btn1.style.display = 'none';
            break;
        case btn2:
            btn2.style.backgroundColor = 'crimson';
            break;
        case btn3:
            btn3.style.backgroundColor = 'lightblue';
            break;
        case btn4:
            btn4.classList.add('jitters');
            break;
    }
}

btns.addEventListener('click', change);