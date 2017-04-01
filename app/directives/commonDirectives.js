/* Directive for append svg image */
app.directive('appendSvg', function(){
    return{
        restrict: 'A',
        scope: {
			     svgUrl: '=',
        },
        templateUrl: 'partials/svgIconTemplate.html',
        link: function(scope, ele, attrs){
            scope.hrefValue = 'app/assets/images/'+scope.svgUrl+'.svg';
        }
    }
});