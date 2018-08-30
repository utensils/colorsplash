export function bool() {
  return Math.random() >= 0.5;
}

export function gradient(n) {
  const degrees = int(360);

  let colors = [];

  for(let i = 0; i < n; i++) {
    colors.push(hex())
  }

  return {
    colors: colors,
    degrees: degrees
  }
}

export function hex() {
  const color = '#' + int(16777215).toString(16);
  return color.padEnd(7, '0');
}

export function int(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function rgb() {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex());

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
