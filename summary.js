let fs = require('fs');
let path = require('path');

function getDir(firstDir) {
fs.readdir(firstDir, function (err, items) {
    for (let i=0; i<items.length; i++) {
        let dir = firstDir + '/' + items[i];
        fs.stat(dir, function(err, stats) {
            if (stats.isDirectory()) {
                getDir(dir);
                    } else {
                        console.log(dir);
                    }
                }
            );
        }
    });
}
getDir(__dirname);