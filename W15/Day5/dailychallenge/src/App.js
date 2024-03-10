import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import Wrapper from "./Wrapper";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import data from "./characters.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: data.superheroes,
      highScore: 0,
      currentScore: 0,
      Clicked: false
    };
  }
  handleClick = id => {
    this.shuffleArray();
    this.handleScore(id);
  };

  handleScore = id => {
    const newCharacters = this.state.characters.map(element => {
      if (id === element.id) {
        if (element.clicked) {
          if (this.state.currentScore > this.state.highScore) {
            this.setState({ highScore: this.state.currentScore });
          }
          this.setState({ currentScore: 0, Clicked: true });
          return { ...element, clicked: false };
        } else {
          this.setState({ Clicked: false });
          this.handleIncrement();
          return { ...element, clicked: true };
        }
      } else {
        return element;
      }
    });

    this.setState({ characters: newCharacters });
  };

  shuffleArray = () => {
    const shuffledArr = this.shuffle(this.state.characters);
    this.setState({ characters: shuffledArr });
  };

  handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        {this.state.characters.map(character => (
          <CharacterCard
            Clicked={this.state.Clicked}
            handleClick={this.handleClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;