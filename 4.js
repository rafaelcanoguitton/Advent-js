function fitsInOneBox(boxes) {
  const sorted = boxes.sort((boxA, boxB) => {
    const volA = boxA.l * boxA.w * boxA.h;
    const volB = boxB.l * boxB.w * boxB.h;
    if (volA == volB) {
      return 0;
    }
    if (volA > volB) {
      return 1;
    }
    return -1;
  });
  const sortedCapacities = sorted.map(box => Object.assign({}, box));
  for (let i = 0; i < sorted.length; i++) {
    console.log(sorted);
    console.log(sortedCapacities);
    const box = sorted[i];
    for (let j = i + 1; j < sorted.length; j++) {
      const nextBox = sortedCapacities[j];
      if (box.l < nextBox.l && box.w < nextBox.w && box.h < nextBox.h) {
        nextBox.l -= box.l;
        nextBox.w -= box.w;
        nextBox.h -= box.h;
        //remove lower volume box
        sorted.splice(i, 1);
        sortedCapacities.splice(i, 1);
        i--;
        break;
      }
    }
  }
  //console.log(sorted);
  //console.log(sortedCapacities);
  return sorted.length == 1;
}
//while (sorted.length > 1) {
//  const boxA = sorted.pop();
//  const boxB = sorted.pop();
//  if (boxA.l <= boxB.l || boxA.w <= boxB.w || boxA.h <= boxB.h) {
//    return false;
//  } else if (
//    boxA.l - boxB.l > 1 &&
//    boxA.w - boxB.w > 1 &&
//    boxA.h - boxB.h > 1
//  ) {
//    sorted.push({
//      l: boxA.l - boxB.l,
//      w: boxA.w - boxB.w,
//      h: boxA.h - boxB.h,
//    });
//  }
//}
//  console.log(sorted);
//  return true;
//}

//console.log(
//  fitsInOneBox([
//    { l: 1, w: 1, h: 10 },
//    { l: 3, w: 3, h: 12 },
//    { l: 2, w: 2, h: 1 },
//  ])
//);
//console.log(
//  fitsInOneBox([
//    { l: 1, w: 1, h: 1 },
//    { l: 2, w: 2, h: 2 },
//    { l: 3, w: 1, h: 3 },
//  ])
//);
//console.log(
//  fitsInOneBox([
//    { l: 1, w: 1, h: 10 },
//    { l: 3, w: 3, h: 12 },
//    { l: 2, w: 2, h: 1 },
//  ])
//);
//console.log(
//  fitsInOneBox([
//    { l: 2, w: 2, h: 2 },
//    { l: 8, w: 8, h: 8 },
//    { l: 9, w: 9, h: 9 },
//  ])
//);
console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 },
  ])
);
