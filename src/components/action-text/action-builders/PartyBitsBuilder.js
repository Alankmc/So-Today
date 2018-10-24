import ActionBuilder from './ActionBuilder';

export default class PartyBitsBuilder extends ActionBuilder {
  constructor(currParams) {
    super(currParams);

    this.name = 'Party Bits';
    this.playerlessActions = {
      base: [
        'Finish you drink. Now',
        'Take a breather. You get nothing',
        'Everyone shh. A minute of silence for your collective dignity',
        'Hugs everywhere. Everyone go around hugging',
        'Take your shoes off',
      ],
      violence: [
        'Public enemy #1. Everyone hits you',
      ],
    };
    this.actions = {
      base: [
        'Throw your drink on ',
        'Exchange an article of clothing with',
      ],
    };
  }

  buildAction() {
    const chosenAction = this.getAction(this.actions, this.playerlessActions);

    let fullAction = chosenAction.value;
    if (!chosenAction.isPlayerless) {
      fullAction += ` ${ActionBuilder.getPlayer()}`;
    }
    fullAction += '.';

    return fullAction;
  }
}
