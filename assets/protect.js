// 콘텐츠 보호 JavaScript
(function() {
    'use strict';

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && (e.keyCode === 67 || e.keyCode === 88 || e.keyCode === 65 || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
        if (e.keyCode === 123 || ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67))) {
            e.preventDefault();
            return false;
        }
    });
})();
