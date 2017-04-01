app.controller('HomeController', ['$scope', 'commonService', function($scope, commonService) {
  var self = this;
  self.remoteObj = [];
  /* FUnction used to fetch remote section & cell details */
  self.fetchVRemoteUIDetails = function(){
    commonService.fetchRemoteDetails().then(function(response){
      if(response.status === 200){
        var tempObj = response.data;
        angular.forEach(response.data.sections, function(section, key){
          var arrLenBrkup = Math.round(section.cells.length/4);
          var tempCellArr = [];
          for(var i = 0; i<arrLenBrkup; i++){
            if(!tempCellArr.hasOwnProperty(i)){
              tempCellArr[i] = [];
            }
          }

          for(var i = 0; i < arrLenBrkup; i++){
            for(var j = i*4; j<= i*4+3; j++){
              if(!angular.isUndefined(section.cells[j])){
                tempCellArr[i].push(section.cells[j]);
              }
            }
          }
          section.cells = tempCellArr;
        });
        self.remoteObj = response.data;
      }
    }, function(err){
      return;
    });
  };

  self.fetchVRemoteUIDetails();
  self.clickedHammer = [];
  $scope.onHammer = function onHammer (event) {
    $scope.eventType = event.type;
  };

  self.countToShow = 0;
  self.percentVolCount = 0;
  $scope.showPressedKey = function(pressedKey){
    if(!isNaN(parseInt(pressedKey.type))){
      if(self.clickedHammer.length < 3){
        self.clickedHammer.push(parseInt(pressedKey.type));
      }
    }else if(pressedKey.type === 'plus'){
      self.countToShow++;
    }else if(pressedKey.type === 'minus'){
      self.countToShow--;
    }

    self.percentVolCount = self.countToShow*100/20;
  }

  }]);