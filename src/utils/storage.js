export const localStorage = {
  set(name, value) {
    try {
      return localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return new Error(error);
    }
  },
  get(name) {
    try {
      return JSON.parse(localStorage.getItem(name));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return new Error(error);
    }
  }
};
