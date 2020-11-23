import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import PlayerModal from "./PlayerModal";
import { Audio } from "expo-av";
import { FlatList } from "react-native-gesture-handler";
import { displayTime } from "./util";
import { styles } from "./MusicPlayer.style";
import { PLAY_LIST } from "./listSong";

export default function MusicPlayer() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [soundObject, setSoundObject] = useState(new Audio.Sound());
  const [playingSong, setPlayingSong] = useState({});
  const [isPlaying, setPlaying] = useState(false);
  const [currentPosition, setcurrentPosition] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(async () => {
        const status = await soundObject.getStatusAsync();
        setcurrentPosition(status.positionMillis);
        if (
          Math.ceil(status.positionMillis / 1000) ===
          Math.ceil(status.durationMillis / 1000)
        ) {
          await soundObject.setPositionAsync(status.durationMillis);
          setcurrentPosition(status.durationMillis);
          setPlaying(false);
          clearInterval(interval);
        }
      }, 500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlaying]);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>List Song</Text>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => playSong(item, index)}
    >
      <Image source={{ uri: item.coverImage }} style={styles.coverImage} />

      <View style={{ flex: 1 }}>
        <Text style={styles.songName}>{item.name}</Text>

        <View style={styles.songInfo}>
          <Text style={styles.singerName}>{item.singer}</Text>
          <Text style={styles.songDuration}>{displayTime(item.duration)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const keyExtractor = (item) => item.sourceUri;

  const playSong = async (song, index) => {
    setModalVisible(true);
    setPlayingSong(song);
    setcurrentPosition(0);
    setCurrentSongIndex(index);

    try {
      await soundObject.unloadAsync();
      await soundObject.loadAsync({ uri: song.sourceUri });
      await soundObject.playAsync();
      setPlaying(true);
    } catch (error) {
      Alert.alert("Cannot play this music!");
    }
  };

  const pauseOrResumeSong = async () => {
    if (isPlaying) {
      setPlaying(false);
      soundObject.pauseAsync();
    } else {
      if (currentPosition === playingSong.duration) {
        setcurrentPosition(0);
        await soundObject.replayAsync();
      } else {
        await soundObject.playAsync();
      }

      setPlaying(true);
    }
  };

  const changeSong = (index) => {
    setPlaying(false);

    if (index < 0) index = PLAY_LIST.length - 1;
    else if (index == PLAY_LIST.length) index = 0;

    playSong(PLAY_LIST[index], index);
  };

  const updatePosition = async (position) => {
    try {
      await soundObject.setPositionAsync(position);
      setcurrentPosition(position);
    } catch (err) {
      console.log(err);
    }
  };

  const stopMusic = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={PLAY_LIST}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />

      <PlayerModal
        isModalVisible={isModalVisible}
        closeModal={stopMusic}
        playingSong={playingSong}
        isPlaying={isPlaying}
        currentSongIndex={currentSongIndex}
        currentPosition={currentPosition}
        updatePosition={updatePosition}
        pauseOrResumeSong={pauseOrResumeSong}
        changeSong={changeSong}
      />
    </SafeAreaView>
  );
}
