const Random = {
  bool: () => {
    return Math.random() >= 0.5;
  },

  int: (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  },

  hex: () => {
    const color = '#' + Random.int(16777215).toString(16);
    return color.padEnd(7, '0');
  },

  rgb: () => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(Random.hex());

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },

  gradient: (n) => {
    const degrees = Random.int(360);

    let colors = [];

    for(let i = 0; i < n; i++) {
      colors.push(Random.hex())
    }

    return {
      colors: colors,
      degrees: degrees
    }
  }
}

export default Random;
