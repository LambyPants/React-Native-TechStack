import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common'
import LibaryList from './components/LibaryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <Header headerText="Tech Stack App" />
        <LibaryList />
    </View>
    </Provider>

  );
};

export default App;
