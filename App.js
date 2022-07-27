import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [data, setData] = useState(['Milk', 'Coffee', 'Oranges', 'Bread']);
  const [search, setSearch] = useState('');

  const addItem = () => {
    setData([...data, data[Math.floor(Math.random() * data.length)]]);
  };

  const filterData = () => {
    return data.filter(item =>
      item.toLowerCase().includes(search.toLowerCase()),
    );
  };
  return (
    <SafeAreaView>
      <View>
        <View style={styles.cont}>
          <View style={styles.pad}>
            <TextInput
              style={styles.inp}
              type={'text'}
              placeholder={'Search......'}
              value={search}
              onChangeText={e => setSearch(e)}
            />
          </View>
          <TouchableOpacity style={styles.butt} onPress={addItem}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filterData()}
          renderItem={ListItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};

const ListItem = item => {
  return <Text style={styles.listItem}>{item.item}</Text>;
};

export default App;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
  },
  plus: {
    fontSize: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  butt: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    borderLeftWidth: 1,

    borderColor: 'grey',
  },
  inp: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 30,
    padding: 5,
  },
  cont: {
    flexDirection: 'row',
    width: '100%',
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  pad: {padding: 10, width: '80%'},
});
