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
import { articles } from '../data/mockData';

export default function BlogScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuBtn}>
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Blog</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {articles.map((article, index) => (
          <TouchableOpacity
            key={article.id}
            style={styles.card}
            onPress={() => navigation.navigate('MakaleDetay', { article })}
            activeOpacity={0.85}
          >
            <View style={[styles.cardImage, { backgroundColor: index === 0 ? '#EDE9FE' : '#D1FAE5' }]}>
              <Text style={styles.cardEmoji}>{index === 0 ? '🌿' : '🏃‍♀️'}</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{article.category}</Text>
              </View>
              <Text style={styles.cardTitle}>{article.title}</Text>
              <View style={styles.cardMeta}>
                <Text style={styles.authorText}>{article.author}</Text>
                <View style={styles.readTimeRow}>
                  <Feather name="clock" size={11} color="#9CA3AF" />
                  <Text style={styles.readTimeText}>{article.readTime}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 4,
  },
  cardImage: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardEmoji: { fontSize: 56 },
  cardContent: { padding: 16 },
  categoryBadge: {
    backgroundColor: '#EDE9FE',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryText: { fontSize: 11, color: '#7C3AED', fontWeight: '700' },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#111827', lineHeight: 22, marginBottom: 10 },
  cardMeta: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  authorText: { fontSize: 12, color: '#6B7280' },
  readTimeRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  readTimeText: { fontSize: 12, color: '#9CA3AF' },
});
