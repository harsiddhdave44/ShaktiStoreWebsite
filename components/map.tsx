// import { useEffect, useRef } from "react";
// export const Map = () => {
//   const ref = useRef();

//   useEffect(() => {
//     if (window.maplibregl) {
//       const key = '78NvFDestLKv4C8SNcEn';
//       const map = new window.maplibregl.Map({
//         container: 'map', // container id
//         style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`, // style URL
//         center: [16.62662018, 49.2125578], // starting position [lng, lat]
//         zoom: 14, // starting zoom
//       });
//       map.addControl(new window.maplibregl.NavigationControl(), 'top-right');
//     }
//   });

//   return <div ref={ref} id="map">test</div>;
// }