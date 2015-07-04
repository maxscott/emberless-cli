import config from './config/environment';

export default {
  create(opts) {
    this.name = opts["name"];
    this.version = opts["name"];
    this.config = config;
  }
};
