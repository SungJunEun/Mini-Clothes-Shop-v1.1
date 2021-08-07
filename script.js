'use strict';
function loadItems() {
  return fetch("data/data.json")
        .then(response => response.json())
        .then(data => data.items);
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLstring(item)).join("");  
}
function hideItems(items) {
  
}

function createHTMLstring(item) {
  return `<li class="item">
        <img src=${item.img} alt=${item.type} class="thumbnail-img">
       ${item.gender} ${item.size} size
        </li>`
}

function addEventItems(items) {
  const logo = document.querySelector('.logo');
  const menu = document.querySelector('.menu');
  logo.addEventListener('click', logodisplay);
  menu.addEventListener('click', menudisplay);
  function logodisplay() {
    displayItems(items);
  }
  function menudisplay(e) {
    onButtonClick(e, items);
  }
}

function onButtonClick(e, items) {
  const key = e.target.dataset.key;
  const value = e.target.dataset.value;
  if(key == null  || value == null) {
    return;
  }
  displayItems(items.filter(item => item[key] === value));
}

loadItems()
  .then(items => {
    displayItems(items);
    addEventItems(items);
  })
  .catch(console.log);