const students = [
    { name: 'János', age: 18, grades: [5, 4, 4, 5] },
    { name: 'Anna', age: 19, grades: [3, 4, 2, 5] },
    { name: 'Lajos', age: 15, grades: [5, 5, 4, 5] },
    { name: 'Vera', age: 17, grades: [3, 4, 2, 4] }
];

// 1. Diákok listázása:
// Listahtml elkészítése + ul-ba beillesztése
const createListHTML = (data) => {
    return data.map(({ name, age, grades }) => 
         `<li>${name} -- ${age} -- ${grades} </li>`
    ).join('');
}

// Gomb és ul elérése 
const listButton = document.querySelector("#students-list>input");
listButton.addEventListener("click", (event) => {
    event.preventDefault(); // submit-funkció kiiktatása
    const ulElement = document.querySelector("#result-list");
    // ulElement.innerHTML = `<li>Teszt</li>`;
    ulElement.innerHTML = "";
    ulElement.innerHTML = createListHTML(students);
})

// Diák hozzáadása a listához:

// Életkor szerinti szűrés:
// Adott átlagtól jobb diákok szűrése:
// Diák törlése:
// Jegyek módosítása: