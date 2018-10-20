const ACTIONS = {
  share: {
    base: [
      ['share with the group', ''],
      ['whisper in the ear of', 'player'],
    ],

    no_library: [
      ['yell', ''],
      ['scream out', ''],
    ],

    icebreak: [
      ['tell a stranger', ''],
      ['text you tinder crush', ''],
      ['someone on your contact list', ''],
    ],
  },

  challenge: {
    base: [
      'TO AN ARM WRESTLE',
      'TO A SHORT RACE',
      'TO A GAME OF TAG GO GO GO',
      'TO A CHUG RACE',
      'TO A SLAP COMPETITION',
    ],
  },

  act_out: {
    base: [

    ],
  },

};

const INFO = {
  base: [
    'how your last shit was, in grand detail',
    'something noone in the group knows',
    'your favorite pokemon',
    'the name of your least favorite person in the group',
    'who you\'re voting for',
  ],
};

const PLAYERS = [
  'the player to your right',
  'the player to your left',
  'the player across from you',
  'the youngest player',
  'the oldest player',
  'the strongest player',
  'the hottest player',
  'the tallest player',
  'the shortest player',
];


export default { ACTIONS, PLAYERS, INFO };
