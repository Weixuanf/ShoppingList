import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class EventsListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          if (this.props.isClockIn) {
            console.log('cardData', this.props.cardData);
            this.props.navigation.navigate('ClockIn', {
              eventID: this.props.cardData.id,
              groupId: this.props.cardData.group_id
            });
          } else {
            this.props.navigation.navigate('EventDetail', {
              eventTitle: this.props.cardData.title,
              eventID: this.props.cardData.id
            });
          }
        }}
      >
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{ uri: this.props.cardData.image }} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.timestamp}>{this.props.cardData.time}</Text>
            <Text style={styles.cardTitle}>{this.props.cardData.title}</Text>
            <Text style={styles.cardContent}>{this.props.cardData.content}</Text>
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
    paddingBottom: 20,
    paddingHorizontal: 10,
    borderColor: '#EAEAEA',
    borderBottomWidth: 1,
  },
  cardImage: {
    height: 60,
    width: 60,
    marginTop:20,
    marginRight: 20
  },
  cardTextContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  timestamp: {
    textAlign: 'right',
    color: '#989898',
    fontSize: 12
  },
  cardTitle: {
    fontSize: 16,
    fontWeight:'bold',
  },
  cardContent: {
    fontSize: 14,
    color: '#383838'
  }
});
