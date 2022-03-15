import { WHITELIST_DOMAINS } from '../ultilities/constants.js';


export const corsOptions = {
  origin: function (origin, callback) {
    if (WHITELIST_DOMAINS.indexOf(origin) !== -1  || !origin)  {
      callback(null, true) // null erros , true success
    } else {
      callback(new Error(`${origin} not allowed by CORS`))
    }
  },
  optionsSuccessStatus: 200
}