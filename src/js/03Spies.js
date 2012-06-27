var StorageService = function ($http) {
    this.$http = $http;
};

StorageService.prototype.saveOrUpdate = function (value) {

    if (value.id) {
        this.$http.put('PUT', 'url', value);
    }   else {
        this.$http.post('POST', 'url', value);
    }
};

StorageService.prototype.get = function (id) {
    return this.$http.get('GET', 'url', id);
};