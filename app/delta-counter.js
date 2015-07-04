let deltas = [],
    deltaN = 50,
    deltaSum = 0,
    lastTime = Date.now();

export default function(currentTime) {
  let dt = currentTime - lastTime;
  lastTime = currentTime;

  if (deltas.length >= deltaN) {
    let what = deltas.splice(0,1);
    deltaSum -= what;
  }

  deltaSum += dt;
  return 1000 / (deltaSum / deltas.push(dt));
}
