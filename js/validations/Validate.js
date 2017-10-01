class Validate {
  static name(name) {
    return name.length >= 3;
  }

  static email(email) {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
  }

  static tel(tel) {
    const regex = /^(\(?[0-9]{2}\)?)\s?([9]{1})?([0-9]{4})-?([0-9]{4})$/;
    return regex.test(tel);
  }

  static info(info) {
    return info.length >= 4;
  }
}

module.exports = Validate;