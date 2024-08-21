const KEYCODES = {
    ESC: 27,
    TAB: 9,
    RETURN: 13
  };
  
  const btn = document.querySelector("#btn");
  const modal = document.querySelector("#modal");
  const focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const closers = document.querySelectorAll('[wb-data="close"]');
  let previousActiveElement;

  const openModal = (event) => {
    previousActiveElement = document.activeElement; // store the element used to open the modal for later.
    const focusableContent = modal.querySelectorAll(focusableElements);
    modal.classList.add("is-open");
  }

  const closeModal = () => {

  }

  const keyPressed = (event, focusableContent) => {

  }


  btn.addEventListener("click", openModal);