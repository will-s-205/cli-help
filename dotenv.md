### Install `dotenv`
```
npm install dotenv
```

### create .env file
Make sure to keep it in root project
```
REACT_APP_MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.<token>.mongodb.net/<collection>?retryWrites=true&w=majority
```

### specify path to .env if file not in the root and not a React module
```
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
```

### In project keep .env variables as const
```
const apiUrl = process.env.REACT_APP_API_URL;
```
### Troubleshooting
- https://stackoverflow.com/questions/53237293/react-evironment-variables-env-return-undefined
