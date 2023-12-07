const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const yayBtn = document.querySelector(".yay-btn");
const count = 0;

yesBtn.addEventListener("click", () => {
  question.innerHTML = "It's gonna be LEGEN- wait for it -DARY!!!!";
  gif.src = "https://media.giphy.com/media/ekkKldHuLW90Y/giphy.gif";
  yesBtn.style.display = "none"
  noBtn.style.display = "none"
  yayBtn.style.display = "block"
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yayBtn.addEventListener("click", () => {
  question.innerHTML = "SUIT UP and meet me at discord!";
  gif.src = "https://media.tenor.com/EnntmjbAqeoAAAAM/himym-suit-up.gif";
});
