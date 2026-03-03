import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../navigation/DrawerContext';

const iconMap = {
  Danışmanlık: { icon: 'user-check', color: '#10B981', bg: '#D1FAE5', emoji: '👩‍⚕️' },
  YolHaritam: { icon: 'map', color: '#F59E0B', bg: '#FEF3C7', emoji: '🗺️' },
  Anket: { icon: 'check-square', color: '#EF4444', bg: '#FEE2E2', emoji: '📋' },
  İletişim: { icon: 'phone', color: '#3B82F6', bg: '#DBEAFE', emoji: '📞' },
  Hakkımızda: { icon: 'info', color: '#8B5CF6', bg: '#EDE9FE', emoji: 'ℹ️' },
  Onam: { icon: 'shield', color: '#10B981', bg: '#D1FAE5', emoji: '🛡️' },
};

export default function PlaceholderScreen({ navigation, route }) {
  const { openDrawer } = useDrawer();
  const name = route.name;
  const info = iconMap[name] || { icon: 'layout', color: '#7C3AED', bg: '#EDE9FE', emoji: '📱' };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => openDrawer()} style={styles.menuBtn}>
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{name}</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <View style={[styles.iconCircle, { backgroundColor: info.bg }]}>
          <Text style={styles.emoji}>{info.emoji}</Text>
        </View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Bu bölüm yakında aktif olacak.</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Ana Sayfa')}
        >
          <Text style={styles.btnText}>Ana Sayfaya Dön</Text>
        </TouchableOpacity>
      </View>
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
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emoji: { fontSize: 48 },
  title: { fontSize: 22, fontWeight: '800', color: '#111827', marginBottom: 8 },
  subtitle: { fontSize: 15, color: '#6B7280', textAlign: 'center', marginBottom: 28, lineHeight: 22 },
  btn: {
    backgroundColor: '#7C3AED',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 16,
  },
  btnText: { fontSize: 15, fontWeight: '700', color: '#fff' },
});
