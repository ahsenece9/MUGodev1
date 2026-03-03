import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CustomDrawerProvider } from './DrawerContext';
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

const Stack = createStackNavigator();

export default function AppNavigator() {
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <CustomDrawerProvider
        drawerContent={(props) => <DrawerContent {...props} navigationRef={navigationRef} />}
        navigation={navigationRef}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
          <Stack.Screen name="Bildirim" component={NotificationsScreen} />
          <Stack.Screen name="Kurslar" component={CoursesScreen} />
          <Stack.Screen name="Forum" component={ForumScreen} />
          <Stack.Screen name="KısaBilgiler" component={QuickInfoScreen} />
          <Stack.Screen name="Blog" component={BlogScreen} />
          <Stack.Screen name="Danışmanlık" component={PlaceholderScreen} />
          <Stack.Screen name="YolHaritam" component={PlaceholderScreen} />
          <Stack.Screen name="Anket" component={PlaceholderScreen} />
          <Stack.Screen name="İletişim" component={PlaceholderScreen} />
          <Stack.Screen name="Hakkımızda" component={PlaceholderScreen} />
          <Stack.Screen name="Onam" component={PlaceholderScreen} />
          <Stack.Screen name="KursDetay" component={CourseDetailScreen} />
          <Stack.Screen name="YeniKonu" component={NewTopicScreen} />
          <Stack.Screen name="MakaleDetay" component={ArticleDetailScreen} />
        </Stack.Navigator>
      </CustomDrawerProvider>
    </NavigationContainer>
  );
}
