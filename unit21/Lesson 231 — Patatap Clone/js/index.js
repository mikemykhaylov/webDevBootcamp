const keyData = {
  a: {
    color: '#f1c40f',
    sound: new Howl({
      src: ['./audio/pinwheel.mp3'],
    }),
  },
  b: {
    color: '#2980b9',
    sound: new Howl({
      src: ['./audio/wipe.mp3'],
    }),
  },
  c: {
    color: '#16a085',
    sound: new Howl({
      src: ['./audio/ufo.mp3'],
    }),
  },
  d: {
    color: '#e74c3c',
    sound: new Howl({
      src: ['./audio/piston-2.mp3'],
    }),
  },
  e: {
    color: '#3498db',
    sound: new Howl({
      src: ['./audio/confetti.mp3'],
    }),
  },
  f: {
    color: '#95a5a6',
    sound: new Howl({
      src: ['./audio/prism-1.mp3'],
    }),
  },
  g: {
    color: '#f39c12',
    sound: new Howl({
      src: ['./audio/prism-2.mp3'],
    }),
  },
  h: {
    color: '#d35400',
    sound: new Howl({
      src: ['./audio/prism-3.mp3'],
    }),
  },
  i: {
    color: '#2980b9',
    sound: new Howl({
      src: ['./audio/flash-3.mp3'],
    }),
  },
  j: {
    color: '#1abc9c',
    sound: new Howl({
      src: ['./audio/splits.mp3'],
    }),
  },
  k: {
    color: '#2ecc71',
    sound: new Howl({
      src: ['./audio/squiggle.mp3'],
    }),
  },
  l: {
    color: '#3498db',
    sound: new Howl({
      src: ['./audio/strike.mp3'],
    }),
  },
  m: {
    color: '#2c3e50',
    sound: new Howl({
      src: ['./audio/moon.mp3'],
    }),
  },
  n: {
    color: '#8e44ad',
    sound: new Howl({
      src: ['./audio/zig-zag.mp3'],
    }),
  },
  o: {
    color: '#8e44ad',
    sound: new Howl({
      src: ['./audio/glimmer.mp3'],
    }),
  },
  p: {
    color: '#2c3e50',
    sound: new Howl({
      src: ['./audio/moon.mp3'],
    }),
  },
  q: {
    color: '#1abc9c',
    sound: new Howl({
      src: ['./audio/bubbles.mp3'],
    }),
  },
  r: {
    color: '#9b59b6',
    sound: new Howl({
      src: ['./audio/corona.mp3'],
    }),
  },
  s: {
    color: '#e67e22',
    sound: new Howl({
      src: ['./audio/piston-1.mp3'],
    }),
  },
  t: {
    color: '#34495e',
    sound: new Howl({
      src: ['./audio/dotted-spiral.mp3'],
    }),
  },
  u: {
    color: '#27ae60',
    sound: new Howl({
      src: ['./audio/flash-2.mp3'],
    }),
  },
  v: {
    color: '#27ae60',
    sound: new Howl({
      src: ['./audio/veil.mp3'],
    }),
  },
  w: {
    color: '#2ecc71',
    sound: new Howl({
      src: ['./audio/clay.mp3'],
    }),
  },
  x: {
    color: '#34495e',
    sound: new Howl({
      src: ['./audio/timer.mp3'],
    }),
  },
  y: {
    color: '#16a085',
    sound: new Howl({
      src: ['./audio/flash-1.mp3'],
    }),
  },
  z: {
    color: '#9b59b6',
    sound: new Howl({
      src: ['./audio/suspension.mp3'],
    }),
  },
};
const canvas = document.querySelector('#myCanvas');
paper.setup(canvas);

const circles = [];
paper.view.onKeyDown = (event) => {
  if (keyData[event.key]) {
    const maxPoint = new paper.Point(paper.view.size.width, paper.view.size.height);
    const ranPoint = paper.Point.random();
    const point = maxPoint.multiply(ranPoint);
    const newCircle = new paper.Path.Circle(point, 500);
    newCircle.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();
    circles.push(newCircle);
  }
};
paper.view.onFrame = () => {
  for (let i = 0; i < circles.length; i += 1) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(0.9);
    if (circles[i].area < 1) {
      circles[i].remove(); // remove the circle from the canvas
      circles.splice(i, 1); // remove the circle from the array
    }
    paper.view.draw();
  }
};
