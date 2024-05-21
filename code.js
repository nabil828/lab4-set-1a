const cards = document.querySelectorAll(".card")
let firstCard = undefined
let secondCard = undefined

const onCardClick = function (e) {
  if (!firstCard)
    firstCard = this.querySelector("img")
  else
    secondCard = this.querySelector("img")

  if (firstCard && secondCard)
    if (firstCard.src == secondCard.src) {
      console.log("match");
      firstCard.parentNode.removeEventListener("click", onCardClick)
      secondCard.parentNode.removeEventListener("click", onCardClick)

    }
    else {
      {
        console.log("no match");
      } setTimeout((arg) => {
        firstCard.parentNode.classList.toggle("flip")
        secondCard.parentNode.classList.toggle("flip")
      }, 1000)
    }
  this.classList.toggle("flip")
}

cards.forEach((arg) => {
  arg.addEventListener("click", onCardClick)
})