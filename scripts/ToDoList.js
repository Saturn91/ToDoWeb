class ToDoList{
    constructor(){
        this.list = []
        this.htmlListElements = []
        this.doneList = []
        this.htmlDoneListElements = []
    }

    addItem(item){
        this.list.push(item)
    }

    deleteItem(index, div){
        this.htmlListElements.splice(index,1)
        this.list.splice(index,1)
        div.remove()
    }

    itemDone(index){
        this.doneList.push(this.list[index])
    }

    debug(){
        var temp = ""
        for (var i = 0; i < this.list.length; i++) {
            temp += this.list[i] + ","
        }
        alert(temp)
    }

    display(){
        //clear list
        for(let i = 0; i < this.htmlListElements.length; i++){ //use let as it is kinda private and the the value of it is used in the add event section and not "i" as a reference...
            this.htmlListElements[i].remove()
        }

        if(this.list.length === 0 && toDoTitle != undefined){
            toDoTitle.remove()
            toDoTitle = undefined
        }

        if(this.list.length > 0 && toDoTitle === undefined){
            toDoTitle = document.createElement("H1")
            toDoTitle.appendChild(document.createTextNode("ToDo"))
            listElement.appendChild(toDoTitle)
        }

        //display current List
        for (let i = 0; i < this.list.length; i++) {    //use let as it is kinda private and the the value of it is used in the add event section and not "i" as a reference...
            var div = document.createElement("div")
            div.classList.add("list-item")

            //text
            var text = document.createElement("p")            
            text.appendChild(document.createTextNode(this.list[i])) 
            text.classList.add("text");
            div.appendChild(text)          
            
            //done button
            var doneButton = document.createElement("button")
            doneButton.appendChild(document.createTextNode("done"))
            doneButton.addEventListener('click', button => {
                this.itemDone(i)
                this.deleteItem(i, div)
                this.display()
            })
            doneButton.classList.add("btn")
            div.appendChild(doneButton)

            //delete button
            var delButton = document.createElement("button")
            delButton.appendChild(document.createTextNode("delete"))
            delButton.addEventListener('click', button => {
                this.deleteItem(i, div)
                this.display()
            })
            div.appendChild(delButton)            

            listElement.appendChild(div)
            this.htmlListElements.push(div)
        }
        
        //clear done list
        for (let i = 0; i < this.htmlDoneListElements.length; i++) {    //use let as it is kinda private and the the value of it is used in the add event section and not "i" as a reference...
            this.htmlDoneListElements[i].remove()
        }

        if(this.doneList.length > 0){
            var doneTitle = document.createElement("H1")
            doneTitle.appendChild(document.createTextNode("Done"))
            listDoneElement.appendChild(doneTitle)
            this.htmlDoneListElements.push(doneTitle)
        } 

        //display done list
        for (let i = 0; i < this.doneList.length; i++) {    //use let as it is kinda private and the the value of it is used in the add event section and not "i" as a reference...
            var text = document.createElement("p")
            text.appendChild(document.createTextNode(this.doneList[i]))
            listDoneElement.appendChild(text)
            this.htmlDoneListElements.push(text)
        }
    }
}

const submitBtn = document.querySelector('[data-submit]')
const inputField = document.querySelector('[data-input]')

const toDoList = new ToDoList()
const listElement = document.querySelector('[data-list]')
const listDoneElement = document.querySelector('[data-done]')
var toDoTitle = undefined

submitBtn.addEventListener('click', button =>{
    toDoList.addItem(inputField.value)   
    toDoList.display()
    inputField.value = ""
})