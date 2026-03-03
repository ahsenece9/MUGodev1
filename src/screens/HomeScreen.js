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
import PostCard from '../components/PostCard';
import { forumPosts, quickInfoPosts } from '../data/mockData';

const quickActions = [
  { icon: 'play-circle', label: 'Kurslar', color: '#7C3AED', bg: '#EDE9FE', screen: 'Kurslar' },
  { icon: 'message-square', label: 'Forum', color: '#10B981', bg: '#D1FAE5', screen: 'Forum' },
  { icon: 'zap', label: 'Kısa Bilgiler', color: '#F59E0B', bg: '#FEF3C7', screen: 'KısaBilgiler' },
  { icon: 'book', label: 'Ev Ödevi', color: '#EF4444', bg: '#FEE2E2', screen: 'Forum' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Merhaba 👋</Text>
          <Text style={styles.userName}>Esra ARBAĞ</Text>
        </View>
        <TouchableOpacity
          style={styles.notifBtn}
          onPress={() => navigation.navigate('Bildirim')}
        >
          <Feather name="bell" size={22} color="#fff" />
          <View style={styles.notifBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerTextArea}>
            <Text style={styles.bannerTitle}>Doğurganlık Yolculuğunuzda</Text>
            <Text style={styles.bannerSubtitle}>Yanınızdayız ✨</Text>
            <TouchableOpacity style={styles.bannerBtn} onPress={() => navigation.navigate('Kurslar')}>
              <Text style={styles.bannerBtnText}>Kurslara Göz At</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bannerIcon}>
            <Text style={{ fontSize: 60 }}>🌸</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Hızlı Erişim</Text>
        <View style={styles.quickActions}>
          {quickActions.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.quickAction}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.8}
            >
              <View style={[styles.quickIcon, { backgroundColor: item.bg }]}>
                <Feather name={item.icon} size={22} color={item.color} />
              </View>
              <Text style={styles.quickLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Forum Posts */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Forum</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Forum')}>
            <Text style={styles.seeAll}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        {forumPosts.slice(0, 2).map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onPress={() => navigation.navigate('Forum')}
          />
        ))}

        {/* Quick Info */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Kısa Bilgiler</Text>
          <TouchableOpacity onPress={() => navigation.navigate('KısaBilgiler')}>
            <Text style={styles.seeAll}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        {quickInfoPosts.slice(0, 2).map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onPress={() =>
              navigation.navigate('MakaleDetay', {
                article: {
                  title: post.title,
                  author: post.author,
                  content: post.content,
                  category: post.category,
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
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: 2 },
  userName: { fontSize: 20, fontWeight: '700', color: '#fff' },
  notifBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FCD34D',
  },
  scrollContent: { padding: 16, paddingBottom: 40 },
  banner: {
    backgroundColor: '#7C3AED',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    overflow: 'hidden',
  },
  bannerTextArea: { flex: 1 },
  bannerTitle: { fontSize: 16, color: 'rgba(255,255,255,0.9)', marginBottom: 4 },
  bannerSubtitle: { fontSize: 20, fontWeight: '800', color: '#fff', marginBottom: 14 },
  bannerBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  bannerBtnText: { fontSize: 13, fontWeight: '700', color: '#7C3AED' },
  bannerIcon: { marginLeft: 10 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: '#111827', marginBottom: 12 },
  seeAll: { fontSize: 13, color: '#7C3AED', fontWeight: '600', marginBottom: 12 },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickAction: { alignItems: 'center', width: '23%' },
  quickIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  quickLabel: { fontSize: 11, color: '#374151', fontWeight: '600', textAlign: 'center' },
});
