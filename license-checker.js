/**
 * Copyright © 2017 HatioLab Inc. All rights reserved.
 */

(function() {
    var licenseFileLoaded = function() {
        window.Things.License.setKey(window.ThingsLicense.key);
        var valid = window.Things.License.valid();
        var msg = 'Your Things License is ' + (valid ? 'valid' : 'invalid! ');
        //if(!valid) msg += window.Things.License.getMessage();

        if (valid) {
            console.log(msg);
        } else {
            alert(msg);
        }
    }
})();
