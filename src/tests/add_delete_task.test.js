import { add } from '../modules/status.js';

describe('tests for add and delete functions', () => {
  test('Should properly add a task to localstorage', () => {
    document.body.innerHTML = `
    <input
              class="todo-input"
              type="text"
              name="New Task"
              id="newTask"
              placeholder="Add to your list..."
              value = "Do homework"
              required
            />
        <ul class="todo-list"></ul>
    `;
    const list = [];
    add(list);

    expect(JSON.parse(localStorage.getItem('localTasks'))).toHaveLength(1);
  });
});
