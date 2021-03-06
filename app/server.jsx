import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { RouterContext, match, createMemoryHistory } from 'react-router'
import axios from 'axios';
import { Provider } from 'react-redux';
import createRoutes from 'routes.jsx';
import configureStore from 'store/configureStore';
import { fetchComponentDataBeforeRender } from 'api/fetchComponentDataBeforeRender';

const clientConfig = {
  host: process.env.HOSTNAME || '127.0.0.1',
  port: process.env.PORT || '3000'
};

// configure baseURL for axios requests (for serverside API calls)
axios.defaults.baseURL = `http://${clientConfig.host}:${clientConfig.port}`;

/*
 * Our html template file
 * @param {String} renderedContent
 * @param initial state of the store, so that the client can be hydrated with the same state as the server
 * @param head - optional arguments to be placed into the head
 */
function renderFullPage(renderedContent, initialState) {

  const head = Helmet.rewind();

  return `
  <!doctype html>
    <html lang="en">
    <head>
      ${head.title.toString()}
      ${head.meta.toString()}
      ${head.link.toString()}
      <noscript>
        <style>
          .no-script-hide {
            display: none;
          }
          .no-script-show {
            display: block;
          }
          .footer {
            position: relative;
          }
        </style>
      </noscript>
    </head>
    <body>${renderedContent}
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
    </script>
    <script
      src="https://code.jquery.com/jquery-2.2.4.min.js"
      integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
      crossorigin="anonymous">
    </script>
    <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
      ga('create', 'UA-45814549-2', 'auto');
      ga('send', 'pageview');
      
    </script>
    </body>
    </html>

  `;
}

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(req, res) {
    const history = createMemoryHistory();
    const store = configureStore({
    }, history);

    const routes = createRoutes(store);

  /*
   * From the react-router docs:
   *
   * This function is to be used for server-side rendering. It matches a set of routes to
   * a location, without rendering, and calls a callback(error, redirectLocation, renderProps)
   * when it's done.
   *
   * The function will create a `history` for you, passing additional `options` to create it.
   * These options can include `basename` to control the base name for URLs, as well as the pair
   * of `parseQueryString` and `stringifyQuery` to control query string parsing and serializing.
   * You can also pass in an already instantiated `history` object, which can be constructured
   * however you like.
   *
   * The three arguments to the callback function you pass to `match` are:
   * - error: A javascript Error object if an error occured, `undefined` otherwise.
   * - redirectLocation: A `Location` object if the route is a redirect, `undefined` otherwise
   * - renderProps: The props you should pass to the routing context if the route matched, `undefined`
   *                otherwise.
   * If all three parameters are `undefined`, this means that there was no route found matching the
   * given location.
   */
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

      const InitialView = (
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>
      );

      //This method waits for all render component promises to resolve before returning to browser
      fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
      .then(html => {
        const componentHTML = renderToString(InitialView);
        const initialState = store.getState();
        res.status(200).end(renderFullPage(componentHTML, initialState));
      })
      .catch(err => {
        res.end(renderFullPage("",{}));
      });
    } else {
      res.status(404).json({"error": "404", "title": "Page not found"});
    }
  });
}
