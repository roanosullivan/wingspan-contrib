define([
    './util',
    './merge'
], function (util, merge) {
    'use strict';

    return _.extend(util, { merge: merge });
});
