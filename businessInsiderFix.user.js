// ==UserScript==
// @name         FU Business Insider
// @namespace    businessinsider.com
// @version      0.1
// @description  remove add block blocking technology
// @author       You
// @match        http://www.businessinsider.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        document.getElementsByClassName('tp-modal')[0].remove();
        document.getElementsByClassName('tp-backdrop')[0].remove();
        document.getElementsByClassName('tp-modal-open')[0].className = '';
    },400);
})();
