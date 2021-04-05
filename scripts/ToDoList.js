class ToDoList{
    constructor(){
        this.list = []
        this.htmlListElements = []
    }

    addItem(item){
        this.list.push(item)
    }

    debug(){
        var temp = ""
        for (var i = 0; i < this.list.length; i++) {
            temp += this.list[i] + ","
        }
        alert(temp)
    }

    display(){
        for(var i = 0; i < this.htmlListElements.length; i++){
            this.htmlListElements[i].remove()
        }

        for (var i = 0; i < this.list.length; i++) {
            var para = document.createElement("p")
            para.appendChild(document.createTextNode(this.list[i]))            
            listElement.appendChild(para)
            this.htmlListElements.push(para)
        }
    }


}

const submitBtn = document.querySelector('[data-submit]')
const inputField = document.querySelector('[data-input]')

const toDoList = new ToDoList()
const listElement = document.querySelector('[data-list]')

submitBtn.addEventListener('click', button =>{
    toDoList.addItem(inputField.value)   
    toDoList.display()
    inputField.value = ""
})