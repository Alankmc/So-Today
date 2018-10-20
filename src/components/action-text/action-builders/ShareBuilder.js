import ActionBuilder from './ActionBuilder';

export default class ShareBuilder extends ActionBuilder {
  constructor(currParams) {
    super(currParams);
    console.log('Building with', currParams);
    this.name = 'Share';
    this.playerlessActions = {
      base: ['share with the group'],
      no_library: ['yell out'],
      icebreak: [
        'tell a stranger',
        'text you tinder crush',
        'text someone on your contact list',
      ],
    };

    this.actions = {
      base: ['whisper in the ear of'],
    };

    this.info = {
      base: [
        'how your last shit was, in grand detail',
        'something noone in the group knows',
        'your favorite pokemon',
        'the name of your least favorite person in the group',
        'who you\'re voting for',
      ],
    };
  }

  buildAction() {
    const chosenAction = this.getAction(this.actions, this.playerlessActions);

    let fullAction = chosenAction.value;
    if (!chosenAction.isPlayerless) {
      fullAction += ` ${ActionBuilder.getPlayer()}`;
    }
    fullAction += ` ${super.getInfo(this.info)}.`;

    return fullAction;
  }
}
