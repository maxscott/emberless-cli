import config from './config/environment';
import RSVP from 'npm:rsvp';
// ======== Unique Import ======== //
import { update, render, notify } from './game-loop';
import averageFPS from './delta-counter';

export default {
  create(opts) {
    this.name = opts["name"];
    this.version = opts["name"];
    this.config = config;
    this.mainLoop(null);
  },

  mainLoop(state) {
    state = state || {};
    state.now = Date.now();
    state.average = averageFPS(state.now);
    console.log(state.average);

    update(state).then(() => {
      return RSVP.all([
        render(state),
        notify(state)
      ]);
    }).then(() => {
      requestAnimationFrame(() => this.mainLoop(state));
    });
  }
};
