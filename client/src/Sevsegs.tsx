import React from 'react';

const style = {
  'fill-rule': 'evenodd', 
  stroke: '#FFFFFF', 
  'stroke-width': 0.25, 
  'stroke-opacity': 1, 
  'stroke-linecap': 'butt', 
  'stroke-linejoin': 'miter'
};

interface SevsegsProps {
  n: number
}

function Sevsegs({ n }: SevsegsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="192px" height="320px" viewBox="-1 -1 12 20">
      <g id="a" style={style}>
        <polygon id="a" points=" 1, 1  2, 0  8, 0  9, 1  8, 2  2, 2" fill={[0, 2, 3, 5, 7, 8, 9].includes(n) ? '#FF0000': '#DDDDDD'}/>
        <polygon id="b" points=" 9, 1 10, 2 10, 8  9, 9  8, 8  8, 2" fill={[0, 1, 2, 3, 4, 7, 8, 9].includes(n) ? '#FF0000': '#DDDDDD'}/>
        <polygon id="c" points=" 9, 9 10,10 10,16  9,17  8,16  8,10" fill={[0, 1, 3, 4, 5, 6, 7, 8, 9].includes(n) ? '#FF0000': '#DDDDDD'}/>
        <polygon id="d" points=" 9,17  8,18  2,18  1,17  2,16  8,16" fill={[0, 2, 3, 5, 6, 8].includes(n) ? '#FF0000': '#DDDDDD'}/>
        <polygon id="e" points=" 1,17  0,16  0,10  1, 9  2,10  2,16" fill={[0, 2, 6, 8].includes(n) ? '#FF0000': '#DDDDDD'}/>
        <polygon id="f" points=" 1, 9  0, 8  0, 2  1, 1  2, 2  2, 8" fill={[0, 4, 5, 6, 8, 9].includes(n) ? '#FF0000': '#DDDDDD'}/>
        <polygon id="g" points=" 1, 9  2, 8  8, 8  9, 9  8,10  2,10" fill={[2, 3, 4, 5, 6, 8, 9].includes(n) ? '#FF0000': '#DDDDDD'}/>
      </g>
    </svg>
  );
}

export default Sevsegs;