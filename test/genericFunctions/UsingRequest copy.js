const apiResource = require("protractor-api-resource").ProtractorApiResource;

describe("Test response for all REST API methods", function () {

    var apiClient, serviceEnpoints = {
        getPosts: {
            path: "/posts/:postId:"
        },
        createPost: {
            path: "/posts",
            method: "POST",
            ContentType:"application/json",
            Authorization:"Bearer",

        },
        updatePost: {
            path: "/posts/:postId:",
            method: "PUT"
        },
        patchPost: {
            path: "/posts/:postId:",
            method: "PATCH"
        },
    };

    beforeAll(function () {
        DIKSHA_APIKEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjNDkyM2Y1Mjg1ZmY0NDdjYmYxMzgwNTQyM2ExZTk4YSJ9.hwQiG6OIFoIJ2O9ec6kau09ltJ-5xA5fWi6aM6NoLEU";

        apiClient = new apiResource("http://staging.ntp.net.in/api/data/v1/form/read").withTokenAuthentication(DIKSHA_APIKEY);;
        apiClient.registerService(serviceEnpoints);

       // DIKSHA_APIKEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjNDkyM2Y1Mjg1ZmY0NDdjYmYxMzgwNTQyM2ExZTk4YSJ9.hwQiG6OIFoIJ2O9ec6kau09ltJ-5xA5fWi6aM6NoLEU";
        DIKSHA_ROOTORGID="012550822176260096119";
        DIKSHA_FRAMEWORK="ekstep_ncert_k-12";

        
        
    });
        it("Test POST method", function (done) {
        var payLoad = {
            type: 'content',
            framework:DIKSHA_FRAMEWORK,
            action:'review',
            subType: 'resource',
            rootOrgId:DIKSHA_ROOTORGID,
        };

        // var expectedResponse = {
        //     id: 101,
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1
        // };
        //First parameter is for query params and second parameter is for request payload.
        apiClient.createPost({}, payLoad).toJSON().then(function (actualResponse) {
           // expect(actualResponse).toEqual(expectedResponse);
            console.log(actualResponse);

            done();
        });
    });


});