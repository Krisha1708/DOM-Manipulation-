// Sample user data to populate initial cards
let users = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca" },
    { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
    { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
    { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
    { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io" },
    { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" }
];

// Function to display a user card
function displayUserCard(user) {
    const cardContainer = document.getElementById("userCards");

    // Create card element
    const card = document.createElement("div");
    card.classList.add("card");

    // Set card content
    card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
    `;

    // Append card to the container
    cardContainer.appendChild(card)
}

// Function to handle the form submission
document.getElementById("create-user-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // Validate inputs
    if (name && username && email) {
        // Create new user object
        const newUser = { id: users.length + 1, name, username, email };

        // Add new user to the array and display the new user card
        users.push(newUser);
        displayUserCard(newUser);

        // Clear the form
        document.getElementById("create-user-form").reset();
    } else {
        alert("Please fill out all fields!");
    }
});

// Function to initialize the page with user cards
function initializePage() {
    // Display initial user cards
    users.forEach(user => displayUserCard(user));
}

// Sorting function by Name
document.getElementById("sortName").addEventListener("click", function () {
    // Sort users by name
    users.sort((a, b) => a.name.localeCompare(b.name));

    // Clear the existing cards and re-display the sorted cards
    const cardContainer = document.getElementById("userCards");
    cardContainer.innerHTML = ``;
    users.forEach(user => displayUserCard(user));
});

// Filtering function by Email
document.getElementById("filterEmail").addEventListener("click", function () {
    // Filter users who have "@" in their email (example filter)
    const filteredUsers = users.filter(user => user.email.includes("@"));

    // Clear the existing cards and re-display the filtered cards
    const cardContainer = document.getElementById("userCards");
    cardContainer.innerHTML = '';
    filteredUsers.forEach(user => displayUserCard(user));
});

// Initialize the page by displaying existing users
initializePage();
