import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerContent from '../components/DrawerContent';

import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import CoursesScreen from '../screens/CoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import ForumScreen from '../screens/ForumScreen';
import NewTopicScreen from '../screens/NewTopicScreen';
import QuickInfoScreen from '../screens/QuickInfoScreen';
import BlogScreen from '../screens/BlogScreen';
import ArticleDetailScreen from '../screens/ArticleDetailScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: 280 },
      }}
    >
      <Drawer.Screen name="Ana Sayfa" component={HomeScreen} />
      <Drawer.Screen name="Bildirim" component={NotificationsScreen} />
      <Drawer.Screen name="Kurslar" component={CoursesScreen} />
      <Drawer.Screen name="Forum" component={ForumScreen} />
      <Drawer.Screen name="KısaBilgiler" component={QuickInfoScreen} />
      <Drawer.Screen name="Blog" component={BlogScreen} />
      <Drawer.Screen name="Danışmanlık" component={PlaceholderScreen} />
      <Drawer.Screen name="YolHaritam" component={PlaceholderScreen} />
      <Drawer.Screen name="Anket" component={PlaceholderScreen} />
      <Drawer.Screen name="İletişim" component={PlaceholderScreen} />
      <Drawer.Screen name="Hakkımızda" component={PlaceholderScreen} />
      <Drawer.Screen name="Onam" component={PlaceholderScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name="KursDetay" component={CourseDetailScreen} />
        <Stack.Screen name="YeniKonu" component={NewTopicScreen} />
        <Stack.Screen name="MakaleDetay" component={ArticleDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
