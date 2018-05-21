var newInput = document.getElementById("textNewNote");
var addBtn = document.getElementById("addNewNote");
var string = newInput.value;
var checkBtns = document.querySelectorAll(".checkout");
var deleteBtns = document.querySelectorAll(".del");

// for typing "ENTER" to generate new note event
newInput.addEventListener("keydown",function(e){
    if(e.key == "Enter"){
      string = newInput.value;
      if(!string || string == "Write something..."){
        newInput.value = "Write something...";
        return;
      }
      generateNote(string);
    }
  }
);

// for clicking "+" to generate new note event
addBtn.addEventListener("click",function(){
  string = newInput.value;
  if(!string || string == "Write something..."){
    newInput.value = "Write something...";
    return;
  }
   generateNote(string);
});

// delete note event
deleteBtns.forEach(del => del.addEventListener("click",deleteList));

// check note event
checkBtns.forEach(checkout => checkout.addEventListener("click",checkList));

// new note function
function generateNote(_string){
  var _todolist = document.getElementById("todolist");
  var newNote = document.createElement("div");
  var newCheckBtn = document.createElement("button");
  var newText = document.createElement("textarea");
  var newDeleteBtn = document.createElement("button");


  newNote.classList.add("note");
  newCheckBtn.classList.add("far");
  newCheckBtn.classList.add("fa-square");
  newDeleteBtn.classList.add("fas");
  newDeleteBtn.classList.add("fa-trash");

  newCheckBtn.onclick = checkList;
  newDeleteBtn.onclick = deleteList;

  newText.value = _string;
  newNote.appendChild(newCheckBtn);
  newNote.appendChild(newText);
  newNote.appendChild(newDeleteBtn);

  _todolist.insertBefore(newNote,_todolist.lastElementChild);

}

// delete list function
function deleteList(){
  this.parentElement.parentElement.removeChild(this.parentElement);
}

// check list function
function checkList(){
  var _todolist = document.getElementById("todolist");
  var _finish = document.getElementById("finish");

  if(this.parentElement.parentElement.id === "todolist"){
    _finish.insertBefore(this.parentElement,_finish.lastElementChild);
  }
  else if(this.parentElement.parentElement.id === "finish"){
    _todolist.insertBefore(this.parentElement,_todolist.lastElementChild);
  }
  else{
    alert("Error!!");
  }
  checkbox(this);
}

// modify checkbox by changing classname of fontawesome
function checkbox(_checkbox){
  if(_checkbox.classList.contains("fa-square")){
    _checkbox.classList.remove("fa-square");
    _checkbox.classList.add("fa-check-square");
  }
  else if(_checkbox.classList.contains("fa-check-square")){
    _checkbox.classList.remove("fa-check-square");
    _checkbox.classList.add("fa-square");
  }
  else{
    alert("Error!!");
  }
}
