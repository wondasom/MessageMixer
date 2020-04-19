import React from "react";
import "./styles.css";

import {
  countCharacter,
  capitalizeFirstCharacterOfWords,
  reverseWord,
  reverseAllWords,
  replaceFirstOccurence,
  encode,
  palindrome,
  pigLatin
} from "./MessageMixer";

export default class Message extends React.Component {
  state = {
    message: "",
    toBeReplaced: "",
    replaceWith: "",
    character: ""
  };

  //when I use 'string' state, it gives error. I don 't know why.. (Sad face)

  render() {
    return (
      <div>
        <h1>Message Mixer</h1>
        <p>
          Message Mixer is a messaging service that allows you to perform an
          action on input text and display the output of that behavior to the
          console. For example, with the current functions defined in Message
          Mixer, you can:
        </p>
        <ul>
          <li>count the characters in a message</li>
          <li>capitalize the first character of words</li>
          <li>reverse a message’s words in place</li>
          <li>reversing characters in place</li>
          <li>replace the first occurrence of a string</li>
          <li>replace all occurrences of a string</li>
          <li>
            encode text by swapping certain characters for other characters
          </li>
          <li>make a palindrome</li>
          <li>add a fabricated suffix </li>
        </ul>
        <div>
          <textarea
            rows="10"
            cols="20"
            placeholder="Put your message here"
            onChange={event => this.setState({ message: event.target.value })}
          />

          <p>{countCharacter(this.state.message, "t")}</p>
        </div>
        <div>
          <p>
            {capitalizeFirstCharacterOfWords("What is the color of the sky?")}
          </p>
        </div>
        <div>
          <p>{reverseWord(this.state.message)}</p>
        </div>
        <div>
          <p>{reverseAllWords(this.state.message)}</p>
        </div>
        <div>
          <input
            onChange={event =>
              this.setState({ toBeReplaced: event.target.value })
            }
          />
          <input
            onChange={event =>
              this.setState({ replacedWith: event.target.value })
            }
          />
          <p>
            {replaceFirstOccurence(
              this.state.message,
              this.state.toBeReplaced,
              this.state.replacedWith
            )}
          </p>
        </div>
        <div>
          <p>{encode(this.state.message)}</p>
        </div>
        <div>
          <p>{palindrome(this.state.message)}</p>
        </div>
        <div>
          <input
            onChange={event => this.setState({ character: event.target.value })}
          />
          <p>{pigLatin(this.state.message, this.state.character)}</p>
        </div>
      </div>
    );
  }
}
