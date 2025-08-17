const taskInput=document.getElementById('taskInput');
const addBtn=document.getElementById('addBtn');
const taskList = document.getElementById("taskList");
//add task
addBtn.addEventListener("click", () => {

      const taskText = taskInput.value.toUpperCase(0).trim();
      if (taskText === ""){
        return

      };

const li = document.createElement("li");    //create li element


  const  span = document.createElement("span");    //create li span 
  const  btngroup=document.createElement("div");


   const    deletebtn=document.createElement("button");//create delete button
   const    editbtn=document.createElement("button");    //create  edit btn

        span.textContent=taskText;
      deletebtn.textContent="Delete";//write text inside the button
      editbtn.textContent="Edit";




        li.appendChild(span);

       btngroup.appendChild(editbtn);
       btngroup.appendChild(deletebtn);
       li.appendChild(btngroup);
        taskList.appendChild(li);
       taskInput.value = "";
        btngroup.classList.add("btngroup");

        editbtn.classList.add("editBtn");
        deletebtn.classList.add("deleteBtn");






//delete btn
    //    deletebtn.classList.add("deletebtn");//give css class to the button
       deletebtn.addEventListener("click", () => {
        // taskList.removeChild(li);
        // taskList.remove(li);
        li.remove();

        
       });
       //edit btn
    //    editbtn.classList.add("editbtn");

       editbtn.addEventListener("click",()=>{

            newTask = prompt("Edit task:", span.textContent);
            if (newTask !== null && newTask.trim() !== "") {

                span.textContent = newTask;}

        })




       

       })