import {StyleSheet,Appearance,Platform, ScrollView, SafeAreaView,FlatList, View, Text, Image} from 'react-native';

import {Colors} from '@/constants/Colors';
import {MENU_ITEMS} from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';


export default function MenuScreen(){
    const colorScheme=Appearance.getColorScheme(); 

    const theme=colorScheme === 'dark' ? Colors.dark: Colors.light;

    const styles=createStyles(theme,colorScheme);

    const Container=Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const sepComp= <View style={styles.separator}/>
    const headerComp=<Text>Top of List</Text>
    const footerComp=<Text>End of List</Text>

    return(
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item)=> item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                // ListHeaderComponent={headerComp}
                ListFooterComponent={footerComp}
                ListHeaderComponentStyle={styles.footerComp}
                ListFooterComponentStyle={styles.headerComp}

                ListEmptyComponent={<Text>No Items</Text>}
                ItemSeparatorComponent={sepComp}
                renderItem={({item})=> (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text tyle={[styles.menuItemTitle,styles.menuItemText]}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <View>
                            <Image 
                                source={MENU_IMAGES[item.id-1]}
                                style={styles.menuImage}
                            />
                        </View>
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(theme, colorscheme){
    return StyleSheet.create({
        contentContainer:{
            padding:20,
            backgroundColor:theme.background,
        },
        separator:{
            height:1,
            backgroundColor:"#ffffff",
            marginTop:10
        },
        footerComp:{
            marginHorizontal: 'auto',
        },
        headerComp:{
            marginHorizontal: 'auto',
        },
        
    })
}