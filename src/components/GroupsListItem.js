import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class GroupsListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('ClockIn', {
          groupId: this.props.cardData.id
        })}
      >
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{ uri: this.props.cardData.image }} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{this.props.cardData.title}</Text>
            <Text style={styles.cardContent}>
              {this.props.cardData.content}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    shadowColor: '#B4B4B4',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  cardTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardTitle: {
    fontSize: 16
  },
  cardContent: {
    fontSize: 14,
    color: '#989898'
  }
});
