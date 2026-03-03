import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../navigation/DrawerContext';
import { courses } from '../data/mockData';

const COLORS = ['#7C3AED', '#10B981', '#F59E0B', '#EF4444'];
const EMOJIS = ['🏃‍♀️', '🥗', '🧘‍♀️', '💊'];

export default function CoursesScreen({ navigation }) {
  const { openDrawer } = useDrawer();
  const renderCourse = ({ item, index }) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() => navigation.navigate('KursDetay', { course: item })}
      activeOpacity={0.85}
    >
      {/* Thumbnail */}
      <View style={[styles.thumbnail, { backgroundColor: COLORS[index % COLORS.length] }]}>
        <Text style={styles.thumbnailEmoji}>{EMOJIS[index % EMOJIS.length]}</Text>
        <View style={styles.playBtn}>
          <Feather name="play" size={16} color="#fff" />
        </View>
      </View>

      {/* Info */}
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.instructor}>{item.instructor}</Text>
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Feather name="book-open" size={12} color="#9CA3AF" />
            <Text style={styles.metaText}>{item.lessonsCount} Ders</Text>
          </View>
          <View style={styles.metaDot} />
          <View style={styles.metaItem}>
            <Feather name="clock" size={12} color="#9CA3AF" />
            <Text style={styles.metaText}>{item.duration}</Text>
          </View>
        </View>

        {/* Progress */}
        <View style={styles.progressRow}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${(item.lessons.filter((l) => l.completed).length / item.lessons.length) * 100}%`,
                  backgroundColor: COLORS[index % COLORS.length],
                },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            {item.lessons.filter((l) => l.completed).length}/{item.lessons.length}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => openDrawer()} style={styles.menuBtn}>
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kurslar</Text>
        <View style={{ width: 40 }} />
      </View>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourse}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
  listContent: { padding: 16, paddingBottom: 40 },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    overflow: 'hidden',
  },
  thumbnail: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  thumbnailEmoji: { fontSize: 64 },
  playBtn: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseInfo: { padding: 16 },
  courseTitle: { fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 4 },
  instructor: { fontSize: 13, color: '#6B7280', marginBottom: 10 },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  metaText: { fontSize: 12, color: '#9CA3AF' },
  metaDot: { width: 3, height: 3, borderRadius: 1.5, backgroundColor: '#D1D5DB', marginHorizontal: 8 },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 3 },
  progressText: { fontSize: 12, color: '#9CA3AF', fontWeight: '600' },
});
