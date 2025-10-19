import * as api from "./backend-connection";

console.log("I'm the unit.js file");

window.onload = () => {


  const form = document.getElementById('new-unit-form');
  const addUnitButton = document.getElementById('add-unit-button');
  const createButton = document.getElementById('create-button');
  const cancelButton = document.getElementById('cancel-button');

  const handleFormVisibility = () => {
    if (form.style.display === 'none') {
      console.log('showing form');
      form.style.display = 'block';
    } else {
      console.log('hiding form');
      form.style.display = 'none';
    }
  }

  const createUnit = async unitName => {
    await api.apiFetch('/units/add', 'POST', {unitName});
  }

  if (addUnitButton != null)
    addUnitButton.onclick = handleFormVisibility;
  if (cancelButton != null)
    cancelButton.onclick = handleFormVisibility;
  if (createButton != null)
    createButton.onclick = createUnit;
}
