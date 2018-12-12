exports['default'] = {
  routes: (api) => {
    const routingList = {
      get: [],
      post: [],
      put: [],
      patch: [],
      delete: []
    }

    // Users Resource Routes
    routingList.get.push( // GET Methods
      { path: '/users', action: 'listUsers' } // GET All Users
    )
    routingList.post.push( // POST Methods
      { path: '/users/new', action: 'addUser' }, // POST A New User
      { path: 'users/login', action: 'authenticateUser' } // POST To Authenticate A User
    )
    routingList.put.push( // PUT Methods
    )
    routingList.patch.push( // PATCH Methods
    )
    routingList.delete.push( // DELETE Methods
      { path: '/users/delete', action: 'deleteUser' } // DELETE A User
    )

    // Images Resource Routes
    routingList.get.push( // GET Methods
    )
    routingList.post.push( // POST Methods
      { path: 'images/new', action: 'uploadImage' } // POST A New Image to S3
    )
    routingList.put.push( // PUT Methods
    )
    routingList.patch.push( // PATCH Methods
    )
    routingList.delete.push( // DELETE Methods
    )

    return routingList
  }
}

/* ---------------------
      routes.js

      For web clients (http and https) you can define an optional RESTful mapping to help route requests to actions.
      If the client doesn't specify and action in a param, and the base route isn't a named action, the action will attempt to be discerned from this routes.js file.

      Learn more here: http://www.actionherojs.com/docs/#routes

      examples:

      get: [
        { path: '/users', action: 'usersList' }, // (GET) /api/users
        { path: '/search/:term/limit/:limit/offset/:offset', action: 'search' }, // (GET) /api/search/car/limit/10/offset/100
      ],

      post: [
        { path: '/login/:userID(^\\d{3}$)', action: 'login' } // (POST) /api/login/123
      ],

      all: [
        { path: '/user/:userID', action: 'user', matchTrailingPathParts: true } // (*) /api/user/123, api/user/123/stuff
      ]

      ---------------------- */
