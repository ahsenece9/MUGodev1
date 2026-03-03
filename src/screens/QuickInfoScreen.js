import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../navigation/DrawerContext';
import PostCard from '../components/PostCard';
import { quickInfoPosts } from '../data/mockData';

export default function QuickInfoScreen({ navigation }) {
  const { openDrawer } = useDrawer();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => openDrawer()} style={styles.menuBtn}>
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kısa Bilgiler</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {quickInfoPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onPress={() =>
              navigation.navigate('MakaleDetay', {
                article: {
                  title: post.title,
                  author: post.author,
                  content: post.content,
                  category: 'Kısa Bilgiler',
                  time: post.time,
                  readTime: '3 dk okuma',
                },
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: {
    backgroundColor: '#7C3AED',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuBtn: { marginRight: 16 },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '700', color: '#fff' },
  content: { padding: 16, paddingBottom: 40 },
});
