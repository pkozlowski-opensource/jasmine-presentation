describe("Hello World scenario", function () {

    var $http, storageService;

    beforeEach(function () {
        $http = {
            'post':function () {},
            'put':function () {},
            'get':function () {}
        };
        spyOn($http, 'post');
        spyOn($http, 'put');
        storageService = new StorageService($http);
    });

    it("it should invoke POST method for new objects", function () {

        storageService.saveOrUpdate({});
        expect($http.post).toHaveBeenCalled();
        expect($http.put).not.toHaveBeenCalled();

    });

    it("it should invoke PUT method for objects with id", function () {

        var objToSave = {'id':1};

        storageService.saveOrUpdate(objToSave);

        expect($http.put).toHaveBeenCalledWith('PUT', 'url', objToSave);
        expect($http.put.mostRecentCall.args).toEqual([ 'PUT', 'url', { id : 1 } ]);

        expect($http.put.callCount).toEqual(1);
        expect($http.put.argsForCall[0]).toEqual([ 'PUT', 'url', { id : 1 } ]);
    });

    it("is possible to provide mock responses", function () {

        spyOn($http, 'get').andReturn([{'key' : 1}])
        expect(storageService.get(1)).toEqual([{'key' : 1}]);
    });

});