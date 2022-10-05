export default class IsCompleted {
  static updateLocalStorage(list) {
    const data = JSON.stringify(list);
    localStorage.setItem('ToDo', data);
  }
}