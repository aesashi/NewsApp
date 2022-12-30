import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import store from './store';

export default function App() {
  return (
  <Provider>
    <AppNavigator />;
  </Provider>
  );
}
