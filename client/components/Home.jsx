import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src="./images/main/main-img2.png" alt="Responsive image" />

        <div className="display">
          <div className="display1" id="square">
            <h4>INTRODUCTION</h4>
            <p className="ptext">
              <i>
                In an ancient time and place,magic permeates the land and
                monsters stalk the shadows that gather along the edges of
                civilization. in this age of dungeons and dragons, the world
                needs Heroes. Encased in varied types of armor and armed with
                swords, bows, staves, and spells, these Heroes explore ancient
                ruins, take on daring quests, and challenge the most fearsome
                monsters. One such quest takes Heroes to a dark and mysterious
                place called Castle Ravenloft.
              </i>
            </p>
            <h4>Castle Ravenloft</h4>
            <p className="ptext">
              The master of Castle Ravenloft is having quests for dinner-and you
              are invited! <br />
              The castle rises over the dark forests of the land of Barovia,
              looking down upon a sad,frightened village surrounded by an
              endless sea of dense fog and mist. The master of the castle, Count
              Strahd, is a vampire,and the night and its creatures belong to
              him. As long as Strahd exists, Barovia and the land around it will
              never be safe. <br /> A group of Heroes has recently arrived in
              Barovia, stepping out of the mists to find themselves caught up in
              the evil emanating from Castle Ravenloft. These Heroes have chosen
              to enter the castle and discover the secrets waiting within. The
              dangers are great, the monsters are deadly,and only the bravest
              Heroes stand a chance of surviving of defeating Strahd and his
              minions
            </p>
          </div>
          <div className="display2" id="square">
            <h4>GAME OVERVIEW</h4>
            <p className="ptext">
              The <i>Dengeons & Dragons:Castle Ravenloft Board Game</i> is a
              cooperative adventure game. You and your fellow Heroes must work
              as a team to succeed in the adventures that unfold within the
              castle. You either win together or lose togather Each player
              selects a Hero, who has come to Barovia to discover the secrets of
              Catle Ravenloft. Choose from the Dragonborn Fighter, Human Rogue,
              Dwarf Cleric, Eladrin Wizard, Human Ranger, or a Hero from another
              D&D Adventure System board game. Heroes explore the dungeon
              beneath the castle, solve mysteries, fight Monster, and Villains
              contained within the halls of Castle Ravenloft(with a littel help
              from you).
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
