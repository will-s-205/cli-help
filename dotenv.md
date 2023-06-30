### Install `dotenv`
```
npm install dotenv @types/dotenv --save-dev
```

### create .env
```
REACT_APP_MONGO_URI=mongodb+srv://
```

### specify path to .env
```
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
```

### In project keep .env variables as const
```
const apiUrl = process.env.REACT_APP_API_URL;
```
