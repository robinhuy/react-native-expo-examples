import React from "react";
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Modal from "react-native-modal";
import Slider from "@react-native-community/slider";
import sliderThumbImageAndroid from "../../assets/music-player/slider-thumb-android.png";
import sliderThumbImageIOS from "../../assets/music-player/slider-thumb-ios.png";
import { displayTime } from "./util";
import { styles } from "./PlayerModal.style";
import { PRIMARY_COLOR } from "./style";

export default function PlayerModal({
  isModalVisible,
  closeModal,
  playingSong,
  isPlaying,
  isBuffering,
  currentSongIndex,
  currentPosition,
  setcurrentPosition,
  setRewinding,
  updatePosition,
  pauseOrResumeSong,
  changeSong,
}) {
  const opacity = isBuffering ? 0.5 : 1;

  return (
    // https://github.com/react-native-modal/react-native-modal
    <Modal
      isVisible={isModalVisible}
      hasBackdrop={false}
      onBackButtonPress={closeModal}
      style={{ margin: 0 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <FontAwesome5 name="times" size={20} color="#757575" />
          </TouchableOpacity>

          <Image
            source={{ uri: playingSong.coverImage }}
            style={styles.coverImage}
          />

          <Text style={styles.songName}>{playingSong.name}</Text>

          <Text style={styles.singerName}>{playingSong.singer}</Text>

          <View style={styles.progress}>
            <View style={styles.time}>
              <Text style={styles.timeText}>
                {displayTime(currentPosition)}
              </Text>

              <Text style={styles.timeText}>
                {displayTime(playingSong.duration)}
              </Text>
            </View>

            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={playingSong.duration}
              minimumTrackTintColor={PRIMARY_COLOR}
              maximumTrackTintColor="#dfdfdf"
              tapToSeek={true}
              thumbImage={
                Platform.OS === "ios"
                  ? sliderThumbImageIOS
                  : sliderThumbImageAndroid
              }
              onValueChange={setcurrentPosition}
              onSlidingStart={() => setRewinding(true)}
              onSlidingComplete={updatePosition}
              value={currentPosition}
              disabled={isBuffering}
            />
          </View>

          <View style={styles.controls}>
            <TouchableOpacity
              onPress={() => changeSong(currentSongIndex - 1)}
              disabled={isBuffering}
            >
              <FontAwesome5
                name="backward"
                style={[styles.secondaryControlIcon, { opacity }]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={pauseOrResumeSong}
              disabled={isBuffering}
            >
              <FontAwesome5
                name={isPlaying ? "pause-circle" : "play-circle"}
                style={[styles.primaryControlIcon, { opacity }]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => changeSong(currentSongIndex + 1)}
              disabled={isBuffering}
            >
              <FontAwesome5
                name="forward"
                style={[styles.secondaryControlIcon, { opacity }]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
