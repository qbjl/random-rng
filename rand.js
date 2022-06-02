const combinations = ["CVCC", "CVCCVC", "VCC", "VCV", "CVC", "VCCVCVCC", "CVCCCV", "CVV", "CCV", "CVCVCCV", "VCCVCV", "CVCCVVC", "VC", "CV"]
const consonants = "bcdfghjklmnpqrstvwxz"
const vowels = "aeiouy" // using "y" because funny
const adjectives = ["Fuzzy", "Awesome", "Snowy", "Horny", "Destroyed", "Heavy", "Locked", "Open", "Free", "Damaged", "Held", "Kinky", "Delicious", "Firey", "Cold", "Skinny", "Slim", "Fat", "Strong", "Bold", "Chubby", "Devine", "Sticky", "Shiny"]
const nouns = ["Castle", "Dungeon", "Cliff", "Mountain", "Goddess", "God", "Door", "Chest", "Cabin", "Boy", "Girl", "Spirit", "Amethyst", "Diamond", "Ruby", "Pearls", "Opals", "Toy", "Loli", "Neko", "Woman", "Man", "Present", "Tree", "Sap"]

var rand = {}

/** 
 * Runs RNG with a percentage as chance.
 * @param {number} n - a number between 1 - 99 without the percentage symbol.
 */

rand.odds = function (n) {
  return (Math.random() * 11 >= 10 - (n / 10) ? true : false)
}

/** 
 * Generates a random word that is most commonly nonsense.
 */

rand.gen_word = function () {
  var word = ""
  var combination = combinations[Math.floor(Math.random() * combinations.length)]
  for (var i = 0; i < combination.length; i++) {
    if (combination.charAt(i) == "V") {
      word += vowels[Math.floor(Math.random() * vowels.length)]
    } else {
      word += consonants[Math.floor(Math.random() * consonants.length)]
    }
  }
  return word
}

/** 
 * Generates a sentence with random words and punctuation.
 * @param {number} len - The length of the sentence in words.
 */

rand.gen_sentence = function (len) {
  const punctuation = ":;,-"
  const end_punctuation = "?.!"
  var sentence = ""
  for (var i = 0; i < len - 1; i++) {
    var word = rand.gen_word()
    if (rand.odds(15)) {
      word += punctuation[Math.floor(Math.random() *  punctuation.length)]
    }
    sentence += word + " " // space because yes
  }
  var word = rand.gen_word() // one last time
  word += end_punctuation[Math.floor(Math.random() *  end_punctuation.length)] // no more chance because we're ending the sentence
  sentence += word
  return sentence
}

/**
 * Generates a paragraph with randomized words.
 * @param {number} min - The minimum length of a sentence in words.
 * @param {number} max - The maximum length of a sentence in words.
 * @param {number} len - The amount of sentences in the paragraph.
 */

rand.gen_paragraph = function (min, max, len) { // you never needed this, but now you have it
  var paragraph = ""
  for (var i = 0; i < len - 1; i++) {
    paragraph += rand.gen_sentence(Math.floor(Math.random() * max) + min) + " "
  }
  paragraph += rand.gen_sentence(Math.floor(Math.random() * max) + min)
  return paragraph
}

/** 
 * Generates a title for a game, movie, etc.
 */

rand.gen_title = function () {
  var title = ""
  if (rand.odds(33)) {
    title += "The "
  } else if (rand.odds(33)) {
    title += "A(n) "
  }
  title += adjectives[Math.floor(Math.random() * adjectives.length)] + " "
  title += nouns[Math.floor(Math.random() * nouns.length)]
  return title
}

module.exports = {
  odds: (n) => {
    return rand.odds(n) 
  },
  gen_word: () => {
    return rand.gen_word()
  },
  gen_sentence: (len) => {
    return rand.gen_sentence(len)
  },
  gen_paragraph: (min, max, len) => {
    return rand.gen_paragraph(min, max, len)
  },
  gen_title: () => {
    return rand.gen_title()
  }
}