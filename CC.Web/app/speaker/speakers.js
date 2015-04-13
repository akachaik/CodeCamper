(function () {
    'use strict';
    var controllerId = 'speakers';
    angular
        .module('app')
        .controller(controllerId, ['datacontext', 'common', speakers]);


    function speakers(datacontext, common) {
        /* jshint validthis:true */
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.speakers = [];
        vm.title = 'Speakers';

        activate();

        function activate() {
            var promises = [getSpeakers()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Speaker View'); });

        }

        function getSpeakers() {
            return datacontext.getSpeakerPartials().then(function (data) {
                return vm.speakers = data;
            });
        }
    }
})();
