/**
 * Created by Administrator on 2016/10/26.
 */
(function () {
    var files=['hello.js',"app.js"];

    files.forEach(function (file) {
        var scriptTag=document.createElement('script');
        scriptTag.async=false;//同步
        scriptTag.src=file;
        document.body.appendChild(scriptTag);
    });
})();
