import * as api from './backend-connection.js';

console.log("I'm the library.js file")

const countUnits = async () => {
  const units = await api.apiFetch('/units/list', 'GET');
  if(units) return units.length;
}

const createUnits = async () => {
  const container = document.getElementById('units-container')
  const count = await countUnits();

  for(let i = 0; i < count; i++) {
    const rect = document.createElement('div');
    rect.style.width = '100px';
    rect.style.height = '50px';
    rect.style.border = '2px solid black';
    rect.style.backgroundColor = 'lightgray';

    container.appendChild(rect);
  }
}
