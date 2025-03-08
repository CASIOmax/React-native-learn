// import {Slot} from "expo-router";

// export default function CoffeeLayout(){
//     return <Slot />
// }



import { Stack } from 'expo-router';

export default function CoffeeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="timing" />
    </Stack>
  );
}
