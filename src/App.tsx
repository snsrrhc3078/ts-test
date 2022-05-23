import { type } from "os";
import React from "react";
import { arrayBuffer } from "stream/consumers";

function App() {
  abstract class User {
    constructor(
      private firstName: string,
      private lastName: string,
      protected nickName: string
    ) {}
    abstract getNickName(): void;
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  class Player extends User {
    getNickName() {
      console.log(this.nickName);
    }
  }

  const rabin = new Player("Rabin", "Bluebell", "라빈");

  // console.log(rabin.nickName);
  // console.log(rabin.getFullName());
  rabin.getNickName();
  return <div className="App">hello world!</div>;
}

export default App;
