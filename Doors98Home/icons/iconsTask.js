// DOM utility functions:

const ELS = (sel, par) => (par || document).querySelectorAll(sel);


// TASK:

const ELS_child = ELS(".dropintaskbar");

let EL_drag; // Used to remember the dragged element

const addEvents = (EL_ev) => {
  EL_ev.setAttribute("draggable", "true");
  EL_ev.addEventListener("dragstart", onstart);
  EL_ev.addEventListener("dragover", (ev) => ev.preventDefault());
  EL_ev.addEventListener("drop", ondrop);
};

const onstart = (ev) => EL_drag = ev.currentTarget;

const ondrop = (ev) => {
  if (!EL_drag) return;

  ev.preventDefault();
  
  const EL_targ = ev.currentTarget;
  const EL_targClone = EL_targ.cloneNode(true);
  const EL_dragClone = EL_drag.cloneNode(true);
  
  EL_targ.replaceWith(EL_dragClone);
  EL_drag.replaceWith(EL_targClone);
  
  addEvents(EL_targClone); // Reassign events to cloned element
  addEvents(EL_dragClone); // Reassign events to cloned element
  
  EL_drag = undefined;
  for(let i =0; i < document.querySelectorAll('.dropintaskbar').length; i++){
    if(document.querySelectorAll('.dropintaskbar')[i].innerHTML == ""){
      console.log(document.querySelectorAll('.dropintaskbar')[i])
    }
  }
};

ELS_child.forEach((EL_child) => addEvents(EL_child));















