import { Audio } from 'expo-av';

let music: Audio.Sound | null = null;

export const playMusic = async (uri: string) => {
  if (music) {
    await music.unloadAsync();
  }
  const { sound } = await Audio.Sound.createAsync({ uri }, { isLooping: true });
  music = sound;
  await music.playAsync();
};

export const stopMusic = async () => {
  if (music) {
    await music.stopAsync();
    await music.unloadAsync();
    music = null;
  }
};

export const playEffect = async (uri: string) => {
  const { sound } = await Audio.Sound.createAsync({ uri });
  await sound.playAsync();
};
