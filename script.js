let sun = document.querySelector("#sun"),
    moon = document.querySelector("#moon"),
    body = document.querySelector("body"),
    cart = document.querySelector("#cart"),
    closeShopping = document.querySelector(".closeShopping"),
    homeBg = document.querySelector(".home_bg"),
    leftArrow = document.querySelector(".leftArrow"),
    rightArrow = document.querySelector(".rightArrow"),
    imageIcons = document.querySelectorAll(".image-icon"),
    list = document.querySelector(".product-right-bottom"),
    li = document.querySelectorAll(".list"),
    circle = document.querySelectorAll(".fa-circle"),
    allList = document.querySelector(".all-list"),
    listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");
let quanity = document.querySelector(".quantity");
let bookType = document.querySelectorAll(".book-type");
const navMenu = document.getElementById("nav_menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");


let products = [
    {
        id: 0,
        type: "modern",
        title: "big magic",
        author: "donna karan",
        image: "1.PNG",
        price: 20.0,
    },
    {
        id: 1,
        type: "classic",
        title: "i was born width music",
        author: "dolce & cabanna",
        image: "2.PNG",
        price: 200.0,
    },
    {
        id: 2,
        type: "biography",
        title: "i'm glad my mom died",
        author: "jennette mcCurdy",
        image: "3.PNG",
        price: 21.99,
    },
    {
        id: 3,
        type: "detective",
        title: "Warrior Soul: A Tye Caine Wilderness Mystery",
        author: "David Barbur",
        image: "4.PNG",
        price: 4.99,
    },
    {
        id: 4,
        type: "fantasy",
        title: "The Mountain in the Sea: A Novel",
        author: "Ray Nayler",
        image: "5.PNG",
        price: 18.0,
    },
    {
        id: 5,
        type: "cookbook",
        title: "Sweet Enough: A Dessert Cookbook",
        author: "Alison Roman",
        image: "6.PNG",
        price: 32.55,
    },
    {
        id: 6,
        type: "fairy tale",
        title: "Fairy Tale",
        author: "Stephen King",
        image: "7.PNG",
        price: 30.23,
    },
    {
        id: 7,
        type: "fiction",
        title: "Flash Fiction America: 73 Very Short Stories",
        author: "John DuFresne , et al.",
        image: "8.PNG",
        price: 15.76,
    },
    {
        id: 8,
        type: "horror",
        title: "Taaqtumi: An Anthology of Arctic Horror Stories",
        author: "Thomas Anguti Johnston , et al.",
        image: "9.PNG",
        price: 15.76,
    },
    {
        id: 9,
        type: "historical fiction",
        title:
            "The Things We Cannot Say: A WWII Historical Fiction Novel (Original)",
        author: "Kelly Rimmer",
        image: "10.PNG",
        price: 15.8,
    },
    {
        id: 10,
        type: "history",
        title: "The Secret History",
        author: "Donna Tartt",
        image: "11.PNG",
        price: 16.74,
    },
    {
        id: 11,
        type: "romance",
        title: "Daughter of the Moon Goddess: A Fantasy Romance Novel",
        author: "Sue Lynn Tan",
        image: "12.PNG",
        price: 16.73,
    },
    {
        id: 12,
        type: "modern",
        title: "Women Without Men: A Novel of Modern Iran",
        author: "Shahrnush Parsipur , et al.",
        image: "13.PNG",
        price: 14.83,
    },
    {
        id: 13,
        type: "classic",
        title: "War and Peace",
        author: "Leo Tolstoy , et al.",
        image: "14.PNG",
        price: 20.46,
    },
    {
        id: 14,
        type: "biography",
        title: "Barkley: A Biography (Original)",
        author: "Timothy Bella",
        image: "15.PNG",
        price: 27.89,
    },
    {
        id: 15,
        type: "detective",
        title: "The Detective Up Late",
        author: "Adrian McKinty",
        image: "16.PNG",
        price: 25.1,
    },
    {
        id: 16,
        type: "fantasy",
        title: "Legends & Lattes: A Novel of High Fantasy and Low Stakes",
        author: "Travis Baldree",
        image: "17.PNG",
        price: 16.73,
    },
    {
        id: 17,
        type: "cookbook",
        title: "The Everlasting Meal Cookbook: Leftovers A-Z",
        author: "Tamar Adler , et al.",
        image: "18.PNG",
        price: 32.55,
    },
    {
        id: 18,
        type: "fairy tale",
        title: "Fairy Tales for Fearless Girls",
        author: "Anita Ganeri , et al.",
        image: "19.PNG",
        price: 18.59,
    },
    {
        id: 19,
        type: "fiction",
        title: "Wonderbook (Revised and Expanded)",
        author: "Jeff VanderMeer",
        image: "20.PNG",
        price: 25.58,
    },
    {
        id: 20,
        type: "horror",
        title: "Nightmare Fuel: The Science of Horror Films",
        author: "Nina Nesseth",
        image: "21.PNG",
        price: 24.17,
    },
    {
        id: 21,
        type: "historical fiction",
        title: "Falconland: A Novel of Medieval",
        author: "Reggie Connell",
        image: "22.PNG",
        price: 14.99,
    },
    {
        id: 22,
        type: "history",
        title: "We Are the Land: A History of Native California",
        author: "Damon B. Akins , et al.",
        image: "23.PNG",
        price: 27.85,
    },
    {
        id: 23,
        type: "romance",
        title: "Rough Around the Hedges: an Uncanny Romance Novel",
        author: "Lish McBride",
        image: "24.PNG",
        price: 16.73,
    },
];

// ============= menu bar ==============

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

// ================================= dark mode =========================

const toggleTheme = () => {
    body.classList.toggle("darkLight");
    setInterval.classList.toggle("hide");
    moon.classList.toggle("hide");
};

sun.addEventListener("click", toggleTheme);
moon.addEventListener("click", toggleTheme);

cart.addEventListener("click", () => {
    body.classList.toggle("active");
});
closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
});
window.onscroll = () => {
    body.classList.remove("active")
};

// ================================== header slider ==================================

let img = homeBg.querySelectorAll("img");
img.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
});
let counter = 0;
rightArrow.addEventListener("click", () => {
    if (counter == img.length - 1) {
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
});
leftArrow.addEventListener("click", () => {
    if (counter == 0) {
        counter = img.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
});
const slideImage = () => {
    img.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// ================================= product cards get =========================

function initApp() {
    const fragment = document.createDocumentFragment();
    products.forEach((value, key) => {
        const div = document.createElement('div');
        div.classList.add('book-card');
        div.dataset.item = value.type;
        div.innerHTML = `
            <div class="book-image">
                <img src="./Assets/Images/${value.image}" alt="" class="book-imagish" />
            </div>
            <div class="book-details">
                <div class="book-type">${value.type}</div>
                <div class="book-title">${value.title}</div>
                <div class="book-author">${value.author}</div>
                <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                </div>
                <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                </div>
            </div>
        `;
        fragment.appendChild(div);
    });
    list.appendChild(fragment);
}
initApp();


// ================================= add card ============================

let listCards = [];

function getAddtoCard() {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quanity;
        if (value != null) {
            listCard.innerHTML += `
                <div class="item">
                    <div>
                        <img src="./Assets/Images/${value.image}">
                    </div>
                        <div>${value.title}</div>
                        <div>$ ${value.price.toLocaleString()}</div>
                        <div>
                        <button onclick="changeQuanity(${key},${value.quanity - 1})">-</button>
                        <div class="count">${value.quanity}</div>
                        <button onclick="changeQuanity(${key},${value.quanity + 1})">+</button>
                    </div>
                </div>
            `
        }
    });
    total.innerText = `$ ${totalPrice.toLocaleString()}`;
    quanity.innerText = count;
}

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quanity = 1;
    }
    getAddtoCard();
}

function changeQuanity(key, quantity) {
    if (quanity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quanity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    getAddtoCard();
}

// ========================= search =============================

// Placeholderni boshlang'ich qiymatini o'rnatamiz
mySearch.placeholder = "Search by Title...";

// Qidiruv tugmasi bosilganda qidiruv maydoni tozalanadi va placeholderni o'zgartiradi
searchBtn.addEventListener("click", () => {
    mySearch.value = ""; // Qidiruv maydonini tozalash
    if (mySearch.placeholder === "Search by Type...") {
        mySearch.placeholder = "Search by Title...";
    } else {
        mySearch.placeholder = "Search by Type...";
    }
});

// Qidiruvni amalga oshiruvchi asosiy funksiya
mySearch.addEventListener("input", () => {
    let input = mySearch.value.toUpperCase(); // Qidiruv maydonidagi matn
    if (mySearch.placeholder === "Search by Title...") {
        bookTitle.forEach((item, index) => {
            if (item.innerHTML.toUpperCase().indexOf(input) > -1) {
                bookCards[index].style.display = "flex"; // Mos kelgan kartani ko'rsatish
            } else {
                bookCards[index].style.display = "none"; // Mos kelmagan kartani yashirish
            }
        });
    } else if (mySearch.placeholder === "Search by Type...") {
        bookType.forEach((item, index) => {
            if (item.innerHTML.toUpperCase().indexOf(input) > -1) {
                bookCards[index].style.display = "flex";
            } else {
                bookCards[index].style.display = "none";
            }
        });
    }
});



  