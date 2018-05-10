import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { fromPromise } from 'rxjs/observable/fromPromise';
import EventsListItem from './EventsListItem';


export default class Events extends Component {
  static navigationOptions = {
    drawerLabel: 'Shopping Lists'
  }
  token = '';
  state = {
    searchResults: [],
    searchText: ''
  }
  events = []
  componentDidMount() {
    this.events = [
      {title: 'Saturday morning market', content: 'mango, orange, banana, …', time: 'Yesterday', image: 'https://user-images.githubusercontent.com/18367033/39698326-00bad8cc-5227-11e8-9d4c-7c78190f46ee.jpeg'},
      {title: 'Barton shopping mall', content: 'eye shadows, earrings, lipstick, …', time: 'Jan 7 2018', image: 'https://user-images.githubusercontent.com/18367033/39698325-0070e974-5227-11e8-86cd-a7a404a11d67.jpeg'},
      {title: 'Weekly grocery', content: 'eggs, trash bags, soy milk, …', time: 'Jan 4 2018', image: 'https://user-images.githubusercontent.com/18367033/39698324-000d3bc2-5227-11e8-92f6-5cc58d23799b.jpeg'},
      {title: 'Thanks giving shopping', content: 'turkey, pumpkin, bread, …', time: 'Oct 16 2017', image: 'https://user-images.githubusercontent.com/18367033/39698327-010119c2-5227-11e8-85c4-565d86120d61.jpeg'}
    ];
		this.setState({
      searchResults: this.events
    });
  }
  handleSearchChange(text) {
    this.setState({
      searchText: text,
    });
    if (text !== '') {
      const search = this.events.filter((data) => {
        return data.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      this.setState({
        searchResults: search
      });
    } else {
      this.setState({
        searchResults: this.events
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => this.props.navigation.navigate('DrawerToggle')}
          >
            <Image
              style={styles.navButton}
              source={require('../../hamburger-icon-blk.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Shopping Lists</Text>
          <Text style={styles.navButton}></Text>
        </View>
        {/* search bar */}
        <View style={styles.searchBarBackground}>
          <View style={styles.searchBar}>
            <Image
              style={styles.searchBarImage}
              source={require('../../search-icon.png')}
            />
            <TextInput
              style={styles.searchBarInput}
              placeholder="Search lists"
              onChangeText={(text) => this.handleSearchChange(text)}
            />
          </View>
        </View>
        {/* card list seciton */}
        <FlatList
          data={this.state.searchResults}
          renderItem={({ item }) => <EventsListItem navigation={this.props.navigation} cardData={item} />}
          keyExtractor={(item, index) => index}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate('AddPeople')}
        >
          <Text style={styles.addButtonSymbol}>+</Text>
          <Text style={styles.addButtonText}>NEW LIST</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    borderBottomWidth: 0.4,
    borderColor: '#B4B4B4'
  },
  navButton: {
    width: 20,
    height: 20,
    marginLeft: 5
  },
  title: {
    flex: 1,
    color: '#333',
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'center'
  },
  searchBarBackground: {
    backgroundColor: '#F2F2F2',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#FFF',
    margin: 7,
    padding: 5,
    borderRadius: 10
  },
  searchBarInput: {
    flex: 1
  },
  searchBarImage: {
    padding: 3,
    margin: 5,
    height: 18,
    width: 18,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#A1A4FD',
    height: 55,
    borderRadius: 5,
    position: 'absolute',
    left: 40,
    right: 40,
    bottom: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16
  },
  addButtonSymbol: {
    color: '#FFF',
    fontSize: 36,
    marginTop: -6,
    marginRight: 8
  }
});
