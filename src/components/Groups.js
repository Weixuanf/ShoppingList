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
import GroupsListItem from './GroupsListItem';
import Tabs from './Tabs';
import EventsListItem from './EventsListItem';

export default class Groups extends Component {
  static navigationOptions = {
    drawerLabel: 'Deals'
  }
  state = {
    coupons: [],
    sales: []
  }
  componentDidMount() {
    const coupons = [
      {title: 'All YSL Lipsticks 10% Off', content: 'Barton Creek Mall, 5 miles', time: 'HEB, 6 miles', image: 'https://user-images.githubusercontent.com/18367033/39698326-00bad8cc-5227-11e8-9d4c-7c78190f46ee.jpeg'},
      {title: '20% Off One Item In-Store', content: 'Bed Bath & Beyond, 5.2 miles', time: 'Jan 7 2018', image: 'https://user-images.githubusercontent.com/18367033/39698325-0070e974-5227-11e8-86cd-a7a404a11d67.jpeg'},
      {title: '$1 Off Fresh Baked Bread', content: 'HEB, 6 miles', time: 'Jan 4 2018', image: 'https://user-images.githubusercontent.com/18367033/39698324-000d3bc2-5227-11e8-92f6-5cc58d23799b.jpeg'},
    ];
    const sales = [
      {title: 'All Store Clearance!', content: 'American Apparel, 2 miles', time: 'HEB, 6 miles', image: 'https://user-images.githubusercontent.com/18367033/39698326-00bad8cc-5227-11e8-9d4c-7c78190f46ee.jpeg'},
      {title: '20% Off Selected Jeans', content: 'Urban Outfitters, 2.3 miles', time: 'Jan 7 2018', image: 'https://user-images.githubusercontent.com/18367033/39698325-0070e974-5227-11e8-86cd-a7a404a11d67.jpeg'},
      {title: 'Noosa Yogurt 2 for $5', content: 'Whole Foods, 3.1 miles', time: 'Jan 4 2018', image: 'https://user-images.githubusercontent.com/18367033/39698324-000d3bc2-5227-11e8-92f6-5cc58d23799b.jpeg'},
    ];
    this.setState({
      coupons: coupons,
      sales: sales
    })
  }
  handleSearchChangeGroups(text) {
    this.setState({
      searchTextGroups: text,
    });
    if (text !== '') {
      const search = this.groups.filter((data) => {
        return data.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      this.setState({
        searchResultsGroups: search
      });
    } else {
      this.setState({
        searchResultsGroups: this.groups
      });
    }
  }
  handleSearchChangeEvents(text) {
    this.setState({
      searchTextEvents: text,
    });
    if (text !== '') {
      const search = this.events.filter((data) => {
        return data.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      this.setState({
        searchResultsEvents: search
      });
    } else {
      this.setState({
        searchResultsEvents: this.events
      });
    }
  }
  render() {
    // const listData = [{ key: '1', cardTitle: 'District 1', cardContent: 'Open Opportunity', imageUrl: require('../../images/pokemon1.png')},
    //                 { key: '2', cardTitle: 'Hope Dogs', cardContent: 'Open Opportunity', imageUrl: require('../../images/pokemon2.png') },
    //                 { key: '3', cardTitle: 'School 1', cardContent: 'Monday, Feb. 26th', imageUrl: require('../../images/pokemon3.png') }];
    const coupons = this.state.coupons;
    const sales = this.state.sales;
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
          <Text style={styles.title}>Deals</Text>
          <Text style={styles.navButton}></Text>
        </View>
        <Tabs>
          {/* First tab */}
          <View title="Coupons" style={styles.content}>
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
                  onChangeText={(text) => this.handleSearchChangeGroups(text)}
                />
              </View>
            </View>
            {/* card list seciton */}
            <FlatList
              styles={styles.flatList}
              data={coupons}
              renderItem={({ item }) => <EventsListItem navigation={this.props.navigation} cardData={item} />}
              keyExtractor={(item, index) => index}
            />
          </View>
          {/* Second tab */}
          <View title="Sales" style={styles.content}>
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
                  onChangeText={(text) => this.handleSearchChangeEvents(text)}
                />
              </View>
            </View>
            {/* card list seciton */}
            <FlatList
              styles={styles.flatList}
              data={sales}
              renderItem={({ item }) => <EventsListItem navigation={this.props.navigation} cardData={item} isClockIn />}
              keyExtractor={(item, index) => index}
            />
          </View>
        </Tabs>

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
  // Tab content container
  content: {
    flex: 1,                            // Take up all available space
    flexDirection: 'column',
    //justifyContent: 'center',           // Center vertically
    //alignItems: 'center',               // Center horizontally
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
  flatList: {
    flex: 1
  }
});
