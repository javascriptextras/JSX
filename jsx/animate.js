export function move(id, x, y) {
  const element = document.getElementById(id);
  if (element) {
    element.style.left = x + 'px';
    element.style.top = y + 'px';
  }
}

export function rotate(id, dir) {
  const element = document.getElementById(id);
  if (element) {
    element.style.transform = 'rotate(' + dir + 'deg)';
  }
}

export function hide(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'none';
  }
}

export function show(id, message) {
  console.log(message);
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'block';
  }
}

export function fadeIn(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.opacity = 0;
    element.style.display = 'block';
    let opacity = 0;
    const interval = setInterval(() => {
      opacity += 0.05;
      element.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, 20);
  }
}

export function fadeOut(id) {
  const element = document.getElementById(id);
  if (element) {
    let opacity = 1;
    const interval = setInterval(() => {
      opacity -= 0.05;
      element.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(interval);
        element.style.display = 'none';
      }
    }, 20);
  }
}

export function slideIn(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.transform = 'translateX(-100%)';
    element.style.display = 'block';
    element.style.transition = 'transform 0.5s ease-in-out';
    element.style.transform = 'translateX(0)';
  }
}

export function slideOut(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.transition = 'transform 0.5s ease-in-out';
    element.style.transform = 'translateX(100%)';
    setTimeout(() => {
      element.style.display = 'none';
    }, 500);
  }
}
