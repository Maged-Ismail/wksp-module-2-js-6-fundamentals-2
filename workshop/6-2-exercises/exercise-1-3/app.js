// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const btns = document.getElementById('btn-list');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const resetBtn = document.getElementById('reset');


function change(event){
    const btnId = document.getElementById(event.target.id);

    switch (btnId){
        case btn1:
            btn1.style.display = 'none';
            btn1.removeEventListener ('click', change);
            btn1.addEventListener('click', toggle);
            break;
        case btn2:
            btn2.style.backgroundColor = 'crimson';
            btn2.removeEventListener ('click', change);
            btn2.addEventListener('click', toggle);
            break;
        case btn3:
            btn3.style.backgroundColor = 'lightblue';
            btn3.removeEventListener ('click', change);
            btn3.addEventListener('click', toggle);
            break;
        case btn4:
            btn4.classList.add('jitters');
            btn4.removeEventListener ('click', change);
            btn4.addEventListener('click', toggle);
            break;
    }
}

function toggle(){

    const btnId = document.getElementById(event.target.id);

    switch (btnId){
        case btn1:
            btn1.style.display = 'block';
            btn1.removeEventListener ('click', toggle);
            btn1.addEventListener('click', change);
            break;
        case btn2:
            btn2.style.backgroundColor = 'gold';
            btn2.style.opacity ='100';
            btn2.removeEventListener ('click', toggle);
            btn2.addEventListener('click', change);
            break;
        case btn3:
            btn3.style.backgroundColor = 'gold';
            btn3.style.opacity ='100';
            btn3.removeEventListener ('click', toggle);
            btn3.addEventListener('click', change);
            break;
        case btn4:
            btn4.classList.add('jitters');
            btn4.style.backgroundColor = 'gold';
            btn4.style.opacity ='100';
            btn4.removeEventListener ('click', toggle);
            btn4.addEventListener('click', change);
            break;
}
}

function reset(){
    btn1.style.display = 'block';
    btn1.style.backgroundColor ='white';
    btn2.style.backgroundColor ='white';
    btn3.style.backgroundColor = 'white';
    btn4.style.backgroundColor = 'white';
    btn4.classList.remove('jitters');
}
for (let i=1; i<5; i++){
    let ev = document.getElementById(`btn-${i}`);
    ev.addEventListener('click', change);
}
resetBtn.addEventListener('click', reset);