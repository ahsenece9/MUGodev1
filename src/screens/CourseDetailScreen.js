import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function CourseDetailScreen({ route, navigation }) {
  const { course } = route.params;
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [playing, setPlaying] = useState(false);

  const currentLesson = course.lessons[selectedLesson];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />

      {/* Video Player Area */}
      <View style={styles.videoContainer}>
        <View style={styles.videoPlayer}>
          {/* Back button */}
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={22} color="#fff" />
          </TouchableOpacity>

          {/* Video content placeholder */}
          <View style={styles.videoContent}>
            <Text style={styles.videoEmoji}>🎬</Text>
          </View>

          {/* Play controls */}
          <View style={styles.videoControls}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
              <View style={styles.progressDot} />
            </View>
            <View style={styles.controlButtons}>
              <TouchableOpacity>
                <Feather name="skip-back" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.playButton}
                onPress={() => setPlaying(!playing)}
              >
                <Feather name={playing ? 'pause' : 'play'} size={22} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="skip-forward" size={20} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.durationText}>{currentLesson.duration}</Text>
              <TouchableOpacity style={{ marginLeft: 'auto' }}>
                <Feather name="maximize" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Current lesson info */}
        <View style={styles.lessonInfo}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.currentLessonTitle}>{currentLesson.title}</Text>
          <Text style={styles.instructorText}>{course.instructor}</Text>
        </View>

        {/* Lesson List */}
        <View style={styles.lessonList}>
          <Text style={styles.sectionTitle}>Dersler</Text>
          {course.lessons.map((lesson, index) => (
            <TouchableOpacity
              key={lesson.id}
              style={[
                styles.lessonItem,
                selectedLesson === index && styles.lessonItemActive,
              ]}
              onPress={() => setSelectedLesson(index)}
              activeOpacity={0.7}
            >
              <View style={[styles.lessonNum, selectedLesson === index && styles.lessonNumActive]}>
                {lesson.completed ? (
                  <Feather name="check" size={14} color="#fff" />
                ) : (
                  <Text style={[styles.lessonNumText, selectedLesson === index && { color: '#fff' }]}>
                    {index + 1}
                  </Text>
                )}
              </View>
              <View style={styles.lessonDetails}>
                <Text style={[styles.lessonTitle, selectedLesson === index && styles.lessonTitleActive]}>
                  {lesson.title}
                </Text>
                <Text style={styles.lessonDuration}>{lesson.duration}</Text>
              </View>
              {selectedLesson === index && (
                <Feather name="play-circle" size={20} color="#7C3AED" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  videoContainer: { backgroundColor: '#1F2937' },
  videoPlayer: {
    width: width,
    height: (width * 9) / 16,
    backgroundColor: '#111827',
    justifyContent: 'space-between',
  },
  backBtn: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 8,
  },
  videoContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoEmoji: { fontSize: 64 },
  videoControls: {
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressFill: {
    height: '100%',
    width: '35%',
    backgroundColor: '#7C3AED',
    borderRadius: 2,
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#7C3AED',
    marginLeft: -6,
  },
  controlButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  durationText: { fontSize: 12, color: '#fff', marginLeft: 4 },
  content: { flex: 1 },
  lessonInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  courseTitle: { fontSize: 12, color: '#7C3AED', fontWeight: '600', marginBottom: 4 },
  currentLessonTitle: { fontSize: 17, fontWeight: '700', color: '#111827', marginBottom: 4 },
  instructorText: { fontSize: 13, color: '#6B7280' },
  lessonList: { padding: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 12 },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  lessonItemActive: {
    borderWidth: 1.5,
    borderColor: '#7C3AED',
    backgroundColor: '#FAFAFF',
  },
  lessonNum: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lessonNumActive: { backgroundColor: '#7C3AED' },
  lessonNumText: { fontSize: 13, fontWeight: '700', color: '#6B7280' },
  lessonDetails: { flex: 1 },
  lessonTitle: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 3 },
  lessonTitleActive: { color: '#7C3AED' },
  lessonDuration: { fontSize: 12, color: '#9CA3AF' },
});
