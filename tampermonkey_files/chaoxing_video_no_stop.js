// ==UserScript==
// @name        超星 - 禁止暂停视频
// @description 不要停下来啊！（指视频）（不支持 Flash 视频）
// @namespace   xinuo
// @author      xinuo
// @version     0.1
// @icon        https://imgsrc.baidu.com/forum/pic/item/6a63f6246b600c33c3d714d61c4c510fd9f9a106.jpg
// @match       *://*.chaoxing.com/*
// @match       *://*.chaoxing.com/*
// @grant       none
// ==/UserScript==


"use strict";

setTimeout(
	() => document.querySelectorAll('video').forEach(
		video => {

			// 清空暂停视频函数
			video.pause = () => {};

		}
	), 3000
);
