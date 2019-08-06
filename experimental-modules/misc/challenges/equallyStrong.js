function areEquallyStrong(yL, yR, fL, fR) {
  let yStr;
  let fStr;
  let yWk;
  let fWk;
  if (yL > yR) {
    yStr = yL;
    yWk = yR;
  } else {
    yStr = yR;
    yWk = yL;
  }

  if (fL > fR) {
    fStr = fL;
    fWk = fR;
  } else {
    fStr = fR;
    fWk = fL;
  }


  return yStr === fStr && yWk === fWk;
}
