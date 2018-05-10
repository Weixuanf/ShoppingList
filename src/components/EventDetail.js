import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet
} from 'react-native';
import EventDetailListItem from './EventDetailListItem';
import { Global } from './global';

export default class EventDetail extends Component {
  state = {
    data: [],
    itemInput: '',
    showInput: false
  }

  componentDidMount() {
    const listData = [{ key: 0, delete: false, title: 'mango'},
                    { key: 1, delete: false, title: 'orange'},
                    { key: 2, delete: false, title: 'bananas' },
                    { key:3, delete: false, title: 'soy beans'}];
    this.setState({
      data: listData
    });
  }
  deleteItem(key) { //delete list item
    const data = this.state.data.slice(0);
    console.log('data',data);
    console.log('key=', key);
    data[key].delete = true;
    this.setState({
      data: data //delete the key item from the list!!
    });
  }
  addItemOnClick() {
    this.setState({
      showInput: true
    });
  }
  handleItemInputChange(text) {
    this.setState({
      itemInput: text
    });
  }
  onSubmitInput() {
    const data = this.state.data.slice(0);
    data.push({
      key: data.length,
      delete: false,
      title: this.state.itemInput
    });
    this.setState({
      showInput: false,
      data: data
    });
  }
  render() {
    const listData = this.state.data;
    const { params } = this.props.navigation.state;
    const eventTitle = params ? params.eventTitle : null;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => this.props.navigation.goBack()}
          >
            <Image
              style={styles.navImage}
              source={require('../../images/back-icon.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{eventTitle}</Text>
          <View style={styles.navButton} />
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
              placeholder="Search"
            />
          </View>
        </View>
        {/* card seciton */}
        <View>
          <FlatList
            data={listData}
            renderItem={({ item }) => !item.delete && <EventDetailListItem cardData={item} deleteItem={(key) => this.deleteItem(key)}/>}
            keyExtractor={(item, index) => index}
          />
          {this.state.showInput &&
            <View style={styles.addView}>
              <TextInput
                style={styles.addInput}
                placeholder="Enter New Item"
                autoFocus
                onSubmitEditing={() => this.onSubmitInput()}
                onChangeText={(text) => this.handleItemInputChange(text)}
              />
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => {
                  this.setState({
                    showInput: false
                  });
                }}
              >
                <Text style={{color: '#FFF'}}>Cancel</Text>
              </TouchableOpacity>
            </View>

          }

        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.addItemOnClick()}
        >
          <Text style={styles.addButtonSymbol}>+</Text>
          <Text style={styles.addButtonText}>ITEM</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    borderBottomWidth: 0.4,
    borderColor: '#B4B4B4'
  },
  navButton: {
    flexDirection: 'row',
    width: 24,
    marginLeft: 5,
    marginRight: 10,
    justifyContent: 'flex-end'
  },
  navImage: {
    width: 20,
    height: 20,
  },
  navBackText: {
    fontSize: 18
  },
  title: {
    flex: 1,
    color: '#333',
    fontSize: 18,
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
  },
  addView: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderBottomWidth: 0.4,
    borderColor: '#B4B4B4'
  },
  addInput: {
    fontSize: 14,
    flex: 1
  },
  cancelBtn: {
    backgroundColor: Global.red,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 30,
    borderRadius: 4
  }
});
