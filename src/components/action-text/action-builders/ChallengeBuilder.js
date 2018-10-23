import ActionBuilder from './ActionBuilder';

export default class ChallengeBuilder extends ActionBuilder {
  constructor(currParams) {
    super(currParams);

    this.name = 'Challenge';
    this.playerlessActions = {
      icebreak: [
        'Challenge a stranger',
      ],
    };
    this.actions = {
      base: ['Challenge'],
    };

    this.info = {
      base: [
        'to an arm wrestle',
        'to a chugging competition',
        'to a pushup competition',
        'to a 100m sprint',
        'to a friendly wrestle',
        'to a "don\'t breathe" race',
        'to a "don\'t laugh" race',
        'to a modeling runway walkoff',
        'to a dance competition',
        'to a beatboxing show-off',
        'to a joke competition',
        'to a Rock Paper Scissors showdown',
      ],
      violence: [
        'to a sumo brawl',
      ],
    };
  }

  buildAction() {
    const chosenAction = this.getAction(this.actions, this.playerlessActions);

    let fullAction = chosenAction.value;
    if (!chosenAction.isPlayerless) {
      fullAction += ` ${ActionBuilder.getPlayer()}`;
    }
    fullAction += ` ${super.getInfo(this.info)}!!`;

    return fullAction;
  }
}
