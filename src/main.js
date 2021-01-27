import { addTask } from './component/sub.js';

const list = document.querySelector('.section__list');
const search = document.querySelector('.section__text--search--input');

const createTodoList = task => {
  const li = `
    <li class="section__list__item">
      <span>${task}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += li;
}

addTask.addEventListener('submit', e => {
  e.preventDefault();

  const task = addTask.add.value.trim();
  if(task.length) {
    createTodoList(task);
    addTask.reset();
  }
})

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTasks(term);
});

const filterTasks = (term) => {
  Array.from(list.children).filter((todo) => !todo.textContent.toLowerCase().includes(term)).forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children).filter((todo) => todo.textContent.toLowerCase().includes(term)).forEach((todo) => todo.classList.remove('filtered'));
};