export default class localStorageInstance {
  isStrict = true;
  constructor(strict) {
    if (!strict) this.isStrict = true;
    this.isStrict = strict;
  }

  set = (key, value) => {
    if (!key || !value)
      throw new Error('Please all of the following parameters: Key, Value');
    localStorage.setItem(key, value);
  };

  get = (key, fallback) => {
    // Type Checking
    if (typeof key != 'string')
      throw new Error('Please enter a value with the type of string');
    // is Null
    if (!localStorage.getItem(key)) {
      if (this.isStrict) {
        localStorage.setItem(key, fallback);
        throw new Error(
          "localStorage Value doesn't exist, this is a one time fix up..."
        );
      } else {
        localStorage.setItem(key, fallback);
        console.warn(
          "localStorage Value doesn't exist, this is a one time fix up..."
        );
      }
    }
    // else
    return localStorage.getItem(key);
  };
  remove = (key) => {
    if (typeof key != 'string')
      throw new Error('Please enter a value with the type of string');
    if (!localStorage.getItem(key))
      if (this.isStrict) {
        throw new Error('There is nothing to remove');
        return;
      } else {
        console.warn('There is nothing to remove');
        return;
      }
  };
}
