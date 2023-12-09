export function createMenu() {
  const menuDiv = $("menu");
  const menuHTML = `
< class="btn-group" role="group" aria-label="Basic example">
  <nav class="nav flex-column">
    <button type="button" class="btn btn-secondary">
      <a class="nav-link text-danger fs-5 fw-bolder" href="#">${button1}</a>
    </button>
    <button type="button" class="btn btn-secondary">
      <a class="nav-link text-danger fs-5 fw-bolder" href="#">${button2}</a>
    </button>
    <button type="button" class="btn btn-secondary">
      <a class="nav-link text-danger fs-5 fw-bolder" href="#">${button3}</a>
    </button>
    <button type="button" class="btn btn-secondary">
      <a class="nav-link text-danger fs-5 fw-bolder" href="#">${button4}</a>
    </button>
    <button type="button" class="btn btn-secondary">
      <a class="nav-link text-danger fs-5 fw-bolder" href="#">${button5}</a>
    </button>
  </nav>
`;
  return (menuDiv.innerHTML = menuHTML);
}
