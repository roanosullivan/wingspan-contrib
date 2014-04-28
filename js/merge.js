define([], function () {
    'use strict';

    // These two functions are from Facebook React.


    function mergeInto(one, two) {
        //checkMergeObjectArg(one);
        if (two != null) {
            //checkMergeObjectArg(two);
            for (var key in two) {
                if (!two.hasOwnProperty(key)) {
                    continue;
                }
                one[key] = two[key];
            }
        }
    }

    /**
     * Shallow merges two structures into a return value, without mutating either.
     *
     * @param {?object} one Optional object with properties to merge from.
     * @param {?object} two Optional object with properties to merge from.
     * @return {object} The shallow extension of one by two.
     */
    var merge = function(one, two) {
        var result = {};
        mergeInto(result, one);
        mergeInto(result, two);
        return result;
    };


    return merge;
});
