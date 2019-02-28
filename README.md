# Castle-Ravenloft
The master of Castle Ravenloft is having guests for dinner—and you are invited!

# Final Project, Fight!

The castle rises over the dark forests of the land of Barovia,
looking down upon a sad, frightened village surrounded by an
endless sea of dense fog and mist. The master of the castle,
Count Strahd, is a vampire, and the night and its creatures
belong to him. As long as Strahd exists, Barovia and the land
around it will never be safe.
A group of Heroes has recently arrived in Barovia, stepping out
of the mists to find themselves caught up in the evil emanating
from Castle Ravenloft. These Heroes have chosen to enter the
castle and discover the secrets waiting within. The dangers are
great, the monsters are deadly, and only the bravest Heroes
stand a chance of surviving or defeating Strahd and his minions. 

**Game Overview**

The Dungeons & Dragons: Castle Ravenloft
™ Board Game is a
cooperative adventure game. You and your fellow Heroes must
work as a team to succeed in the adventures that unfold within
the castle. You either win together or lose together.
Each player selects a Hero, who has come to Barovia to discover
the secrets of Castle Ravenloft. Choose from the Dragonborn
Fighter, Human Rogue, Dwarf Cleric, Eladrin Wizard, Human
Ranger, or a Hero from another D&D® Adventure System
board game. Heroes explore the dungeon beneath the castle,
solve mysteries, fight Monsters, and uncover magic treasure.
The game runs the Traps, Events, Monsters, and Villains contained within the halls of Castle Ravenloft (with a little help
from you).

**Number of Players**

The game can be played with any number of players, from 1 to
5. Each player controls one Hero—and the game does the rest!

## User Stories

### MVP

As a user/player:
  * I want tiles and cards to be randomly generated
  * I want to be able to choose different win/lose conditions     (adventures)
  * I want to be able to choose from the 5 listed characters
  * I want to be able to play by myself or with up to 5 friends
  * I want to see my character/'s on the bottom of the screen

### Stretch

  * I want to be able to record my game and store in a DB

## Views

  | name           | purpose                                                 |
  | -------------- | ------------------------------------------------------- |
  | Welcome Screen | Splash screen to explain game and basics before playing |
  | Game Board     | Main screen to play game                                |

## Reducers
  **WIP**
  | name | purpose |
  | ---- | ------- |

 ## Actions
  | name | purpose |
  | ---- | ------- |

## API (Client - Server)

| Method | Endpoint                | Usage                                   | Response                                         |
| ------ | ----------------------- | --------------------------------------- | ------------------------------------------------ |
| GET    | /api/v1/dungeon-tiles   | generte game play tiles                 | an array of data for 1 tile                      |
| GET    | /api/v1/encounter-cards | store all encounter cards               | an object containing data for that specific card |
| GET    | /api/v1/monster-cards   | return object with data relvant to that |

| GET     | /api/v1/power-cards     | generate power cards            | object of data relating to that card.            | **WIP** |

DB (Server Side)

There should be three tables for MVP

