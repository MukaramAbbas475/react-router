import React from "react";
import "./sideBar.css";
import CombineNav from "./combineNav";
//import SideBar from "./sideBar";

const About = () => {
  return (
    <React.Fragment>
      <CombineNav />
      <div className="about">
        <p>
          Text Twist Finder is an anagram solver for games like Text Twist,
          Super Text Twist, Jumble, and other anagram based word games like
          Scrabble and Words With Friends. The Text Twist Finder will help you
          beat games and pass levels in Text Twist using 6 letters, Super Text
          Twist using 7 letters, and also in similar games like Anagram Twist
          for iPhone. Just enter 6 or 7 letters and Text Twist Finder will solve
          and unscramble the letters giving you the words you need to beat the
          levels. Enjoy this Text Twist Unscrambler.
        </p>
      </div>
    </React.Fragment>
  );
};
export default About;
