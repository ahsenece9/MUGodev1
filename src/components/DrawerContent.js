import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const menuItems = [
  { name: 'Bildirim', icon: 'bell', screen: 'Bildirim' },
  { name: 'Ev Ödevi', icon: 'book', screen: 'Forum' },
  { name: 'Danışmanlık', icon: 'user-check', screen: 'Danışmanlık' },
  { name: 'Yol Haritam', icon: 'map', screen: 'YolHaritam' },
  { name: 'Kurslar', icon: 'play-circle', screen: 'Kurslar' },
  { name: 'Blog', icon: 'file-text', screen: 'Blog' },
  { name: 'Anket', icon: 'check-square', screen: 'Anket' },
  { name: 'Forum', icon: 'message-square', screen: 'Forum' },
  { name: 'İletişim', icon: 'phone', screen: 'İletişim' },
  { name: 'Hakkımızda', icon: 'info', screen: 'Hakkımızda' },
  { name: 'Onam', icon: 'shield', screen: 'Onam' },
  { name: 'Kısa Bilgiler', icon: 'zap', screen: 'KısaBilgiler' },
];

export default function DrawerContent(props) {
  const { navigation, state } = props;
  const activeRouteName = state?.routeNames?.[state?.index] || '';

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>EA</Text>
          </View>
        </View>
        <Text style={styles.profileName}>Esra ARBAĞ</Text>
        <Text style={styles.profileSubtitle}>HiFertility Üyesi</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        {menuItems.map((item) => {
          const isActive = activeRouteName === item.screen;
          return (
            <TouchableOpacity
              key={item.name}
              style={[styles.menuItem, isActive && styles.menuItemActive]}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.7}
            >
              <View style={[styles.iconWrapper, isActive && styles.iconWrapperActive]}>
                <Feather
                  name={item.icon}
                  size={18}
                  color={isActive ? '#fff' : '#6B7280'}
                />
              </View>
              <Text style={[styles.menuText, isActive && styles.menuTextActive]}>
                {item.name}
              </Text>
              {isActive && (
                <View style={styles.activeDot} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.7}>
        <Feather name="log-out" size={18} color="#EF4444" />
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  profileSection: {
    backgroundColor: '#7C3AED',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 12,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  avatarText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7C3AED',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  profileSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.75)',
  },
  menuSection: {
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 4,
  },
  menuItemActive: {
    backgroundColor: '#EDE9FE',
  },
  iconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconWrapperActive: {
    backgroundColor: '#7C3AED',
  },
  menuText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
    flex: 1,
  },
  menuTextActive: {
    color: '#7C3AED',
    fontWeight: '700',
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#7C3AED',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 10,
  },
  logoutText: {
    fontSize: 14,
    color: '#EF4444',
    fontWeight: '600',
  },
});
