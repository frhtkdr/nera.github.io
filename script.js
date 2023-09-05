// Get references to the button and the div
const khawlahamdi = document.getElementById('khawlahamdi');
const cardsContainer = document.getElementById('cardsContainer');

// Add a click event listener to the button
khawlahamdi.addEventListener('click', function () {
    // Change the content of the div
    cardsContainer.innerHTML = '<section><div class="book"><img src="./book/img/1.png"></div></section><section><div class="book"><img src="./book/img/5.png"></div></section><section><div class="book"><img src="./book/img/12.jpg"></div></section><section><div class="book"><img src="./book/img/14.jpg"></div></section>';
});
