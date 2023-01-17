// A function to create a toast message using Toastify JS
const createToast = (query) => {
  // Element for the toast
  let element = document.querySelector(query);
  // The inner element of the dax-toast elemnent that contains all of the toast message
  let inner = element.getElementsByClassName('dax-toast-inner')[0];
  // Class names to be added to the outer toastify element
  let classList = [];
  element.classList.forEach(c => {
    if(c !== 'dax-toast')
      classList.push(c);
  });

  // Configurable properties of the toast message
  let gravity = element.dataset.gravity ?? "top"; // `top` or `bottom`
  let position = element.dataset.position ?? "right"; // `left`, `center` or `right`
  let duration = element.dataset.duration ?? 5000;

  // Create and show the toast message
  Toastify({
    node: inner.cloneNode(true),
    duration: duration,
    close: true,
    gravity: gravity, 
    position: position, 
    stopOnFocus: true, // Prevents dismissing of toast on hover
    className: classList.join(' ')
  }).showToast();
}
