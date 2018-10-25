import ActionBuilder from './ActionBuilder';

const COUNTDOWN = '_COUNTDOWN';
const MAX_TICKS = 5;
const MIN_TICKS = 3;
export default class ModifierBuilder extends ActionBuilder {
  constructor(currParams, setCountdown) {
    super(currParams);
    this.setCountdown = setCountdown;

    this.name = 'Modifier';
    this.playerlessActions = {
      base: [
        'You are a dog',
        'Wrap yourself in toilet paper',
        'Speak like batman',
        'Speak in a different accent',
        'Act like a movie villain',
        'Act like a pirate',
        'Act like a fatcat billionaire',
        'You are mute',
        'Act like royalty',
        'Act like the president',
      ],
    };
    this.actions = {};
    this.info = {
      base: [
        'until the next round',
        'for 5 minutes',
        'for 6 minutes',
        'for 7 minutes',
        'for a minute',
        'for 2 rounds',
        'until all players agree you should stop',
        'until you finish your drink',
        COUNTDOWN,
      ],
    };
  }

  buildAction() {
    const chosenAction = this.getAction(this.actions, this.playerlessActions);

    let fullAction = chosenAction.value;
    if (!chosenAction.isPlayerless) {
      fullAction += ` ${ActionBuilder.getPlayer()}`;
    }
    let chosenInfo = super.getInfo(this.info);
    if (chosenInfo === COUNTDOWN) {
      chosenInfo = 'until I tell you to stop (seriously. I\'ll keep you posted)';
      this.setCountdown(Math.ceil(Math.random() * MAX_TICKS) + MIN_TICKS);
    }
    fullAction += ` ${chosenInfo}.`;

    return fullAction;
  }
}
