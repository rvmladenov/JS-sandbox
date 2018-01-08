describe("Testing AngularJS Test SUIT", function() {

    beforeEach(module('testingAngularApp'));

    describe("Testing AngularJS Controller", function() {

        var scope, ctrl, httpBackend;
        beforeEach(inject(function($controller, $rootScope, $httpBackend){
            scope = $rootScope.$new();
            ctrl = $controller('testingAngularCtrl', {$scope: scope});
            httpBackend = $httpBackend;
        }));

        afterEach(function(){
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('test the title in the scope', function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Works');
        });

        it('Testing destinations', function(){
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);

            scope.newDestination = {
                city: 'London',
                country: 'Bulgaria'
            };

            scope.addDestination();
            expect(scope.destinations.length).toBe(1);
        });

        it('Testing xrh', function(){
            scope.destination = {
                city: 'Sofia',
                coutnry: 'Bulgaria'
            };

            httpBackend.expectGET("http://api.openweathermap.org/data/2.5/weather?q=" + scope.destination.city + "&appid=" + scope.apiKey).respond({
                weather: [{main: 'Rain', detail: 'Light rain'}],
                main: {temp: 288}
            });

            scope.getWeather(scope.destination);

            httpBackend.flush();

            expect(scope.destination.weather.main).toBe('Rain');
            expect(scope.destination.weather.temp).toBe(15);
        });

    });
});