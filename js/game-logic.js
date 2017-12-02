// All code should be written in this file.
const choices = ['rock','paper','scissors']
let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;

let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  if (player === 'Player One' || player === 'Player Two') {
    if ((moveOneType) && (moveTwoType) && (moveThreeType) && choices.includes(moveOneType) && choices.includes(moveTwoType) && choices.includes(moveThreeType)) {
      if ((moveOneValue) && (moveTwoValue) && (moveThreeType) && Number.isInteger(moveOneValue) && Number.isInteger(moveOneValue) && Number.isInteger(moveOneValue)) {
        let total = moveOneValue + moveTwoValue + moveThreeValue;
        if (total >= 0 && total <= 99 && moveOneValue >= 0 && moveOneValue <= 99 && moveTwoValue >= 0 && moveTwoValue <= 99 && moveThreeValue >= 0 && moveThreeValue <= 99) {
          if (player === 'Player One') {
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
          } else if (player === 'Player Two') {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
          }
        } else {
          console.log('Please enter a total that is more than -1 and less than zero');
        }
      } else {
        console.log('Please Enter an Interger for Move Value');
      }
    } else {
      console.log('Please Enter either "rock" or "paper" or "scissors"');
    }
  } else {
    console.log('Please Enter either "Player One" or "Player Two"');
  }
};

getRoundWinner = (roundNumber) => {
  if (roundNumber !== 1 && roundNumber !== 2 && roundNumber !== 3){
    return null;
  }

  let playerOneType = undefined
  let playerOneValue = undefined
  let playerTwoType = undefined
  let playerTwoValue = undefined

  if (roundNumber === 1) {
    playerOneType = playerOneMoveOneType
    playerOneValue = playerOneMoveOneValue
    playerTwoType = playerTwoMoveOneType
    playerTwoValue = playerTwoMoveOneValue
  } else if (roundNumber === 2) {
    playerOneType = playerOneMoveTwoType
    playerOneValue = playerOneMoveTwoValue
    playerTwoType = playerTwoMoveTwoType
    playerTwoValue = playerTwoMoveTwoValue
  } else if (roundNumber === 3) {
    playerOneType = playerOneMoveThreeType
    playerOneValue = playerOneMoveThreeValue
    playerTwoType = playerTwoMoveThreeType
    playerTwoValue = playerTwoMoveThreeValue
  }
  if (!(playerOneType) || !(playerOneValue) || !(playerTwoType) || !(playerTwoValue)) {
    return null;
  }
  if (playerOneType === 'rock') {
    if (playerTwoType === 'scissors') {
      return ('Player One')
    } else if (playerTwoType === 'paper') {
      return ('Player Two')
    } else if (playerOneType === playerTwoType) {
      if (playerOneValue > playerTwoValue) {
        return ('Player One')
      } else if (playerOneValue < playerTwoValue) {
        return ('Player Two');
      } else {
        return ('Tie');
      }
    }
  } else if (playerOneType === 'paper') {
    if (playerTwoType === 'rock') {
      return ('Player One')
    } else if (playerTwoType === 'scissors') {
      return ('Player Two')
    } else if (playerOneType === playerTwoType) {
      if (playerOneValue > playerTwoValue) {
        return ('Player One')
      } else if (playerOneValue < playerTwoValue) {
        return ('Player Two');
      } else {
        return ('Tie');
      }
    }
  } else if (playerOneType === 'scissors') {
    if (playerTwoType === 'paper') {
      return ('Player One')
    } else if (playerTwoType === 'rock') {
      return ('Player Two')
    } else if (playerOneType === playerTwoType) {
      if (playerOneValue > playerTwoValue) {
        return ('Player One')
      } else if (playerOneValue < playerTwoValue) {
        return ('Player Two');
      } else {
        return ('Tie');
      }
    }
  }
}



getGameWinner = () => {
  let playerOneWins = 0
  let playerTwoWins = 0
  let ties = 0
  let totalSuccessfulGames = 0
  let roundNumbers = [1,2,3]

  roundNumbers.forEach(roundNumber => {
    if (getRoundWinner(roundNumber) === 'Player One') {
      playerOneWins += 1
      totalSuccessfulGames += 1
    } else if (getRoundWinner(roundNumber) === 'Player Two') {
      playerTwoWins += 1
      totalSuccessfulGames += 1
    } else if (getRoundWinner(roundNumber) === 'Tie') {
      ties += 1
      totalSuccessfulGames += 1
    }
  })

  if (totalSuccessfulGames === 3) {
    if (playerOneWins > playerTwoWins) {
      return ('Player One')
    } else if (playerOneWins < playerTwoWins) {
      return ('Player Two');
    } else if (playerOneWins === playerTwoWins) {
      return ('Tie');
    }
  } else {
    return null;
  }

}
