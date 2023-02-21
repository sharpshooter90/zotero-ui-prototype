import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./lex-styles.css";
// organize-imports-disable-next-line
import "@csstools/normalize.css";
import App from "./App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const consoleGreetings = ` 
                                             ,d""7b.
                                           ,'    ,d^b.
                            __,d"""""""b..d.    d'
              ,d""""-.  ,d""'              \`"b.dP
            dP' ,___  \`7b.                     \`b
          \`"788P'  \`".   "                       \`b
          ,d" \`b      \`"                          \`7.
    \`P""""7.   8)                                   7.
     \`.    8  ,P               ,---.                 """"b.
      8.  d' ,P             ,d"   ,88b.         "b       \`8
     d' \`"  ,P             ""    ,P   \`7b        \`b     ,dP
    d'      8                    d       \`b.      d8888888888b.
   ,'      d'                   ,8.     8   78""""""788888888' \`"b.
   8b _   8P                 ,P'   \`"""oo.,d"          ""788'     \`7.
 .-""""8 d8'            ,-""7P                       .    \`7.      ,8.
\`b     8 88              ,d"8   d8b.                 8b    \`b      d \`.
  \`b___8 88             '  ,8  d8888888b.           ; \`b    8     ,P  8.
   8     88                8  d8"7P""8""""b..      ,8  \`b  ,8"""""8'  88
   8     \`b ,d"'           7  8  8   8   ,8. 7P--,dP   ,8"'     ,8' _,d8.
   7.     8d"                 8 ,db.P""bd' \`7P ,d""""""""""""""""""'    8
   \`b     d'                  8P'  8   88  ,P"'                         8
    7. _,d'                   7b  ,d88888"'                            d'
    ,P' '8                     8888888"'                               8
   ,P   88                     \`888P'                                  8
  ,8_mGk_8                       "'                                   d'
        "8                                                    ,'     d'
         \`b                                                  d8b..d""
          \`b                                              ,dP'
           \`7.                           ______________,d""
             \`7b.                     ,d""
                \`7b..             _,d"'
                     """--....-"""'`;
console.log(consoleGreetings);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
