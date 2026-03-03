import React, { createContext, useContext, useRef, useState, useCallback } from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  PanResponder,
} from 'react-native';

const DRAWER_WIDTH = 280;
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const DrawerContext = createContext({
  openDrawer: () => {},
  closeDrawer: () => {},
});

export function useDrawer() {
  return useContext(DrawerContext);
}

export function CustomDrawerProvider({ drawerContent: DrawerContentComponent, children, navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;

  const openDrawer = useCallback(() => {
    setIsOpen(true);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [translateX]);

  const closeDrawer = useCallback(() => {
    Animated.timing(translateX, {
      toValue: -DRAWER_WIDTH,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setIsOpen(false));
  }, [translateX]);

  const overlayOpacity = translateX.interpolate({
    inputRange: [-DRAWER_WIDTH, 0],
    outputRange: [0, 0.5],
    extrapolate: 'clamp',
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 10 && Math.abs(gestureState.dy) < 20;
      },
      onPanResponderMove: (_, gestureState) => {
        const newX = Math.min(0, Math.max(-DRAWER_WIDTH, gestureState.dx - DRAWER_WIDTH));
        if (!isOpen) {
          const openX = Math.min(0, Math.max(-DRAWER_WIDTH, gestureState.dx - DRAWER_WIDTH));
          translateX.setValue(openX);
        } else {
          const closeX = Math.min(0, Math.max(-DRAWER_WIDTH, gestureState.dx));
          translateX.setValue(closeX);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 80) {
          openDrawer();
        } else if (gestureState.dx < -80) {
          closeDrawer();
        } else if (isOpen) {
          openDrawer();
        } else {
          closeDrawer();
        }
      },
    })
  ).current;

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
      <View style={styles.container}>
        {children}

        {isOpen && (
          <TouchableWithoutFeedback onPress={closeDrawer}>
            <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]} />
          </TouchableWithoutFeedback>
        )}

        <Animated.View
          style={[
            styles.drawer,
            { transform: [{ translateX }] },
          ]}
        >
          <DrawerContentComponent navigation={navigation} closeDrawer={closeDrawer} />
        </Animated.View>
      </View>
    </DrawerContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    zIndex: 10,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: DRAWER_WIDTH,
    zIndex: 20,
    backgroundColor: '#fff',
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
});
