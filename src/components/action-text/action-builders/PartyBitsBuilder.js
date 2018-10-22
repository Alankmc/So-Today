import ActionBuilder from './ActionBuilder';

export default class PartyBitsBuilder extends ActionBuilder {
  constructor(currParams) {
    super(currParams);

    this.name = 'Party Bits';
    this.playerlessActions = {
      base: [
        '',
      ],
    };
    this.actions = {};
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
