function textareaInput() {
  alert("ddd");
  const textarea = document.querySelector("textarea");

  textarea.addEventListener("input", (e) => {
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
  });
}
const box = document.querySelector(".taking-note");
document.addEventListener("click", function (event) {
  if (event.target.closest(".taking-note")) return;
  closingNote();
});
// document.addEventListener("DOMContentLoaded", function (event) {
//   const showNavbar = (toggleId, navId, bodyId) => {
//     const toggle = document.getElementById(toggleId),
//       nav = document.getElementById(navId),
//       bodypd = document.getElementById(bodyId);
//     // headerpd = document.getElementById(headerId);

//     // Validate that all variables exist
//     if (toggle && nav && bodypd) {
//       toggle.addEventListener("click", () => {
//         // show navbar
//         nav.classList.toggle("show");
//         // change icon
//         toggle.classList.toggle("bx-x");
//         // add padding to body
//         bodypd.classList.toggle("body-pd");
//         // add padding to header
//         // headerpd.classList.toggle("body-pd");
//       });
//     }
//   };

//   showNavbar("header-toggle", "nav-bar", "body-pd");

//   /*===== LINK ACTIVE =====*/
//   const linkColor = document.querySelectorAll(".nav_link");

//   function colorLink() {
//     if (linkColor) {
//       linkColor.forEach((l) => l.classList.remove("active"));
//       this.classList.add("active");
//     };
//   }
//   linkColor.forEach((l) => l.addEventListener("click", colorLink));

//   // Your code to run since DOM is loaded and ready
// });
var btnContainer = document.getElementById("SidebarUL");
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("Item");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName(" active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function clickingNote() {
  document.querySelector("#inn").innerHTML = `   <div
class="container-fluid taking-note p-0 w-75 align-items-center"
>
<div class="container d-flex">
  <div class="container-fluid col-11 py-2">
 
    <textarea
    type="text"
    id="title_input"
    name="note_input"
    placeholder="Title"
    style="width: 100%"
    
    rows="1"
  ></textarea>
  </div>
  <div
    class="container-fluid col-1 p-0 d-flex justify-content-center"
  >
    <div class="box2 p-2" title="Pin Note">
      <img src="/img/pin.png" alt="" />
    </div>
  </div>
</div>
<div class="container d-flex">
  <div class="container-fluid col-12 py-2">
    <textarea
      type="text"
      id="note_input"
      name="note_input"
      placeholder="Take a note..."
      style="width: 100%"
      onclick="textareaInput()"
      rows="1"
    ></textarea>
  </div>
</div>
<div class="container d-flex">
  <div class="container d-flex justify-content-end">
    <button
      onclick="closingNote()"
      type="button"
      class="btn btn mb-1"
      style="border: none"
    >
      Close
    </button>
  </div>
</div>
</div>`;
}
function closingNote() {
  document.querySelector("#inn").innerHTML = ` <div
  class="container-fluid taking-note p-0 w-75 d-flex align-items-center"
>
  <div class="container-fluid col-9 py-2 hello"  onclick="clickingNote()">
    <input
      type="text"
      id="note_input"
      name="note_input"
      placeholder="Take a note..."
      style="width: 100%"
    />
  </div>
  <div
    class="container-fluid col-3 p-0 d-flex justify-content-around"
  >
    <div class="box2 p-2" title="New List">
      <img src="/img/newlist.png" alt="" />
    </div>
    <div class="box2 p-2" title="New note with drawing">
      <img src="/img/brush.png" alt="" />
    </div>
    <div class="box2 p-2 me-1" title="New note with image">
      <img src="/img/image.png" alt="" />
    </div>
  </div>
</div>`;
}
