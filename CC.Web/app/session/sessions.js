(function () {
    'use strict';

    var controllerId = "sessions";

    angular
        .module('app')
        .controller(controllerId, ['common','datacontext', sessions]);


    function sessions(common, datacontext) {
        /* jshint validthis:true */
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.title = 'Sessions';
        vm.sessions = [];
        vm.activate = activate;

        activate();

        function activate() {
            var promises = [getSessions()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Sessions View'); });
        }

        function getSessions() {
            return datacontext.getSessionPartials().then(function (data) {
                return vm.sessions = data;
            });
        };

    }
})();
