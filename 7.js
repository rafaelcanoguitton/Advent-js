function getGiftsToRefill(a1, a2, a3) {
  const setOfGifts = new Set([...a1, ...a2, ...a3]);
  const a1Set = new Set(a1);
  const a2Set = new Set(a2);
  const a3Set = new Set(a3);
  const returnSet = new Set();
  setOfGifts.forEach((key) => {
    let missing = 0;
    if (!a1Set.has(key)) missing++;
    if (!a2Set.has(key)) missing++;
    if (!a3Set.has(key)) missing++;
    if (missing > 1) returnSet.add(key);
  })
  return Array.from(returnSet);
}