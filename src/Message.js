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
    character: "",
    suffix: "",
    toggle: true
  };

  toggleChange = () => {
    this.setState(state => ({ toggle: !state.toggle }));
  };

  render() {
    return (
      <div>
        <div>
          <h1>Message Mixer</h1>
          <div className="instruction">
            <p>
              <span>Message Mixer</span> is a messaging service that allows you
              to perform an action on input text and display the output of that
              behavior to the console. For example, with the current functions
              defined in Message Mixer, you can:
            </p>
            <ul>
              <li>
                <span>1)</span>count the characters in a message
              </li>
              <li>
                <span>2)</span>capitalize the first character of words -
                titlecase
              </li>
              <li>
                <span>3)</span>reverse a message’s words in place
              </li>
              <li>
                <span>4)</span>reversing characters in place
              </li>
              <li>
                <span>5)</span>replace the first occurrence of a string
              </li>
              <li>
                <span>6)</span>replace all occurrences of a string
              </li>
              <li>
                <span>7)</span>
                encode text by swapping certain characters for other characters
              </li>
              <li>
                <span>8)</span>make a palindrome
              </li>
              <li>
                <span>9)</span>add a fabricated suffix{" "}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <textarea
            className="inputMessage"
            rows="10"
            cols="20"
            placeholder="Put your message here"
            onChange={event => this.setState({ message: event.target.value })}
          />
        </div>
        <div className="container">
          <div className="section">
            <h3>
              <span>1)</span>Character Count
            </h3>
            <p>character:</p>
            <input
              className="inputText"
              onChange={event =>
                this.setState({ character: event.target.value })
              }
            />

            <p>
              <span>{this.state.character}</span> is used{" "}
              {countCharacter(this.state.message, this.state.character)} times
              in the message.
            </p>
          </div>

          <div className="section">
            <h3>
              <span>2)</span>Title-case
            </h3>
            <p>
              {capitalizeFirstCharacterOfWords("What is the color of the sky?")}
            </p>
          </div>
          <div className="section">
            <h3>
              <span>3)</span>Reversing Word
            </h3>
            <p>{reverseWord(this.state.message)}</p>
          </div>
          <div className="section">
            <h3>
              <span>4)</span>Reversing All Words
            </h3>
            <p>{reverseAllWords(this.state.message)}</p>
          </div>
          <div className="section">
            <h3>
              <span>5)</span>Replacing Word
            </h3>
            <p>word to be replaced:</p>
            <input
              className="inputText"
              onChange={event =>
                this.setState({ toBeReplaced: event.target.value })
              }
            />
            <p>word replacing with:</p>
            <input
              className="inputText"
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
          <div className="section">
            <h3>
              <span>6)</span>Encoding
            </h3>
            <p>{encode(this.state.message)}</p>
          </div>
          <div className="section">
            <h3>
              <span>7)</span>Palindrome
            </h3>
            <p>{palindrome(this.state.message)}</p>
          </div>
          <div className="section">
            <h3>
              <span>8)</span>Adding Suffix
            </h3>
            <input
              onChange={event => this.setState({ suffix: event.target.value })}
            />
            <p>{pigLatin(this.state.message, this.state.suffix)}</p>
          </div>
        </div>
      </div>
    );
  }
}
