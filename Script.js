let myLibrary = [];
let tables = document.querySelector("#bookTable")
let tablelist = document.querySelector("ul")
let ulist = document.querySelectorAll("ul")
function Book(title, author, pages, read){                                  
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
function addBookstoLibrary(){
    let addbook = document.createElement("button")
    addbook.innerHTML = "Create a book"
    tables.appendChild(addbook)
    addbook.addEventListener("click", (e) =>{
    let newbook = new Book
    newbook.title = prompt("Author of book")
    newbook.author = prompt("Title of book")
    newbook.pages = prompt("# pages of book")
    newbook.read = confirm("Have you completed the book?")
    myLibrary.push(newbook)
    createlist(myLibrary)});
}
Book.prototype.info = function(){
    return(`${this.title}, ${this.author}, ${this.pages}`)
}

myLibrary[0] = new Book("Twilight", "Stephanie Meyer", 200, false)
myLibrary[1] = new Book("Game of thrones", "G.G Martin", 300, true)
function createlist(array){
    ulist.forEach(ul =>{
        ul.remove()
    })
    for(let i = 0; i < array.length; i++){
        let divnode = document.createElement("div")
        let booktable = document.createElement("ul")
        let rmButton = document.createElement("button")
        let readButton = document.createElement("button")
        rmButton.id = i
        rmButton.innerHTML = "remove"
        rmButton.addEventListener("click", removeBook)
        readButton.id = i
        readButton.innerHTML = "Read"
        readButton.addEventListener("click", toggleRead)
        booktable.innerHTML = array[i].info()
        tables.appendChild(divnode)
        divnode.appendChild(booktable);
        divnode.appendChild(rmButton)
        divnode.appendChild(readButton)
    }
}
function removeBook(){
    this.parentNode.parentNode.removeChild(this.parentNode)
}
function removeBook2(){
    newlist = myLibrary.splice(this.id, 1)
    createlist(newlist)
}
function toggleRead(){
    if(this.innerHTML == "Read"){
        this.innerHTML = "has not read"
    }
    else(this.innerHTML = "Read")
}
function render(){
    addBookstoLibrary()
    createlist(myLibrary)
    
};
render();
