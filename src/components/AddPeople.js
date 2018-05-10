import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch
} from 'react-native';

export default class AddPeople extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      signIn: false,
      validate: true,
    };
  }
  handleFirstNameChange(text) {
    this.setState({
      firstName: text
    });
  }
  handleLastNameChange(text) {
    this.setState({
      lastName: text
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* header */}
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
          <Text style={styles.title}>New Shopping List</Text>
          <TouchableOpacity
            style={styles.navButton}
          >
          </TouchableOpacity>
        </View>
        {/* form */}
        <View style={styles.form}>
          <TextInput
            style={styles.formTitle}
            placeholder="Name of your shopping list"
            onChangeText={(text) => this.handleFirstNameChange(text)}
          />
          <Text style={styles.itemsIntro}>Any items to buy in mind?{"\n"}(you can add more later)</Text>
          <View style={styles.item}>
            <Text style={styles.itemPoint}>◎</Text>
            <TextInput
              style={styles.itemInput}
              placeholder="Item 1"
              onChangeText={(text) => this.handleLastNameChange(text)}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemPoint}>◎</Text>
            <TextInput
              style={styles.itemInput}
              placeholder="Item 2"
              onChangeText={(text) => this.handleLastNameChange(text)}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemPoint}>◎</Text>
            <TextInput
              style={styles.itemInput}
              placeholder="Item 3"
              onChangeText={(text) => this.handleLastNameChange(text)}
            />
          </View>

          <View style={styles.switchWrap}>
            <Text style={styles.signInText}>Auto generate cover photo</Text>
            <Switch
              style={styles.signInSwitch}
              onValueChange={(value) => this.setState({ signIn: value })}
              value={this.state.signIn}
            />
          </View>

          <TouchableOpacity
            style={[styles.addUserBtn, { backgroundColor: '#A1A4FD' }]}
            onPress={() => {
              this.props.navigation.navigate('EventDetail', {
                eventTitle: this.state.firstName
              });
            }}
          >
            <Text style={styles.loginBtnText}> ADD LIST </Text>
          </TouchableOpacity>
        </View>

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
    borderColor: '#B4B4B4',
    marginBottom: 20
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
  form: {
    alignItems: 'center'
  },
  formTitle: {
    // width: 200,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#A1A4FD',
    fontSize: 18
  },
  itemsIntro: {
    textAlign: 'center',
    marginVertical: 20
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  itemPoint: {
    marginTop: 2,
    marginRight: 8,
    color: '#A1A4FD'
  },
  itemInput: {
    width: 150,
    paddingBottom: 10,
    borderBottomWidth: 0.4,
    borderColor: '#B4B4B4',
    marginBottom:20
  },
  password: {
    marginHorizontal: 40,
    padding: 10,
  },
  addUserBtn: {
    paddingVertical: 15,
    paddingHorizontal:50,
    marginHorizontal: 80,
    marginTop: 50,
    borderRadius: 4
  },
  loginBtnText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center'
  },
  switchWrap: {
    flexDirection: 'row',
    marginHorizontal: 60,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signInText: {
    flex: 1,
    fontSize: 16,
  },
  signInSwitch: {
    width: 50,
  }
});
