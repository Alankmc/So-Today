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
  'the last player',
  'your date',
  'your friend',
  'the drunkest player',
  'the soberest player',
];

export default class ActionBuilder {
  constructor(currParams) {
    this.currParams = currParams;
  }

  static getMeFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  static getMe(obj) {
    const keys = Object.keys(obj);
    return ActionBuilder.getMeFromArray(keys);
  }

  reduceBasedOnParams(obj) {
    const pool = Object.keys(obj).reduce((total, curr) => {
      if (this.currParams[curr]) {
        return total.concat(obj[curr]);
      }
      return total;
    }, []);
    return pool;
  }

  getAction(player, playerless) {
    const playerPool = this.reduceBasedOnParams(player);
    const playerlessPool = this.reduceBasedOnParams(playerless);
    const actionIndex = Math.floor(Math.random() * (playerlessPool.length + playerPool.length));
    if (actionIndex >= playerPool.length) {
      return {
        value: playerlessPool[actionIndex - playerPool.length],
        isPlayerless: true,
      };
    }
    return {
      value: playerPool[actionIndex],
      isPlayerless: false,
    };
  }

  getInfo(info) {
    return ActionBuilder.getMeFromArray(this.reduceBasedOnParams(info));
  }

  static getPlayer() {
    return ActionBuilder.getMeFromArray(PLAYERS);
  }
}
