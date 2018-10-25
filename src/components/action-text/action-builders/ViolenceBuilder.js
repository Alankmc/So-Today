import ActionBuilder from './ActionBuilder';

export default class ViolenceBuilder extends ActionBuilder {
  constructor(currParams) {
    super(currParams);

    this.name = 'Violence';
    this.playerlessActions = {};
    this.actions = {
      base: ['Poke', 'Pinch', 'Pay'],
      violence: [
        'Punch',
        'Kick',
        'Slap',
        'Bite',
      ],
    };

    this.info = {
      base: [
        'in the face',
        'on the arm',
        'on the head',
        'on the leg',
        'on the ear',
        'on the foot',
      ],
      violence: [
        'in the face',
        'on the arm',
        'on the head',
        'on the leg',
        'on the ear',
        'on the foot',
      ],
    };
  }

  buildAction() {
    const chosenAction = this.getAction(this.actions, this.playerlessActions);

    let fullAction = chosenAction.value;
    if (!chosenAction.isPlayerless) {
      fullAction += ` ${ActionBuilder.getPlayer()}`;
    }
    fullAction += ` ${super.getInfo(this.info)}!`;

    return fullAction;
  }
}
