
import React, { Component } from "react";
import Cards from "../Cards/Cards.js";
import Wrapper from "../Wrapper";
import Header from "../Header";
import cards from "../../assets/cards.json";
import "./style.css"

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((index, i) => {
      if (index.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>

      <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>

        {this.state.cards.map(card => (
          <div className="imageContainer">
          <Cards
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
          </div>
        ))}
      </Wrapper>
    );
  }
}

export default App;
