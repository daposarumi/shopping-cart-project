import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
     databaseURL: "https://console.firebase.google.com/u/0/project/playground-10289/database/playground-10289-default-rtdb/data/~2F"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppinglistInDB = ref(database, "shoppingList")


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")


addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    push(shoppinglistInDB, inputValue)

   
    
    shoppingListEl.innerHTML += `<li>${inputValue}</li>`
    inputFieldEl.value = ""
})