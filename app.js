let books = [];
let id = 0;

const form = document.getElementById('form');
form.addEventListener('submit', callbackFunction);
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    let formDataObj = {};
    myFormData.forEach((value, key) => {
    formDataObj[key] = value;
    });
  id += 1;
  formDataObj = {...formDataObj, "id": id}
  books.push(formDataObj);
  // displayData();
  const storedBook = JSON.stringify(books);
 localStorage.setItem('books', storedBook);
};

books = JSON.parse(localStorage.getItem('books'));
const bookSection = document.getElementById('books');
function displayData() {
     books.forEach((book) => {
   bookSection.innerHTML += `
			<p id="title">${book.title}</p>
			<p id="author">${book.author}</p>
			<button id='btn'>Remove</button>
			<hr />`
});
}

//  window.onload = () => {
//    displayData();
// };

// const remove = document.getElementById('books')

// remove.addEventListener('click', (id) => {

// })

