# Words Meet World

Words Meet World API allows users to check word count, character count, sentence count, paragraph count, and bigrams of any given text.

Website: https://wordsmeetworld.herokuapp.com/

## Using the API

Here is a description of the api endpoints:

`/api/wordCount` - takes a string as the body of a GET request and returns an integer representing the number of words in the string. A word is defined as any non-empty string. Words can be separated by spaces, newlines or tabs.

`/api/characterCount` - takes a string as the body of a GET request and returns an integer representing the number of words in the string. All printable characters, including spaces, tabs and newlines are counted.

 `/api/paragraphCount` - takes a string as the body of a GET request and returns an integer representing the number of words in the string. A paragraph is defined as any non-empty collection of words. Paragraphs are separated by newlines.

 `/api/bigramsCount` - takes a string as the body of a GET request and returns an integer representing the number of words in the string. A bigram is defined as any pair of adjacent words. Only unique bigrams are counted. Bigrams are not case-sensitive, e.g. "Beautiful day" and "beautiful day" will be counted as distinct bigrams. Also, bigrams are order-sensitive, e.g. "red dog" and "dog red" will be considered as distinct bigrams.

## Tech Stack

NodeJS / Express / React

Built with ♡ by [May Hein](https://www.linkedin.com/in/mayhein/)




