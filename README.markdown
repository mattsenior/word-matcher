# Word Matching CodeKata

## Install and run tests

```sh
$ npm install
$ make test
```

## Usage

```sh
$ ./bin/word-matcher abcdef
```

### Example output

```sh
$ ./bin/word-matcher abcdef
[==================================================] 45425 / 45425
20 matches found
Matches (longest first): faced, abed, bade, bead, cafe, deaf, face, fade, Abe, ace, bad, bed, cab, DEC, fed, ad, be, De, Ed, Fe
Matches (shortest first): ad, be, De, Ed, Fe, Abe, ace, bad, bed, cab, DEC, fed, abed, bade, bead, cafe, deaf, face, fade, faced
Matches (alphabetical): Abe, abed, ace, ad, bad, bade, be, bead, bed, cab, cafe, De, deaf, DEC, Ed, face, faced, fade, Fe, fed
Lookup duration: 0.397s
```

## CodeKata Instructions

1. Using the letters from a string input, print out the longest word that you can match from the wordlist (attached).

    For example:
    
    String input = "ogdz"
    Longest word *might* = "dog"

2. Then write out the shortest word
3. Then the total number of words from the wordlist that you can make from the input
4. Then print all the words in alphabetical order
5. Then print all the words in length order (desc)
6. Then print out how long the entire process too from start to finish

Here’s a starter input "bceeusshydlsw".

Is this as simple as it sounds? Have you covered all edge cases? What do you do when there are several longest words? No words? Empty string input? Can you get this to perform faster? With less code?
