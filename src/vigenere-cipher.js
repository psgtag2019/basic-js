const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(condition = true) {
    this.condition = condition;
  }

  checkError(message, key) {
    if (!message || !key) {
      throw new Error('Какие ваши аргументы?');
    }
  }

  encrypt(message, key) {
    this.checkError(message, key);

    let messageLength = message.length;
    let keyLength = key.length;
    let encryptedMessage = "";
    message = message.toUpperCase();
    key = key.toUpperCase();

    let countLetter = 0;
    for (let i = 0; i < messageLength; i++) {
      if (message.codePointAt(i) > 64 && message.codePointAt(i) < 91) {
        if (countLetter === keyLength) {
          countLetter = 0;
        }
        encryptedMessage += String.fromCodePoint(((message.codePointAt(i) + key.codePointAt(countLetter)) % 26) + 65);
        countLetter++;
      }
      else {
        encryptedMessage += message[i];
      }
    }

    if (this.condition) {
      return encryptedMessage;
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
  }    
  decrypt(encryptedMessage, key) {
    this.checkError(encryptedMessage, key);

    let messageLength = encryptedMessage.length;
    let keyLength = key.length;
    let decryptedMessage = "";
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let countLetter = 0;
    for (let i = 0; i < messageLength; i++) {
      if (encryptedMessage.codePointAt(i) > 64 && encryptedMessage.codePointAt(i) < 91) {
        if (countLetter === keyLength) {
          countLetter = 0;
        }
        let code = ((encryptedMessage.codePointAt(i) - (key.codePointAt(countLetter))) % 26);
        if (code < 0) {
          code = 26 + code;
        }
        decryptedMessage += String.fromCodePoint(code + 65);
        countLetter++;
      }
      else {
        decryptedMessage += encryptedMessage[i];
      }
    }

    if (this.condition) {
      return decryptedMessage;
    } else {
      return decryptedMessage.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
