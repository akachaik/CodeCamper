﻿(function () {
    'use strict';
    var controllerId = "attendees";
    angular
        .module('app')
        .controller(controllerId, ['common', 'datacontext', attendees]);


    function attendees(common, datacontext) {
        /* jshint validthis:true */
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.title = 'Attendees';
        vm.attendees = [];

        activate();

        function activate() {
            var promises = [getAttendees()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Attendees View'); });


        }

        function getAttendees() {
            return datacontext.getAttendees().then(function (data) {
                return vm.attendees = data;
            });

        }
    }
})();
