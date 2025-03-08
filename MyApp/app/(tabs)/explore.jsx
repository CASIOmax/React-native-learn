import { View, Text , StyleSheet, Image , ImageBackground} from 'react-native';
import React from 'react';
import BannerImg from "@/assets/images/banner-coffee.jpg";



const Info = () => {
  return (
    <View>

      <View>
        <Image 
        style={styles.Image}
        source={BannerImg}
        resizeMode="center"
        />
      </View>

      <View style={styles.container} >
        <Text style={styles.heading}>Coffee Shop Timings</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Monday&#160;&#160;&#160;&#160;&#160;&#160;&#160;|&#160;&#160;&#160;&#160;&#160;08:00 am - 10:00 am</Text>
        <Text style={styles.text}>Tuesday&#160;&#160;&#160;&#160;&#160;&#160;&#160;|&#160;&#160;&#160;&#160;  08:00 am - 10:00 am</Text>
        <Text style={styles.text}>Wednesday&#160;&#160;|&#160;&#160;&#160;&#160;&#160;&#160;08:00 am - 10:00 am</Text>
        <Text style={styles.text}>Thursday&#160;&#160;&#160;&#160;&#160;&#160;|&#160;&#160;&#160;&#160;&#160;&#160;08:00 am - 10:00 am</Text>
        <Text style={styles.text}>Firday&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;|&#160;&#160;&#160;&#160;&#160;&#160;08:00 am - 12:00 am</Text>
        <Text style={styles.text}>Saturday&#160;&#160;&#160;&#160;&#160;&#160;|&#160;&#160;&#160;&#160;&#160;&#160; 08:00 am - 01:00 pm</Text>
        <Text style={styles.text}>Sunday&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;|&#160;&#160;&#160;&#160;&#160; CLOSED</Text>
      </View>

      <View>
        <button style={styles.button}>Order Now!</button>
      </View>
    </View>

  );
}

export default Info

const styles=StyleSheet.create({
  container:{
    alignItems:'flex-start',
    paddingLeft:10,
    margin:10
  },
  heading:{
    fontSize:35,
    color:'white',
    backgroundColor:'red',
    borderRadius:23,
    padding:10
  },
  text:{
    fontSize:16,
    color:'white',
    margin:5
  },
  Image:{
    width: "100%", 
  },
  button:{
    width:"35%",
    fontSize:18,
    backgroundColor:"green",
    color:"white",
    borderRadius:8,
    borderWidth:4,
    borderColor:"#ffffff",
    fontWeight:"bold",
    padding:10,
    marginLeft:"30%",
    marginTop:40
  }
})