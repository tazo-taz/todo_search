
var addform = document.querySelector('#addForm');
var items = document.querySelector('#items');
var filter = document.querySelector('#filter');

addform.addEventListener('submit', add);
items.addEventListener('click', remove);
filter.addEventListener('keyup', find);

function add(e){
  e.preventDefault();
  var txt = document.querySelector('#item');
  if(!txt.value)return
  var li = document.createElement('li');
  var btn = document.createElement('button');

  li.className = 'list-group-item';
  btn.className = 'btn btn-danger btn-sm float-right delete';

  btn.appendChild(document.createTextNode('X'));
  li.appendChild(document.createTextNode(txt.value));
  li.appendChild(btn);

  items.appendChild(li);

  txt.value = '';
}

function remove(e){
  if(e.target.classList.contains('delete')){
  items.removeChild(e.target.parentElement);
}
}

function find(e){
  var txt = e.target.value.toLowerCase();
  var itemss = items.querySelectorAll('li');

  Array.from(itemss).forEach(function(item){
    if(item.firstChild.textContent.toLowerCase().indexOf(txt) != -1){
      item.style.display = 'block';
    }else{item.style.display = 'none';}
  })
}