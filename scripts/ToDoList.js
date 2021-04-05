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
        //clear list
        for(let i = 0; i < this.htmlListElements.length; i++){ //use let as it is kinda private and the the value of it is used in the add event section and not "i" as a reference...
            this.htmlListElements[i].remove()
        }

        //display current List
        for (let i = 0; i < this.list.length; i++) {    //use let as it is kinda private and the the value of it is used in the add event section and not "i" as a reference...
            var div = document.createElement("div")
            //text
            var text = document.createElement("p")            
            text.appendChild(document.createTextNode(this.list[i])) 
            div.appendChild(text)          
            
            //delete button
            var button = document.createElement("button")
            button.appendChild(document.createTextNode("done"))
            button.addEventListener('click', button => {
                this.htmlListElements.splice(i,1)
                this.list.splice(i,1)
                this.debug()
                div.remove()
                this.display()
            })

            div.appendChild(button)

            listElement.appendChild(div)
            this.htmlListElements.push(div)
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