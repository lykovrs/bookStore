app.controller('MainController', ['$scope', function($scope) {
    $scope.title = "Sale of books";
    $scope.promo = "Promo text";
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    };
    $scope.products = [
        {
            name: 'Angularjs Web Application Development Blueprints',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'http://static.ozone.ru/multimedia/books_covers/1011785970.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Angularjs Design Patterns',
            price: 8,
            pubdate: new Date('2012', '03', '11'),
            cover: 'http://static1.ozone.ru/multimedia/books_covers/1011785962.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Angularjs Directives',
            price: 21,
            pubdate: new Date('2014', '07', '02'),
            cover: 'http://static2.ozone.ru/multimedia/books_covers/1010232686.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Angularjs Services',
            price: 13,
            pubdate: new Date('2013', '08', '01'),
            cover: 'http://static2.ozone.ru/multimedia/books_covers/1011785966.jpg',
            likes: 0,
            dislikes: 0
        }
    ];
}]);