import { type } from "os";
import React from "react";
import { arrayBuffer } from "stream/consumers";

function App() {
  type Words = {
    [key: string]: string;
  };
  class Dict {
    private words: Words;
    constructor() {
      this.words = {};
    }
    add(word: Word) {
      if (this.words[word.term] === undefined) {
        this.words[word.term] = word.def;
      }
    }
    def(term: string) {
      return this.words[term];
    }
    print() {
      console.log(this.words);
    }
    del(term: string) {
      if (this.words[term] === undefined) {
        console.log(`cannot find key of "${term}"`);
      } else {
        delete this.words[term];
      }
    }
  }

  class Word {
    constructor(public term: string, public def: string) {}
  }

  const kimchi = new Word("kimchi", "한국의 음식");
  const dict = new Dict();
  dict.add(kimchi);
  dict.add(new Word("hamberger", "미국의 음식"));
  console.log(dict.def("kimchi"));
  dict.print();
  dict.del("kimchi");
  dict.print();

  return <div className="App">hello world!</div>;
}

export default App;
