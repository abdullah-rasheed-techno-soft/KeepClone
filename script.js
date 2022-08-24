displayNotes();
const textarea = document.querySelectorAll("textarea");
textarea.forEach((area) =>
  area.addEventListener(
    "input",
    (e) => {
      const scHeight = e.target.scrollHeight;
      area.style.height = `${scHeight}px`;
    },
    area.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        area.value = area.value.trim();
        const scHeight = 21;
        area.style.height = `${scHeight}px`;
      }
    })
  )
);
function sidebarAdjust() {
  const sideElements = document.querySelectorAll(".sidebar-text");
  console.log(sideElements);
  sideElements.forEach(function (element, index) {
    console.log(element);
  });

  // sideElements.forEach((Elements) => {
  //   if (Elements.style.display == "none") {
  //     Elements.style.display = "block";
  //   } else {
  //     Elements.style.display = "none";
  //   }
  // });
}
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
  else {
    closingNote();
  }
});

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
  const note1 = document.querySelector("#take-a-note");
  const note2 = document.querySelector("#close-a-note");
  let textarea = document.querySelector("#title_input");

  note1.style.display = "none";
  note2.style.display = "block";
  textarea = textarea.focus();
}
function closingNote() {
  const title = document.querySelector("#title_input");
  const desc = document.querySelector("#note_input");
  const notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  if (title.value !== "" || desc.value !== "") {
    // notesObj.push([title.value, desc.value]);
    notesObj = [[title.value, desc.value], ...notesObj];

    console.log(notesObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
  }

  const textarea = document.querySelectorAll("textarea");
  textarea.forEach((area) => {
    area.style.height = "21px";
    area.value = "";
    displayNotes();
  });

  const note1 = document.querySelector("#take-a-note");
  const note2 = document.querySelector("#close-a-note");

  note1.style.display = "block";
  note2.style.display = "none";
}
function displayNotes() {
  const notes = localStorage.getItem("notes");
  let notesObj = [];
  if (notes !== null) {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div
    class="card noteCard mb-2 me-2 pb-0"
    style="width: 15.2rem; border: 1px solid #e0e0e0"
  >
    <div class="card-body">
      <h6 class="card-title">${element[0]}</h6>
      <p class="card-text mb-1">${element[1]}</p>
      <img
      src="/img/trash.png"
      width="20"
      height="20"
      alt=""
      srcset=""
      class="delete-option opacity-75"
      id="${index}"
      onclick="deleteNote(this.id)"

    />
    </div>
  </div>`;
  });
  const notesElm = document.getElementById("notes-area");
  if (notesObj.length != 0) {
    // location.reload();
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
//delete
function deleteNote(index) {
  const notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  displayNotes();
}
// search functionality
const search = document.getElementById("search_input");
search.addEventListener("input", function () {
  const inputVal = search.value.toLowerCase();
  const noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    const title = element.getElementsByTagName("h6")[0].innerText;
    const desc = element.getElementsByTagName("p")[0].innerText;
    const note1 = document.querySelector("#take-a-note");
    const notesarea = document.querySelector("#notes-area");

    if (search.value !== "") {
      note1.style.display = "none";
      notesarea.classList.add("mt-5");
    } else {
      note1.style.display = "block";
      notesarea.classList.remove("mt-5");
    }
    if (title.includes(inputVal) | desc.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});
