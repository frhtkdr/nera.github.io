var products = [];

// Make an HTTP request to the server
fetch('https://hello-back-end-de73af5d1d43.herokuapp.com/') // Update the URL to match your server's URL
    .then((response) => response.json())
    .then((data) => {
        // Update the productsArray with the retrieved data
        products = data;
        console.log('Product data retrieved:', products);

        // Get the container element by its ID
        const container = document.getElementById('products-container');

        // Loop through the products and create HTML elements for each one
        products.forEach(product => {
            // Create a parent anchor element
            const flipDiv = document.createElement('div');
            flipDiv.classList.add('flip');
            flipDiv.setAttribute('tabindex', '0');

            // Create the main book container
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');

            // Create an image element and set its source
            const image = document.createElement('img');
            image.src = product.book_img; // Access product properties

            // Append the image to the book container
            bookDiv.appendChild(image);

            // Append the book container (with image and back container) to the anchor
            flipDiv.appendChild(bookDiv);

            // Append the anchor to the desired container in your HTML (e.g., a div with id "container")
            container.appendChild(flipDiv);
        });
    })
    .catch((error) => {
        console.error('Error fetching product data:', error);
    });
