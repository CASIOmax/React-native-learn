import {StyleSheet,Appearance,Platform, ScrollView, SafeAreaView, ScrollView,FlatList, View, Text, Image} from 'react-native';

import {Colors} from '@/constants/Colors';
import {MENU_ITEMS} from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';


export default function MenuScreen(){
    const colorScheme=Appearance.getColorScheme(); 

    const theme=colorScheme === 'dark' ? Colors.dark: Colors.light;

    const styles=createStyles(theme,colorScheme);

    const Container=Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return(
        <Container>
            <FlatList
                data={[]}
                renderItem={(item)=>{
                    
                }}
            ></FlatList>
        </Container>
    );
}

function createStyles(theme, colorscheme){
    return StyleSheet.create({

    })
}