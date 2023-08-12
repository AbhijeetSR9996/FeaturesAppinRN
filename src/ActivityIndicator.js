import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

async function getItems() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return ['Apple', 'Banana'];
}

function Item({name}) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
}

function ActivityIndicator() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems().then(items => {
      setItems(items);
      setLoading(false);
    });
  }, []);

  const renderItem = ({item}) => <Item name={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'grey', fontSize: 30, alignSelf: 'center'}}>
        Implementing (Circular) ActivityIndicator in React Native
      </Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={items} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#888',
    padding: 12,
    marginBottom: 12,
  },
  itemText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default ActivityIndicator;




// import React, {useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   FlatList,
//   ActivityIndicator,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// async function getItems() {
//   await new Promise(resolve => setTimeout(resolve, 2000));
//   return ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango', 'Kiwi'];
// }

// function Item({name}) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.itemText}>{name}</Text>
//     </View>
//   );
// }

// function LoadingAnimation() {
//   return (
//     <View style={styles.indicatorWrapper}>
//       <ActivityIndicator size="large" style={styles.indicator} />
//       <Text style={styles.indicatorText}>Loading fruits...</Text>
//     </View>
//   );
// }

// function ActivityIndicator() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getItems().then(items => {
//       setItems(items);
//       setLoading(false);
//     });
//   }, []);

//   const renderItem = ({item}) => <Item name={item} />;

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={{color: 'grey', fontSize: 30, alignSelf: 'center'}}>
//         Implementing ActivityIndicator in React Native
//       </Text>
//       {loading ? (
//         <LoadingAnimation />
//       ) : (
//         <FlatList data={items} renderItem={renderItem} />
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#888',
//     padding: 12,
//     marginBottom: 12,
//     marginLeft: 8,
//     marginRight: 8,
//   },
//   itemText: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   indicatorWrapper: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   indicator: {},
//   indicatorText: {
//     fontSize: 18,
//     marginTop: 12,
//   },
// });

// export default ActivityIndicator;



// import React, {useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   FlatList,
//   ActivityIndicator,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// async function getItems() {
//   await new Promise(resolve => setTimeout(resolve, 3000));
//   return ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango', 'Kiwi'];
// }

// function Item({name}) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.itemText}>{name}</Text>
//     </View>
//   );
// }

// function LoadingAnimation() {
//   const [color, setColor] = useState('teal');
//   useEffect(() => {
//     const id = setInterval(() => {
//       setColor(color => (color == 'teal' ? 'royalblue' : 'teal'));
//     }, 700);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <View style={styles.indicatorWrapper}>
//       <ActivityIndicator size="large" color={color} style={styles.indicator} />
//       <Text style={styles.indicatorText}>Loading fruits...</Text>
//     </View>
//   );
// }

// function ActivityIndicator() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getItems().then(items => {
//       setItems(items);
//       setLoading(false);
//     });
//   }, []);

//   const renderItem = ({item}) => <Item name={item} />;

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={{color: 'grey', fontSize: 30, alignSelf: 'center'}}>
//         Implementing ActivityIndicator in React Native
//       </Text>
//       {loading ? (
//         <LoadingAnimation />
//       ) : (
//         <FlatList data={items} renderItem={renderItem} />
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#888',
//     padding: 12,
//     marginBottom: 12,
//     marginLeft: 8,
//     marginRight: 8,
//   },
//   itemText: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   indicatorWrapper: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   indicator: {},
//   indicatorText: {
//     fontSize: 18,
//     marginTop: 12,
//   },
// });

// export default ActivityIndicator;



// import React, {useState, useEffect} from 'react';
// import {Alert} from 'react-native';
// import {ActivityIndicator, View, Text, FlatList, Pressable} from 'react-native';

// const ActivityIndicator = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(res => {
//         setData(res);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const renderList = ({item}) => {
//     return (
//       <Pressable
//         onPress={() => Alert.alert('Navigate to Details screen')}
//         style={{paddingHorizontal: 10}}>
//         <Text style={{fontSize: 24, color: '#000'}}>{item.name}</Text>
//       </Pressable>
//     );
//   };

//   return (
//     <View style={{flex: 1}}>
//       <Text style={{color: 'grey', fontSize: 30, alignSelf: 'center'}}>
//         Implementing ActivityIndicator in React Native
//       </Text>
//       {isLoading ? (
//         <ActivityIndicator color="blue" size="large" />
//       ) : (
//         <FlatList
//           data={data}
//           contentContainerStyle={{paddingVertical: 20}}
//           keyExtractor={item => item.id}
//           renderItem={renderList}
//         />
//       )}
//     </View>
//   );
// };

// export default ActivityIndicator;

