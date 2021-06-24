# Words Meet World

Words Meet World API allows users to check word count, character count, sentence count, paragraph count, and bigrams of any given text.

Website: https://wordsmeetworld.herokuapp.com/

## Using the API

The request for all endpoints has the following json format:

```
{
    "text": "YOUR TEXT HERE"
}
```

The responses will have the following json format:

```
{
   "count": 1337 // placeholder integer
}
```

Here is a description of the api endpoints:

`POST /api/wordCount` - takes a string and returns the character count in the string. A word is defined as any non-empty string. Words can be separated by spaces, newlines or tabs.

`POST /api/characterCount` - takes a string and returns the word count in the string. All printable characters, including spaces, tabs and newlines are counted.

`POST /api/sentenceCount` - takes a string and returns the sentence count in the string. A setence is defined as any non-empty collection of words separated by periods, exclamation marks or question marks. 

 `POST /api/paragraphCount` - takes a string and returns the paragraph count in the string. A paragraph is defined as any non-empty collection of words separated by newlines.

 `POST /api/uniqueBigramsCount` - takes a string and returns the unique bigrams count in the string. A bigram is defined as any pair of adjacent words. Only unique bigrams are counted. Bigrams are not case-sensitive, e.g. "Beautiful day" and "beautiful day" will be counted as distinct bigrams. Also, bigrams are order-sensitive, e.g. "red dog" and "dog red" will be considered as distinct bigrams.

## Tech Stack

NodeJS / Express / React

Built with ♡ by [May Hein](https://www.linkedin.com/in/mayhein/)




