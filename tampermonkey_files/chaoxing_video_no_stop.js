// ==UserScript==
// @name        超星 - 禁止暂停视频
// @description 超星 no stop
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

			// 下面这些应该也有效。

			// 不再响应暂停事件
		/*
			video.addEventListener(
				"pause", event => event.preventDefault()
			);
		*/

			// 暂停后自动点击播放按钮
		/*
			video.addEventListener(
				"pause", event => {
					const playButton =
						video.parentElement.querySelector(
							':scope button.vjs-play-control'
						);
					playButton && playButton.click();
				}
			);
		*/

		}
	), 3000
);
