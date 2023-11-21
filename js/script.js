// Creation d'un library

// Les variables
const newBook = document.querySelector(".add-new-book")
const addBook = document.querySelector(".add")
const section = document.createElement("section")
const formulaire = document.querySelector("#formulaire")
const body = document.querySelector("body")
const closeForm = document.querySelector(".close")


// Les variable du formulaire
let bookName = document.querySelector(".name-book")
let autorName = document.querySelector(".name-autor")
let pagesNumber = document.querySelector(".nomber-page")
let readBook = document.querySelector(".checkbox")

const myLibrary = []
console.log(myLibrary)

// Constructor pour les livres
function Book(book,autor,page,read){
    this.book = book
    this.autor = autor
    this.page = page
    this.read = read
}

// fucntion pour ajouter un livre dans le tableau
function addNewBook(){
    const bookAdd = new Book(bookName.value,autorName.value,pagesNumber.value,readBook.checked ? "Oui" : "Non")
    myLibrary.unshift(bookAdd)  
}

// function pour afficher les contenue sur la page
function display(){
    section.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        const div0 = document.createElement("div")
        const h3 = document.createElement("h3")
        const paraAuteur = document.createElement("p")
        const paraPages = document.createElement("p")
        const paraLus = document.createElement("p")
        const removeBtn = document.createElement("button")
        const modifiBtn = document.createElement("button")
        


        h3.textContent = myLibrary[i].book;
        h3.classList.add("h3")
        paraAuteur.textContent = `@${myLibrary[i].autor}`
        paraAuteur.classList.add("para-auteur")
        paraPages.textContent = `${myLibrary[i].page}`
        paraPages.classList.add("para-Pages")
        paraLus.textContent = myLibrary[i].read
        paraLus.classList.add("para-lus")
        // bouton supprimer
        const div1 = document.createElement("div")
        div1.classList.add("bar-boutons")
        removeBtn.textContent = "Delete"
        removeBtn.classList.add("bouton1")
        modifiBtn.textContent = "Modifier"
        modifiBtn.classList.add("bouton2")
        
        removeBtn.addEventListener('click', ()=>{
            myLibrary.splice(i,1);
            display()
            })
            modifiBtn.addEventListener('click', () =>{
                let newRead = document.createElement("input")
                let divCheck = document.createElement("div")
                let label = document.createElement("label")
                newRead.type = "checkbox"
                newRead.checked = true
                divCheck.classList.add("new-read")

                label.textContent = "Tu a lu le livre ?"
                divCheck.appendChild(label)
                divCheck.appendChild(newRead)

                let btn = document.createElement("button")
                btn.textContent = "Update"
                divCheck.appendChild(btn)
                document.body.appendChild(divCheck)


                btn.addEventListener('click',()=>{
                    if(newRead.checked){
                        myLibrary[i].read = "Oui"
                        }else{
                            myLibrary[i].read = "Non"
                            }
                            display();
                            
                            divCheck.style.display = "none"
                })
               
                
                        })


        div0.appendChild(h3)
        div0.appendChild(paraAuteur)
        div0.appendChild(paraPages)
        div0.appendChild(paraLus)
        div1.appendChild(removeBtn)
        div1.appendChild(modifiBtn)
        div0.appendChild(div1)
        div0.classList.add("div0")


        section.appendChild(div0)
        section.classList.add("details")
        body.appendChild(section) 

        
    }
    
}

newBook.addEventListener('click',()=>{
    formulaire.style.display = 'flex'
    closeForm.addEventListener("click",()=>{
        formulaire.style.display = 'none'
    })
})

addBook.addEventListener('click',(event)=>{
    if(bookName.value === '' || autorName.value === '' || pagesNumber.value === ''){
     
    }else{

        addNewBook()
        display()
        bookName.value = ''
        autorName.value = ''
        pagesNumber.value = ''
        readBook.checked = false
        formulaire.style.display = 'none'
    }

    
    
    event.preventDefault()
})




