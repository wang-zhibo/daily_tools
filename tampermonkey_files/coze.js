// ==UserScript==
// @name         Coze
// @namespace    http://tampermonkey.net/
// @version      2024-04-28
// @description  try to take over the world!
// @author       You
// @match        https://www.coze.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coze.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 添加 CSS 设置
    var style = document.createElement('style');
    style.innerHTML = `
        .sidesheet-container {
            grid-template-columns: 18fr 30fr !important;
        }
    `;
    document.head.appendChild(style);
})();
