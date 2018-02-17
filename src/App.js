// @flow
import React from 'react';

import Background from './components/Background';
import Banner from './components/Banner';
import Info from './containers/Info';

import './App.css';

// chrome.webRequest.onCompleted.addListener(
//   function(details) {
//     let dns = {};
//     var host = /^(?:(\w+):)?\/\/([^\/\?#]+)/.exec(details['url']);
//     console.info(host);
//     if (details['ip']) {
//       if (dns[host[2]]) {
//         if (dns[host[2]].includes(details['ip'])) {
//           return 1;
//         } else {
//           dns[host[2]] = details['ip'] + ', ' + dns[host[2]];
//           console.info(dns);
//         }
//       } else {
//         console.info(dns);
//         dns[host[2]] = details['ip'];
//         console.info(dns);
//       }
//     }
//   },
//   { urls: ['<all_urls>'] },
//   []
// );

const App = () => (
  <div className="app-container">
    <Background />
    <div className="container">
      <Banner />
      <Info />
    </div>
  </div>
);

export default App;
