function distributeGifts(packOfGifts, reindeers) {
    const weights = packOfGifts.reduce((prev, curr) => {
      return prev + curr.length;
    },0);
    const capacity = reindeers.reduce((prev, curr) => {
      return prev + curr.length * 2;
    },0);
    return Math.floor(capacity/weights);
  }