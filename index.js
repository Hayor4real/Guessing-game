const randomNum = Math.round(Math.random() * 100)
let count = 0


console.log(randomNum)

function getGuess() {
  const userGuess = document.getElementById("guess").value;

  if(userGuess === randomNum) {
      document.getElementById("result").innerText = "Congrats! you got it"
  }
  if(userGuess > randomNum) {
      document.getElementById("result").innerText = "Your guess is higher than you number"
  }

  if(userGuess < randomNum) {
      document.getElementById("result").innerText = "Your guess is smaller than your number"
  }
  count += 1;
  document.getElementById("count").innerText = count;
  if(count === 10) {
      document.getElementById("count").innerText = "You failed no more guess"
     
}
if(count === 10) {
    document.getElementById("click").disabled = true
}




}