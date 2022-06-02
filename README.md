# random-rng
Random assortment of RNG-based functions. You never needed this, but now you have it.

## Installing
I prefer `require()` but I don't care what you use.
```js
const { ... } = require("random-rng")
```
```js
import { ... } from 'random-rng'
```

## Usage
- [odds](#odds)
- [gen_word](#genword)
- [gen_sentence](#gensen)
- [gen_paragraph](#genpar)
- [gen_title](#gentitle)

<div id="odds"></div>

### odds
Uses a number through 1 - 99 to use as a percentage in RNG.

**Example**
```js
const { odds } = require("random-rng")

if (odds(15)) { // 15% of the time
  console.log("You win!")
} else {
  console.log("You lose...")
}
```

<div id="genword"></div>

### gen_word
Generates a random word that may or may not be real. (we don't know)

**Example**
```js
const { gen_word } = require("random-rng")

if (gen_word() == "hi") { // pretty small chance
  console.log("Hello!!")
} else {
  console.log("???????")
}
```

<div id="gensen"></div>

### gen_sentence
Generates a random sentence with random punctuation and random words. I'm going to admit this uses [gen_word](#genword).

`len` - Length of the sentence in words.

**Example**
```js
const { gen_sentence } = require("random-rng")

// possible social app code

if (user.new) {
  user.bio = gen_sentence(8) // generates a random 8 sentence bio.
}
```

<div id="genpar"></div>

### gen_paragraph
Generates a full-blown paragraph using [gen_word](#genword) and [gen_sentence](#gensen). This was made for fun.

`min` - Minimum length of a sentence in words.<br>
`max` - Maximum length of a sentence in words.<br>
`len` - The amount of sentences in the paragraph.

**Example**
```js
const { gen_paragraph } = require("random-rng")

// possible showcase app here

app.box[92].content = gen_paragraph() // generates filler text for box 92.
```

<div id="gentitle"></div>

### gen_title
Generates a title for a movie, a video game, I don't know. Some combinations might be- uh... mature.

**Example**
```js
const { gen_title } = require("random-rng")

// possible book creation code here

book.filler_title = gen_title() // generates a filler title that the user can change (if they want to)
```

## *Have fun.*
