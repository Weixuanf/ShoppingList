import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Global } from './global';

export default class EventDetailListItem extends Component {
  state = {
    leftActionActivated: false,
    toggle: 0
  };
  swipeable = null;
  delete() {
    console.log('delete cardData.key=', this.props.cardData.key);
    this.props.deleteItem(this.props.cardData.key);
  }
  undoActivate() {
    this.setState({
      toggle: 0,
      leftActionActivated: false
    });
    this.swipeable.recenter();
  }

  getBorderColor() {
    if (this.state.toggle === 0) return '#FFF';
    if (this.state.toggle === 1) return Global.green;
  }
  render() {
    const rightButtons = [
        <TouchableOpacity
          style={[styles.rightSwipeItem, { backgroundColor: '#E24D49' }]}
          onPress={() => this.delete()}
        >
          <Text style={styles.rightSwipeItemText}>Delete</Text>
        </TouchableOpacity>,
        <TouchableOpacity
          style={[styles.rightSwipeItem, { backgroundColor: '#5299D6' }]}
          onPress={() => this.undoActivate()}
        >
          <Text style={styles.rightSwipeItemText}>Undo</Text>
        </TouchableOpacity>
      ];
    const { leftActionActivated, toggle } = this.state;
    return (
      <Swipeable
        onRef={ref => this.swipeable = ref}
        leftActionActivationDistance={200}
        leftContent={(
          <View
            style={[
              styles.leftSwipeItem,
              { backgroundColor: (toggle != 0 || leftActionActivated) ? '#BBEFC4' : '#6CD86E' }
            ]}
          >
            {(toggle || leftActionActivated) ?
              <Text style={styles.leftSwipeItemText}> Got this!</Text> :
              <Text style={styles.leftSwipeItemText}>Check</Text>}
          </View>
        )}
        onLeftActionComplete={() => {
          this.setState({ toggle: 1 });
        }}
        onLeftActionActivate={() => this.setState({ leftActionActivated: true })}
        rightButtons={rightButtons} rightButtonWidth={85}
      >
        <View
          style={[styles.card,
                      { borderLeftWidth: 4, //(toggle != 0 || leftActionActivated) ? 4 : 0,
                        borderLeftColor: this.getBorderColor() }
                ]}
        >
          <View style={styles.cardTextContainer}>
            <Text style={[styles.cardTitle, toggle == 1 && {textDecorationLine:'line-through'}]}>{this.props.cardData.title}</Text>
          </View>
        </View>
      </Swipeable>

    );
  }
}


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderBottomWidth: 0.4,
    borderColor: '#B4B4B4'
  },
  cardTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardTitle: {
    fontSize: 16
  },
  cardContent: {
    fontSize: 12,
    color: '#989898'
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  rightSwipeItemText: {
    color: '#FFF'
  },
  leftSwipeItemText: {
    color: '#FFF'
  }
});
