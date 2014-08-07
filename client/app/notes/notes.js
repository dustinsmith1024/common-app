'use strict';

angular.module('commonApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('notes', {
        url: '/notes',
        templateUrl: 'app/notes/notes.html',
        controller: 'NotesCtrl'
      });
  });