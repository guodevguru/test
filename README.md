## Step 1: How to run this application

First, you need to clone the github repo.

To run the application on mac, you need to run the below commands.

```bash
yarn install
cd ios
pod install
cd ..
yarn ios
```

## Step 2: Technologies and libraries used.
### Directory alias system
Used it to simplify importing custom modules like
```bash
import { Button } from '@components
```
### TypeScript
Write all the codebase with TypeScript.
### Redux
Used Redux Toolkit and React Redux to store items in global state.
### React Navigation
Used React Navigation to navigate between screens because React Navigation provides rich navigation environments like stack navigation, tab navigation, drawer navigation, deep linking...
### React Native SafeArea Context
Used it for iOS SafeArea specific design.
### Formik and Yup
Used it for form validation in Add Item form.
### Mock Api services
Created two mock api services for fetching items and adding item.
### Jest for unit test