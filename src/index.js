import './style.css';

const tasks = JSON.parse(localStorage.getItem('ToDo')) || [];

const displayItems = () => {
  const ul = document.getElementById('list');
  tasks.forEach((item, index) => {
    const CHECK = item.completed ? 'checked' : '';
    const TROUGHLINE = item.completed ? 'line-through' : '';
    item.index = index;
    ul.innerHTML += `<li id="${item.index}"><input type="checkbox" class="checkbox" id="checkbox-${item.index}" ${CHECK}><input class="text ${TROUGHLINE} text-${item.index}" type="text" value ="${item.description}"><i class="fa fa-ellipsis-v open" aria-hidden="true"></i><i class="fa fa-trash-o trash d-none" aria-hidden="true"></i></li>`;
  });
};
displayItems();