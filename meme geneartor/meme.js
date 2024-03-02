const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
  );
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-generator .meme-title");
  const MemeAuthor = document.querySelector(".meme-generator .meme-author");
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    MemeAuthor.innerHTML = author;
  };
  const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  generateMemeBtn.addEventListener("click", generateMeme);
  var typed = new Typed("#element", {
    strings: ["Loading....","Click On Generate Meme"],
    typeSpeed: 65,
    backSpeed: 65,
    backDelay: 100,
    loop: true,
  });