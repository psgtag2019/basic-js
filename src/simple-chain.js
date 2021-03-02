const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let link = '( )';
    if (value !== undefined) {
      link = '( ' + value + ' )';
    }
    this.chain.push(link);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || typeof(position) !== 'number') {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
