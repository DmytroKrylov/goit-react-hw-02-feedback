import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import './index.css';

// export const getRandomColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
