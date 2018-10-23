import ActionBuilder from './ActionBuilder';

export default class ImpressionBuilder extends ActionBuilder {
  constructor(currParams) {
    super(currParams);

    this.name = 'Impression';
    this.playerlessActions = {
      base: ['Do your best impression of'],
    };

    this.actions = {
      base: ['Do your best impression of'],
    };

    this.info = {
      base: [
        'Jack Nicholson',
        'Batman',
        'the Joker',
        'Batman\'s Bane',
        'Jack Sparrow',
        'Mickey Mouse',
        'Obama',
        'Donald Trump',
        'Matthew McConaughey',
        'someone from Friends',
        'a chicken',
        'a donkey',
        'a horse',
        'a monkey',
        'some Pixar character',
        'someone from a Tarantino movie',
        'the Godfather',
        'Rocky Balboa',
        'Arnold Schwarzenegger',
        'a dinosaur',
        'a pig',
        'Owen Wilson\'s "wow"',
        'a valley girl',
        'Bruce Lee',
      ],
    };
  }

  buildAction() {
    const chosenAction = this.getAction(this.actions, this.playerlessActions);

    let fullAction = chosenAction.value;
    if (!chosenAction.isPlayerless) {
      fullAction += ` ${ActionBuilder.getPlayer()}.`;
    } else {
      fullAction += ` ${super.getInfo(this.info)}.`;
    }

    return fullAction;
  }
}
