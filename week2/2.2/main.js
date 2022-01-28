const games = [
    { 
        name: 'cribbage', 
        type: 'card', 
        numberOfPlayers: '2-4 players.', 
        objective: 'players are dealt 6 cards. They take turns laying their cards, and score points for pairs, runs, and cards that add up to 15. The first player to score 121 points wins', 
        idealSetting: 'at the cabin by the fireplace'
    },
    {
        name: 'tri-bucket', 
        type: 'party', 
        numberOfPlayers: '6+ players, but the more the merrier.', 
        objective: 'everyone writes three random things on three pieces of paper and puts them in a bucket. each team gets 2 minutes to guess as many words from the bucket as possible, but with certain restrictions. Round 1: Players simply cannot say any part of the clue they are describing. Round 2: Players must act out the clue (no sounds or talking), and Round 3: Players must use only one word to describe their clue.',
        idealSetting: 'piled into your living room with lots of friends, and drinks'
    },
    {
        name: 'scategories', 
        type: 'creative-thinking', 
        numberOfPlayers: '2-6 players.',
        objective: 'Players are given a list of categories, a piece of paper, and an initial letter. Everyone is then given 2 minutes to list answers that start with the random letter for each category. After the timer, players compare lists and score a point for each unique answer they listed.',
        idealSetting: 'a chill gathering with a little group of friends, or battling it out with your partner to decide who has to cook dinner'
    },
]
console.log('all of the games explained', games);

