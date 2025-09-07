const word = document.getElementById("word")
const text = document.getElementById("text")
const scoreEl = document.getElementById("score")
const timeEl = document.getElementById("time")
const endgameEl = document.getElementById("end-game-container")

// List of words for game
const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving", //add 10 
  "might",
  "script",
  "gate",
  "wordle",
  "summary",
  "prettier",
  "radical",
  "unbound",
  "crystal",
  "rocket",
  "generate",
  "delete",
  "insert",
  "subaru",
  "forester",
  "mithril",
  "spec",
  "loaded",
  "among"

]

// Init word
let randomWord

// Init score
let score = 0

// Init time
let time = 11

// Focus on text on start
text.focus()

// Start counting down
const timeInterval = setInterval(updateTime, 1000)

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord()
  word.innerHTML = randomWord
}

// Update score
function updateScore() {
  score++
  scoreEl.innerHTML = score
}

// Update time
function updateTime() {
  time--
  timeEl.innerHTML = time + "s"

  if (time === 0) {
    clearInterval(timeInterval)
    // end game
    gameOver()
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `

  endgameEl.style.display = "flex"
}

addWordToDOM()

// Typing
text.addEventListener("input", (e) => {
  const insertedText = e.target.value

  if (insertedText === randomWord) {
    addWordToDOM()
    updateScore()

    // Clear
    e.target.value = ""
    time += 3

    updateTime()
  }
})
