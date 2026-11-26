// мЅн…ђмё  ліґнё JavaScript (ліµм‚¬ к°ЂлЉҐ лІ„м „)
(function () {
    'use strict';

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        if (e.keyCode === 123 || ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67))) {
            e.preventDefault();
            return false;
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].addEventListener('dragstart', function (e) {
                e.preventDefault();
                return false;
            });
        }
    });

    document.addEventListener('keyup', function (e) {
        if (e.key === 'PrintScreen' && navigator.clipboard && navigator.clipboard.writeText) {
            setTimeout(function () {
                navigator.clipboard.writeText(location.href).catch(function () {});
            }, 120);
        }
    });
})();
