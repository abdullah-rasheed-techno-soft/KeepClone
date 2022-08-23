displayNotes();
const textarea = document.querySelectorAll("textarea");
textarea.forEach((area) =>
  area.addEventListener(
    "input",
    (e) => {
      let scHeight = e.target.scrollHeight;
      area.style.height = `${scHeight}px`;
    },
    area.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        area.value = area.value.trim();
        let scHeight = 21;
        area.style.height = `${scHeight}px`;
      }
    })
  )
);
function clearText(id) {
  const searchInput = document.querySelector(id);
  searchInput.value = "";
}
const searchInput = document.querySelector("#search_input");
searchInput.addEventListener("input", (e) => {
  const closed = document.querySelector(".close");
  if (searchInput.value) {
    closed.style.display = "inline-flex";
  } else {
    closed.style.display = "none";
  }
});

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
  let note1 = document.querySelector("#take-a-note");
  let note2 = document.querySelector("#close-a-note");
  let textarea = document.querySelector("#title_input");

  note1.style.display = "none";
  note2.style.display = "block";
  textarea = textarea.focus();
  // textarea.setAttribute("style", "background-color:red;");

  // document.getElementById("title_input").autofocus = "true";
}
function closingNote() {
  let title = document.querySelector("#title_input");
  let desc = document.querySelector("#note_input");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  if (title.value !== "" || desc.value !== "") {
    notesObj.push([title.value, desc.value]);

    localStorage.setItem("notes", JSON.stringify(notesObj));
  }

  const textarea = document.querySelectorAll("textarea");
  textarea.forEach((area) => {
    area.style.height = "21px";
    area.value = "";
    displayNotes();
  });

  let note1 = document.querySelector("#take-a-note");
  let note2 = document.querySelector("#close-a-note");

  note1.style.display = "block";
  note2.style.display = "none";
}
function displayNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div
    class="card mb-2 me-2 pb-4"
    style="width: 15.2rem; border: 1px solid #e0e0e0"
  >
    <div class="card-body">
      <h6 class="card-title">${element[0]}</h6>
      <p class="card-text">${element[1]}</p>
    </div>
  </div>`;
  });
  let notesElm = document.getElementById("notes-area");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<div class="col d-flex flex-column align-items-center mt-5 pt-5 pe-5">
            <img
            src="/img/bulb.png"
            width="100"
            height="100"
            alt=""
            srcset=""
            class="mt-4 me-5 opacity-25"
          />
          <h4 class="mt-3 me-5" style="color: #808688">
            Notes you add appear here
          </h4>
        </div>`;
  }
}
