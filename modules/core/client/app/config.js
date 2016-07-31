'use strict';

var ApplicationConfiguration  = (function(){

    var _applicationModuleName = 'ContactsApp',
        _applicationDependencies = ['ui.router'];

    var _registerModule = function(moduleName, dependencies){
        // create angular module
        angular.module(applicationModuleName, dependencies || []);
        angular.module(applicationModuleName).requires.push(moduleName);
    }

    return {
        applicationModuleName: _applicationModuleName,
        applicationDependencies: _applicationDependencies,
        registerModule: _registerModule
    }
})();