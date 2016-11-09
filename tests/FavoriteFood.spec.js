describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should return only people whose favorite foods match input', function () {
    var mockedList = [{
           name: 'Bibi',
           favoriteFood: 'nachos'
       }, {
           name: 'Kristee',
           favoriteFood: 'burrito'
       }, {
          name: 'Jenn',
          favoriteFood: 'chicken'
       }];

        var results = $filter('favoriteFood')(mockedList, 'burrito');

        expect(results.length).toBe(1);
        expect(results[0].name).toBe('Kristee');
  });
	
});
