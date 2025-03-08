import {View , Text , StyleSheet , ImageBackground, Pressable } from 'react-native';
import {Link} from 'expo-router'   //for links

import CoffeeBgImg from "@/assets/images/iced-coffee.png"

const App = () => {
  return(
    <View style={styles.container}>
      <ImageBackground
      source={CoffeeBgImg}
      resizeMode="cover"
      style={styles.image}
      >
      <Text style={styles.text}>Coffee Shop</Text>

      <Link href="/timing" style={{marginHorizontal:'auto'}}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>See out timings</Text>
      </Pressable>
      </Link>

      </ImageBackground>
    </View>
  );
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
  text:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
    marginBottom:120,
  }, 
  button:{
    color:'white',
    backgroundColor:'#EAEAEA',
    padding:4,
    borderRadius:8,
    borderWidth:3,
    borderColor:"red",
  },
  buttonText:{
    color:'red',
    fontSize:22,
    fontWeight:'bold',
    padding:6,
  },
  
})