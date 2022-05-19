/*
 * @Description:
 * @Version:
 * @Autor: ru.li
 * @Date: 2022-05-19 12:25:45
 * @LastEditors: ru.li
 * @LastEditTime: 2022-05-19 13:12:52
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <div>
    <App />
  </div>,
);
