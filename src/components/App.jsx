import React from "react";
import Entery from "./Entery";
import emojipedia from "../emojipedia";

function createEmoji(emojiTerm) {
  return (
    <Entery 
    id = {emojiTerm.id}
    key = {emojiTerm.id}
    name = {emojiTerm.name}
    emoji = {emojiTerm.emoji}
    meaning = {emojiTerm.meaning}
    
    />
  )
  

}

function App() {
  return (
      
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmoji)}

      
        
      {/* <Entery 
      emoji = {emojipedia[0].emoji}
      name = {emojipedia[0].name}
      meaning = {emojipedia[0].meaning}
    
    />,
    <Entery 
      emoji = {emojipedia[1].emoji}
      name = {emojipedia[1].name}
      meaning = {emojipedia[1].meaning}
    
    />,
    <Entery 
      emoji = {emojipedia[2].emoji}
      name = {emojipedia[2].name}
      meaning = {emojipedia[2].meaning}
    
    /> */}

     </div>
    

    
  );
}

export default App;
