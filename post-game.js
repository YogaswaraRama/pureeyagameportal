const homeWrapper = document.querySelector("#home-section .wrapper");
const gamesWrapper = document.querySelector("#games-section .wrapper");

const postGameData = [
  {
    postImg: "assets/thumbnail/rock-paper-scisso.png",
    postTitle: "Rock Paper Scissor",
    postLink: "https://rock-paper-scisso.vercel.app/",
  },
  {
    postImg: "assets/thumbnail/count-the-red-car.png",
    postTitle: "Count The Red Car",
    postLink: "https://countredcar.vercel.app/",
  },
  // {
  //   postImg: "assets/thumbnail/rock-paper-scisso.png",
  //   postTitle: "Rock Paper Scissor",
  //   postLink: "#",
  // },
];

postGameData.forEach((gameData) => {
  //Create card div
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("game-card");
  //Create card image
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  const img = document.createElement("img");
  img.src = gameData.postImg;
  img.alt = gameData.postTitle;
  cardImage.appendChild(img);
  //Create title
  const title = document.createElement("h4");
  title.classList.add("title-card");
  title.textContent = gameData.postTitle;
  //Create button
  const buttonWrapper = document.createElement("div");
  const buttonLink = document.createElement("a");
  const buttonDefault = document.createElement("button");
  buttonDefault.classList.add("default-button");
  buttonDefault.textContent = "Play";
  buttonLink.href = gameData.postLink;
  buttonLink.appendChild(buttonDefault);
  buttonWrapper.appendChild(buttonLink);

  //Append to card wrapper
  cardWrapper.appendChild(cardImage);
  cardWrapper.appendChild(title);
  cardWrapper.appendChild(buttonWrapper);

  //Append to main wrapper and page
  homeWrapper.appendChild(cardWrapper.cloneNode(true));
  gamesWrapper.appendChild(cardWrapper.cloneNode(true));
});

// alert("test");
