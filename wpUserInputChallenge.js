/*
Word Puzzle Challenge
----------------------
Try to create a word puzzle using just the JavaScript functionality that I've shown you so far. 
What I would like you to do is create a program that can assemble a story from a template that has missing words. 
What it should do is insert the missing words into the template. The words should come from a collection of nouns,
adjectives, and verbs. You can store these any way that you like and you can access them any way that you like.

To show you an example of what I am expecting, the template could be something such as "I like to [verb]. 
My favorite [noun] is [adjective] [noun]. That's what makes me [adjective]." So for example, we might have a set of 
words that includes verbs, such as "ski", nouns, such as "hat" and "tractor", and adjectives, such as "gooey" and "purple". 
The result that we output should be "I like to ski. My favorite hat is gooey tractor. That's what makes me purple."

So using the functionality of JavaScript that we've been exposed to so far, create a program that does exactly this.
Takes a template and a set of words, and gives us an output that looks like this.
*/

var nouns = ["dog", "Great Dane", "horse", "TV", "soup", "tree", "bumblebee"];
var adjectives = ["sleepy", "pretty", "playful", "grumpy", "shiny", "old"];
var verbs = ["run", "sleep", "walk", "gallop", "drive", "saunter"];

var template = ["Come [VERB] at WALMART, where you`ll receive [ADJECTIVE] discounts on all of your favourite brand name [NOUN]s.",
		"Our [ADJECTIVE] associates are there to [VERB] you 24 hours a day.",
		"Here you will find [ADJECTIVE] prices on every [NOUN] you may want or need.",
		"A [NOUN] for Mom, or a [NOUN] for Dad and all the latest [NOUN]s for the whole family.",
		"So come on down to your [ADJECTIVE] [ADJECTIVE] WALMART where a [ADJECTIVE] [NOUN] comes first."];

function substituteBlanks(wpTemp)
{
  var wpReturn;
  var tempStory = [];
  var sbLoop = 0;
  var numWords;
  var whichWord;
  
  tempStory = wpTemp.split(" ");
  numWords = tempStory.length;

  for(sbLoop = 0; sbLoop < numWords; sbLoop++) 
  {
    switch(tempStory[sbLoop]) 
    {
        case "[VERB]":
          whichWord = "Please enter a verb.";
          //tempStory[sbLoop] = prompt("Please enter a verb.", "");
          break;
        case "[VERB]ing":
          whichWord = "Please enter a verb ending in 'ing'.";
          //tempStory[sbLoop] = prompt("Please enter a verb ending in 'ing'.", "");
          break;
        case "[NOUN]":
          whichWord = "Please enter a noun.";
          //tempStory[sbLoop] = prompt("Please enter a noun.", "");
          break;
        case "[NOUN]s":
          whichWord = "Please enter a plural noun.";
          //tempStory[sbLoop] = prompt("Please enter a plural noun.", "");
          break;
        case "[NOUN]s.":
          whichWord = "Please enter a plural noun.";
          //tempStory[sbLoop] = prompt("Please enter a plural noun.", "") + ".";
          break;
        case "[ADJECTIVE]":
          whichWord = "Please enter an adjective.";
          //tempStory[sbLoop] = prompt("Please enter an adjective.", "");
          break;
      default:
        continue;
    }
    tempStory[sbLoop] = prompt(whichWord, "");
  }
  
  wpReturn = tempStory.join(" "); 
  return(wpReturn);
}

function WordPuzzle()
{
  var wpStory = [];
  
  template.forEach(function (item, index, array) {
    wpStory[index] = substituteBlanks(item);
    console.log(wpStory[index]);
  });
  
}

WordPuzzle();
