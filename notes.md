# Notes for React Router

- React router is a client side router
  - Server side routers map routes to functions
  - Client side routers map routes to components (pieces of UI)
- React Router has 'Data Routers' and 'Router Components'
- Data routers require a factory function, but allow you to use the data hooks. 
  - Define a root component that is the "Root Route"
    - It's essentially the layout and the non-changing part of your application such as  Navigation and Headers. 

Pass your routes to the router
  - **path** - the path for the route
  - **element** - the component that will be displayed
  - **errorElement** the component that is display if an error is thrown rendering the component 
  - **children** - the child routes
  - **index** - the index path (no path)
  - **loader** - the data loader function that is triggered when the route is loaded
  - **action** - The action that is performed when a form is submitted on a route

**<RouterProvider\\>** This marks where to show the router (root route) where your are mounting the react application

**<Outlet\\>** This marks where to show child routes (in the root route component). 

**<Navlink\\> / <Link\\>** This will display a link that updates the route, but it prevents the default behavior of a network request. Navlinks get classes when they math the current browser URL

**<Form\\>** This will display a form that posts the form data to a route, prevents the default behavior of a form and invokes the action on submission

**useLoaderData()** - Provide access to the data returned from the loader when the component loads. 

**useNavigate()** - Provides a reference to the navigator object for manipulating the history

**useNavigation()** - Provides access to the current state of the navigation ... Loading / Loaded etc...

**useRouteError()** - Provide access to the error that was thrown by the component that was loading. 

**redirect()** - Lets you redirect to another route on a Form submission. 

**useSubmit()** - returns a submit object that takes the name of the form and can be invoked on a dom event. Also take a "replace" param that supressess adding a URL to the back history stack

**useFectch() & <fetcher.Form\\>** - returns a component for making fetch requests with navigating to a new page. Just for the purpose of getting / setting data. Invokes an action with th request and params ... Same as Form. 