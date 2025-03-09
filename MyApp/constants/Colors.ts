/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = 'orange';
const tintColorDark = 'pink';

export const Colors = {
  light: {
    text: 'green',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: 'red',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: 'green',
    background: 'brown',
    tint: tintColorDark,
    icon: 'red',
    tabIconDefault: 'red',
    tabIconSelected: tintColorDark,
  },
};
