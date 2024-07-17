// 'use client';
// import { motion } from 'framer-motion';
// import { useRef } from 'react';
// import { useGlobalState } from '../Context/stateContext';

// const MobileControls = () => {
//     const constraintsRef = useRef(null);

//     const { setKeysPressed } = useGlobalState();

//     const handleDrag = (event, info) => {
//         const x = info.offset.x;
//         const y = info.offset.y;
//         // console.log(`Dragging at x: ${x}, y: ${y}`)
//         const threshold = 15;

//         setKeysPressed((prevKeys) => ({
//             ...prevKeys,
//             f: x > threshold,
//             s: x < -threshold,
//             d: y > threshold,
//             e: y < -threshold,
//         }));
//     };
//     const handleDragEnd = () => {
//         setKeysPressed((prevKeys) => ({
//             ...prevKeys,
//             f: false,
//             s: false,
//             d: false,
//             e: false,
//         }));
//     };

//     return (
//         <>
//             {/* <div className="absolute  bottom-10 left-10 z-50">
//                 <motion.div
//                     className="drag-area z-50 w-[100px] h-[100px] rounded-full bg-white/50 absolute bottom-0 left-0"
//                     ref={constraintsRef}
//                 />
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="z-50 w-[50px] h-[50px] rounded-full bg-white absolute bottom-[25px] left-[25px]"
//                     dragSnapToOrigin
//                     dragElastic={0.25}
//                     onDrag={handleDrag}
//                     onDragEnd={handleDragEnd}
//                 />
//             </div> */}
//             <button
//                 className="bottom-16 left-2 w-10 h-10 rounded-full bg-white/50 absolute  z-40 "
//                 onTouchStart={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         e: true,
//                         s: true,
//                     }));
//                 }}
//                 onTouchEnd={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         e: false,
//                         s: false,
//                     }));
//                 }}
//             ></button>
//             <button
//                 className="bottom-16 left-16 w-10 h-10 rounded-full bg-white/50 absolute  z-40 "
//                 onTouchStart={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         e: true,
//                         f: true,
//                     }));
//                 }}
//                 onTouchEnd={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         e: false,
//                         f: false,
//                     }));
//                 }}
//             ></button>
//             <button
//                 className="bottom-28 left-9 w-10 h-10 rounded-full bg-white/50 absolute  z-40 "
//                 onTouchStart={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         e: true,
//                     }));
//                 }}
//                 onTouchEnd={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         e: false,
//                     }));
//                 }}
//             ></button>
//             <button
//                 className="bottom-4 left-9 w-10 h-10 rounded-full bg-white/50 absolute  z-40 "
//                 onTouchStart={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         d: true,
//                     }));
//                 }}
//                 onTouchEnd={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         d: false,
//                     }));
//                 }}
//             ></button>

//             <button
//                 className="absolute bottom-10 right-2 z-40"
//                 onTouchStart={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         shift: true,
//                     }));
//                 }}
//                 onTouchEnd={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         shift: false,
//                     }));
//                 }}
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-16 h-16 bg-white/50 p-3 rounded-full text-white"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                 >
//                     <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M7.49976 4.25001C7.91398 4.25001 8.24976 4.5858 8.24976 5.00001L8.24976 17.2266L10.4775 15.0636C10.7747 14.775 11.2495 14.782 11.538 15.0792C11.8266 15.3763 11.8196 15.8512 11.5224 16.1397L8.02243 19.5381C7.73142 19.8207 7.26851 19.8207 6.9775 19.5381L3.47751 16.1397C3.18034 15.8512 3.17335 15.3763 3.4619 15.0792C3.75044 14.782 4.22527 14.775 4.52244 15.0636L6.74976 17.2262L6.74976 5.00001C6.74976 4.5858 7.08555 4.25001 7.49976 4.25001Z"
//                     />
//                     <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M15.9773 4.4619C16.2683 4.17934 16.7312 4.17934 17.0222 4.4619L20.5222 7.86029C20.8193 8.14884 20.8263 8.62366 20.5378 8.92083C20.2492 9.21801 19.7744 9.225 19.4772 8.93645L17.2497 6.7736L17.2497 19C17.2497 19.4142 16.9139 19.75 16.4997 19.75C16.0855 19.75 15.7497 19.4142 15.7497 19L15.7497 6.77358L13.5222 8.93645C13.225 9.225 12.7502 9.21801 12.4616 8.92083C12.1731 8.62366 12.1801 8.14884 12.4773 7.86029L15.9773 4.4619Z"
//                     />
//                 </svg>
//             </button>
//             <button
//                 className="absolute bottom-32 right-10 z-40"
//                 onTouchStart={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         r: true,
//                     }));
//                 }}
//                 onTouchEnd={(e) => {
//                     e.preventDefault();
//                     setKeysPressed((prevKeys) => ({
//                         ...prevKeys,
//                         r: false,
//                     }));
//                 }}
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-12 h-12 bg-white/50 p-2 rounded-full text-white"
//                     viewBox="0 0 21 21"
//                 >
//                     <g
//                         fill="none"
//                         fillRule="evenodd"
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         transform="matrix(0 1 1 0 2.5 2.5)"
//                     >
//                         <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />

//                         <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />
//                     </g>
//                 </svg>
//             </button>
//         </>
//     );
// };

// export default MobileControls;
