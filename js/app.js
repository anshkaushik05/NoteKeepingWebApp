// Constants
const AddNoteBtn=document.querySelector("#addNote");
const allNotes=document.getElementById("allNotes");
var Text=document.getElementById("addTxt"); 
var NotesStorage =localStorage.getItem("Notes");

//showing Notes Before This Session
showAllNotes();


// Event Listener
AddNoteBtn.addEventListener("click",()=>{
    //Variables
    let NotesStorage =localStorage.getItem("Notes");
    var NotesArray;

    // Retrieving Previous Stored Data
    if(NotesStorage === null){
        NotesArray=[];
    }
    else{
        NotesArray=JSON.parse(NotesStorage);
    }

    //Adding New Data to Storage
    if(Text.value !== ""){
        NotesArray.push(Text.value);
        // console.log(NotesArray);
        localStorage.setItem("Notes",JSON.stringify(NotesArray));
        Text.value= "";
        //Manuplating Dom To Show Notes
         showAllNotes();
    } 
//    console.log(localStorage.getItem("Notes"));
    
    
})


//To show All the notes added in local Storage
function showAllNotes(){
    let NotesStorage =localStorage.getItem("Notes");
    var NotesArray=JSON.parse(NotesStorage);
    if(NotesStorage === null){
        allNotes.innerHTML=`<h5>No Notes Added</h5>`
    }
    else{
        var Noteshtml="";
        NotesArray.forEach( function(element ,index){

            Noteshtml+=`<span class="card-body my-2 mx-2" style="width: 20rem; background: #e6e6e6; border-radius:0.5vw;">
                <h5 class="card-title">Notes ${index +1} </h5>
                <p class="card-text">${element}</p>
                <button id=${index} onclick="DeleteNote(${index})" class="btn btn-primary">Delete Note</button>
            </span>`;
        });
        allNotes.innerHTML=Noteshtml;
    }
}

//function to Delete Existing Notes
function DeleteNote(index){
    let NotesStorage =localStorage.getItem("Notes");
    var NotesArray=JSON.parse(NotesStorage);

    //deleting from Data Array
    NotesArray.splice(index,1);

    //updating local Storage
    localStorage.setItem("Notes",JSON.stringify(NotesArray));

    //Updating Web Page
    showAllNotes();
}