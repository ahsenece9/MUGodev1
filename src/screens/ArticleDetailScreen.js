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

export default function ArticleDetailScreen({ route, navigation }) {
  const { article } = route.params;

  // Parse simple markdown-like bold text
  const renderContent = (text) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <Text key={idx} style={styles.boldLine}>
            {line.replace(/\*\*/g, '')}
          </Text>
        );
      }
      if (line.trim() === '') {
        return <View key={idx} style={{ height: 8 }} />;
      }
      return (
        <Text key={idx} style={styles.bodyText}>
          {line}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Feather name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{article.category}</Text>
        <TouchableOpacity style={styles.shareBtn}>
          <Feather name="share-2" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Area */}
        <View style={styles.heroArea}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{article.category}</Text>
          </View>
          <Text style={styles.articleTitle}>{article.title}</Text>
          <View style={styles.metaRow}>
            <View style={styles.authorInfo}>
              <View style={styles.authorAvatar}>
                <Text style={styles.authorAvatarText}>
                  {article.author?.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </Text>
              </View>
              <Text style={styles.authorName}>{article.author}</Text>
            </View>
            <View style={styles.metaRight}>
              <Feather name="clock" size={12} color="#9CA3AF" />
              <Text style={styles.readTime}>{article.readTime}</Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Content */}
        <View style={styles.articleContent}>
          {renderContent(article.content)}
        </View>

        {/* Info Cards */}
        <View style={styles.infoSection}>
          <Text style={styles.infoSectionTitle}>Önemli Noktalar</Text>
          {[
            { icon: 'check-circle', text: 'Sağlıklı yaşam tarzı doğurganlığı destekler', color: '#10B981' },
            { icon: 'check-circle', text: 'Düzenli egzersiz hormonal dengeyi iyileştirir', color: '#10B981' },
            { icon: 'check-circle', text: 'Beslenme ve uyku kritik faktörlerdir', color: '#10B981' },
          ].map((point, idx) => (
            <View key={idx} style={styles.infoCard}>
              <Feather name={point.icon} size={18} color={point.color} />
              <Text style={styles.infoCardText}>{point.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#7C3AED',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: { marginRight: 16 },
  headerTitle: { flex: 1, fontSize: 16, fontWeight: '600', color: '#fff' },
  shareBtn: { padding: 4 },
  heroArea: {
    padding: 20,
    paddingBottom: 16,
  },
  categoryBadge: {
    backgroundColor: '#EDE9FE',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  categoryText: { fontSize: 12, color: '#7C3AED', fontWeight: '700' },
  articleTitle: { fontSize: 22, fontWeight: '800', color: '#111827', lineHeight: 30, marginBottom: 16 },
  metaRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  authorInfo: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  authorAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorAvatarText: { fontSize: 11, fontWeight: '700', color: '#fff' },
  authorName: { fontSize: 13, color: '#374151', fontWeight: '600' },
  metaRight: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  readTime: { fontSize: 12, color: '#9CA3AF' },
  divider: { height: 1, backgroundColor: '#F3F4F6', marginHorizontal: 20 },
  articleContent: { padding: 20 },
  boldLine: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    marginTop: 12,
    marginBottom: 4,
  },
  bodyText: { fontSize: 15, color: '#374151', lineHeight: 24 },
  infoSection: {
    margin: 20,
    padding: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    marginBottom: 40,
  },
  infoSectionTitle: { fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 12 },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },
  infoCardText: { flex: 1, fontSize: 14, color: '#374151', lineHeight: 20 },
});
