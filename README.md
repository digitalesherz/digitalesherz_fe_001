>  HEINRICH KLASSEN \ Frontend-Entwickler \ BERLIN

# Frontend-Challenge


### Implementation details
This Pokémon-Wiki was created with a simple node.js + express.js + jade + less framework. The data is requested via JSON from pokeapi.co.

### Technology stack
+ NODE.js
  + REQUEST.js (for http-requests)
  + GULP.js (for tasks e.g. preproccessing)
  + GULP-LESS (less preproccessor)
+ EXPRESS.js (for basic routing and MVC)
+ JADE templates

### Possible improvements

##### Design
+ use less different font variants
+ build and use a grid
+ use colors of different moves according to category (level up, machine, egg move, tutor)

##### Code
+ get JSON data asynchronously to improve performance
+ initiate and store pokemon-index only correponding to: pokeapi.co/api/v1/pokedex/1
  + on detail-page the current pokemon-ID is used to calculate previous and next pokemon (which leads to dead links because pokedex is not structured incrementally - for example: http://localhost:3000/11)
+ real endless-scrolling on index with lazy loading
+ implement responsiveness
+ better separation of model, view and controller (MVC principles)
+ build a JSON-call module
+ build a reusable tabNumber()-function
+ make JADE-components whith BLOCK that are reusable
+ implement linting of javascript, less and jade code
+ minimize less
+ use a less-live-reload in dev-dependencies for improved development

##### Briefing
+ deliver the font 'Montserrat Light' for items in MOVES section (detail-page)
+ provide a hint where to find the story of the pokemon (detail-page, after avatar-picture)

## Installation

+ Checkout git repo
+ `npm install`
+ `npm start`
+ Open http://localhost:3000

##### Lizenz
Copyright © 2016 Honeypot GmbH. All rights reserved.


**Heinrich Klassen, Frontend Trainee @ SinnerSchrader Deutschland GmbH**