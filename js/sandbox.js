document.addEventListener("DOMContentLoaded", () => {


// =================================================
    let text = ` \ hello there, \
 how are you + \
  `;


    let content = `
<!--        Box 1-->
    <div class="bg-primary w-25 p-3">
        <h2>This is box 1</h2>
        <img src="https://baconmockup.com/450/300/" alt="">
    </div> 
        <!--     Box 2  -->
     <div class="bg-success w-25 p-3">
     <h2>This is box 2</h2>
     <img src="https://baconmockup.com/450/300/" alt="">
     </div>
     <!--     Box 3-->
     <div class="bg-warning w-25 p-3">
        <h2>This is box 3</h2>
        <img src="https://baconmockup.com/450/300/" alt="">
     </div>
`;

    let image = `<img src="https://baconmockup.com/450/300/" alt=""> <br> <h2>Hello World! :)</h2>`;


    let h2 = document.querySelector('.test-text');  // H2 in DOM
    h2.innerHTML = text;

    let parentDiv = document.querySelector('.test-box'); // Selecting parent element in DOM
    let parentDiv2 = document.getElementsByClassName("test-box");
// parent.appendChild(el);
// Create new element
// let newChildDiv = document.createElement('');
    console.log(content);

    parentDiv.innerHTML += content; // Sending my html to the test box on the DOM
// parentDiv2.innerHTML = image; // Sending my html to the test box on the DOM
// Append the created markup to the DOM
//     document.body.appendChild(parentDiv2);

    parentDiv.insertAdjacentHTML('beforeend', image); // WORKS!!

// ===================================================================================
//     Playing with movies from movie api
    let movieBox = document.querySelector('.movie-box'); // Select movie-box div



}); // End of Dom load eventlistener


