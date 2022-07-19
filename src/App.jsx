import React, { useState } from 'react';

const secretWord = ['b', 'a', 'n', 'a', 'n', 'a'];

const InputFunction = () => {
  // the array begins with only _
  const [guessedLetters, setGuessedLetters] = useState([
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
  ]);
  console.log('secretWord:', secretWord);
  console.log('guessedLetters:', guessedLetters);
  const handleInput = (event) => {
    const input = event.target.value.slice(-1);
    console.log('input:', input);

    // copy of guessedLetters
    const arr = [...guessedLetters];

    // loop through input
    secretWord.forEach((letter, index) => {
      if (letter === input) {
        arr[index] = input;
      }
    });
    setGuessedLetters(arr);
  };
  console.log('guessedLetters:', guessedLetters);
  return (
    <div>
      <div>
        Guess the word:{' '}
        {guessedLetters.map((letter) => (
          <span>{letter}</span>
        ))}
      </div>
      <input onChange={handleInput} />
    </div>
  );
};

export default function App() {
  return <InputFunction />;
}
