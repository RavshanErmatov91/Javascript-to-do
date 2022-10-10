window.addEventListener('load', () =>{
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")

    form.addEventListener('submit', (e) =>{
        e.preventDefault()

        const task =input.value
       

        if(!task){
            alert("Please fill out the task")
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task__content__el = document.createElement("div");
        task__content__el.classList.add("content");

        task_el.appendChild(task__content__el);

        const task_input_el = document.createElement("input")
        task_input_el.classList.add("text")
        task_input_el.type  = "text"
        task_input_el.value = task
        task_input_el.setAttribute('readonly', 'readonly')

        task__content__el.appendChild(task_input_el)

        const task_actions_el = document.createElement("div")
        task_actions_el.classList.add("actions")

        const task_edit_el = document.createElement("button")
        task_edit_el.classList.add("button")
        task_edit_el.innerHTML = "Edit"

        const task__delete__el = document.createElement("button")
        task__delete__el.classList.add("button")
        task__delete__el.innerHTML = "Delete"

        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task__delete__el)

        task_el.appendChild(task_actions_el)

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click' , ()=>{
            if(task_edit_el.innerText.toLocaleLowerCase()== "edit"){
                task_input_el.removeAttribute("readonly")
                task_input_el.focus()
                task_edit_el.innerText = "Save"
            }
            else{
                task_input_el.setAttribute("readonly", "readonly")
                task_edit_el.innerText = "Edit"
            }
        })
        task__delete__el.addEventListener("click", ()=>{
            list_el.removeChild(task_el)
        })
    })


})