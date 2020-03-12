

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let array = [];
let data;
axios.get('https://api.github.com/users/kevin11jensen')
  .then(function(response){
    data = response.data;
    console.log(response.data);
    cards.appendChild(createCard(data));
    axios.get(`${data.followers_url}`)
      .then(function(response){
        let followersArray = response.data;
        followersArray.forEach(function(follower){
          array.push(follower.login);
          console.log(follower);
        })
        array.forEach(function(item){
          axios.get(`https://api.github.com/users/${item}`)
            .then(function(response){
              cards.appendChild(createCard(response.data));
            })
        })
      })
      .catch(function(error){
        console.log(error);
      })
  })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
let cards = document.querySelector('.cards');

function createCard(obj) {
  //parent card container
  let card = document.createElement('div');
  card.classList.add('card');
  //profile
  let profileImg = document.createElement('img');
  profileImg.setAttribute('src', obj.avatar_url);
  card.appendChild(profileImg);
  //info
  let info = document.createElement('div');
  info.classList.add('card-info');
  card.appendChild(info);
  //name
  let name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = obj.name;
  info.appendChild(name);
  //username
  let userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = obj.login;
  info.appendChild(userName);
  //location
  let location = document.createElement('p');
  location.textContent = obj.location;
  info.appendChild(location);
  //profile
  let profile = document.createElement('p');
  profile.textContent = 'Profile: ';
  let profileLink = document.createElement('a');
  profileLink.textContent = ' web address to users page';
  profileLink.setAttribute('href', obj.html_url);
  profile.appendChild(profileLink);
  //followers
  let followers = document.createElement('p');
  followers.textContent = `Following: ${obj.following}`;
  info.appendChild(following);
  //bio
  let bio = document.createElement('p');
  bio.textContent = obj.bio;
  info.appendChild(bio);
  info.appendChild(profile);

  return card;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
