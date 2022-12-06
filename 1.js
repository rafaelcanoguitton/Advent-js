function wrapping(gifts) {
  const wrappedGifts = gifts.map((gift) => {
    return (
      "*".repeat(gift.length + 2) +
      "\n*" +
      gift +
      "*\n" +
      "*".repeat(gift.length + 2)
    );
  });
  return wrappedGifts;
}