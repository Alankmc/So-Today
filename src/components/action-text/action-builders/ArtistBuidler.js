import ActionBuilder from './ActionBuilder';

const SING_ACT_RATIO = 0.3;

export default class ArtistBuidler extends ActionBuilder {
  constructor(currParams) {
    super(currParams);

    this.name = 'Artist';
    this.singActionPlayerless = {
      base: [
        'Sing',
        'Invent on the spot',
        'Dance to',
        'Dance absurdly energetically to',
      ],
      no_library: [
        'Scream out',
      ],
    };
    this.actActionPlayerless = {
      base: [
        'Act out',
      ],
    };
    this.actActions = {
      base: [
        'Act out',
      ],
    };
    this.singActions = {
      base: [
        'Duet to',
      ],
    };

    this.singInfo = {
      base: [
        'the national anthem',
        'a very emo song',
        'a country song',
        'a sad song',
        'a song in another language',
        'a TV theme song',
      ],
    };

    this.actingInfoSingle = {
      base: [
        'the death of a loved one',
        'your drink being poisoned',
        'slipping on a banana',
        'receiving the greates gift of your goddamn life',
        'receiving horrible news',
        'discovering you won the lottery',
        'going fishing',
        'a presidential announcement about a new law',
      ],
    };

    this.actingInfoDouble = {
      base: [
        'your marriage proposal',
        'finding out you two are pregnant',
        'your breakup',
        'two bros in the gym',
        'two straight guys at the bar',
        'a Mexican drama cheating discovery',
        'a weed-induced discovery about the universe',
      ],
      no_library: [
        'going into labor',
        'a loud, almost-violent argument',
        'a dragonball Kamehameha clash',
        'a slowmo Matrix style brawl, with sound effects',
      ],
      violence: [
        'a kung-fu fighting sequence',
      ],
    };
  }

  buildAction() {
    const isSing = Math.random() < SING_ACT_RATIO;
    let chosenAction;

    if (isSing) {
      chosenAction = this.getAction(this.singActions, this.singActionPlayerless);
    } else {
      chosenAction = this.getAction(this.actActions, this.actActionPlayerless);
    }

    let fullAction = chosenAction.value;

    if (isSing) {
      fullAction += ` ${super.getInfo(this.singInfo)}`;
    } else if (chosenAction.isPlayerless) {
      fullAction += ` ${super.getInfo(this.actingInfoSingle)}`;
    } else {
      fullAction += ` ${super.getInfo(this.actingInfoDouble)}`;
    }

    if (!chosenAction.isPlayerless) {
      fullAction += `, with ${ActionBuilder.getPlayer()} as co-star.`;
    } else {
      fullAction += '.';
    }

    return fullAction;
  }
}
