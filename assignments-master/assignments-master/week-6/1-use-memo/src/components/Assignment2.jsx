import React, { useCallback, useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array


let words = ["hey", "random", "words", "here", "for", "testing"];
let AllSentence = []
let sentenceCount = 1000;
for(let i=0;i<sentenceCount;i++) {
   let sentence = "";
  for(let i=0;i<words.length;i++) {
    sentence += words[Math.floor(Math.random()*words.length)] + " ";
  }
  AllSentence.push(sentence);
}
export function Assignment2() {
   
    const [sentences, setSentences] = React.useState(AllSentence);
    const [filter, setFilter] = React.useState("");

    const filteredSentences = sentences.filter(sentence => sentence.includes(filter));
    
    return (
        <div>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
        {
            filteredSentences.map(sentence => <div>{sentence}</div>)
        }
        </div>
    )
}