import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

//my personal card
// axios
//   .get("https://api.github.com/users/willwearing")
//   .then((stuff) => {
//     console.log(stuff);
//     cardMaker(stuff.data);
//   })
//   .catch((err) => {
//     console.log(err)
//   });

//looping through my followers cards
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];
followersArray.forEach((followersName) => {
  axios
    .get(`https://api.github.com/users/${followersName}`)
    .then((stuff) => {
      console.log(stuff);
      cardMaker(stuff.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj) {
  //create elements
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUsername = document.createElement("p");
  const cardUserLocation = document.createElement("p");
  const cardUserProfile = document.createElement("p");
  // const cardUserProfileHTML = document.createElement("a");
  const cardUserFollowers = document.createElement("p");
  const cardUserFollowing = document.createElement("p");
  const cardUserBio = document.createElement("p");

  //assigning text
  cardImg.src = obj.avatar_url;
  cardName.textContent = obj.name;
  cardUsername.textContent = obj.login;
  cardUserLocation.textContent = `Location: ${obj.location}`;
  cardUserProfile.innerHTML = `Profile:<a href=${obj.html_url}>${obj.html_url}</a> `;
  // cardUserProfileHTML.textContent = `${obj.html_url}`;
  cardUserFollowers.textContent = `Followers: ${obj.followers}`;
  cardUserFollowing.textContent = `Following: ${obj.following}`;
  cardUserBio.textContent = `Bio: ${obj.bio}`;

  //assigning class names and attributes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUsername.classList.add("username");
  // cardUserProfileHTML.setAttribute("href");

  //creating hierarchy
  const grabbingCards = document.querySelector(".cards");
  grabbingCards.appendChild(card);
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(cardUserLocation);
  cardInfo.appendChild(cardUserProfile);
  // cardUserProfile.appendChild(cardUserProfileHTML);
  cardInfo.appendChild(cardUserFollowers);
  cardInfo.appendChild(cardUserFollowing);
  cardInfo.appendChild(cardUserBio);

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
