// Sample products object
const products = {
    "men's clothing": [
        {
            name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            image: "images/fjallraven_backpack.jpg"
        },
        {
            name: "Mens Casual Premium Slim Fit T-Shirts",
            price: 22.30,
            image: "images/mens_tshirt.jpg"
        },
        {
            name: "Mens Cotton Jacket",
            price: 55.99,
            image: "images/cotton_jacket.jpg"
        },
        {
            name: "Mens Casual Slim Fit",
            price: 15.99,
            image: "images/mens_casual_slim_fit.jpg"
        }
    ],
    "jewelry": [
        {
            name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            price: 695.00,
            image: "images/john_hardy_bracelet.jpg"
        },
        {
            name: "Solid Gold Petite Micropave",
            price: 168.00,
            image: "images/solid_gold_micropave.jpg"
        },
        {
            name: "White Gold Plated Princess",
            price: 9.99,
            image: "images/white_gold_princess.jpg"
        },
        {
            name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
            price: 10.99,
            image: "images/pierced_owl.jpg"
        }
    ],
    "electronics": [
        {
            name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
            price: 64.00,
            image: "images/wd_2tb_elements.jpg"
        }
    ]
};

// Function to display the products
const displayProducts = () => {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = '';  // Clear the dashboard before adding new products

    for (const category in products) {
        const categorySection = document.createElement('div');
        categorySection.innerHTML = `<h2>${category}</h2>`;

        products[category].forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width: 100%; max-width: 200px; border-radius: 8px;">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
            `;
            categorySection.appendChild(productDiv);
        });

        dashboard.appendChild(categorySection);
    }
};

// Call displayProducts initially to load the products
displayProducts();

// Home Button functionality: reload the dashboard with all products
document.getElementById('home-btn').addEventListener('click', () => {
    displayProducts();
});

// Add Item Button functionality: open a prompt to add a new product
document.getElementById('add-item-btn').addEventListener('click', () => {
    const name = prompt("Enter the product name:");
    const price = parseFloat(prompt("Enter the product price:"));
    const image = prompt("Enter the image URL:");
    const category = prompt("Enter the product category (men's clothing, jewelry, electronics):");

    if (name && price && image && category) {
        if (!products[category]) {
            products[category] = [];
        }
        products[category].push({
            name,
            price,
            image
        });

        // Re-display products after adding a new one
        displayProducts();
    } else {
        alert("All fields are required.");
    }
});
