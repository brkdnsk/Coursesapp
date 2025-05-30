import {StyleSheet , Text , View , FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigation} from '@react-navigation/native-stack';
import HomeScreen from '../src/Screens/HomeScreen';
import CoursesScreen from '../src/Screens/CoursesScreenScreen';
import CoursesInformation from '../src/Screens/CoursesInformation';

const Stack=createNativeStackNavigation();
export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Anasayfa" component={HomeScreen}/>
                <Stack.Screen name="Kurslarım" component={CoursesScreen}/>
                <Stack.Screen name="Kurs Bilgilerim" component={CoursesInformation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles=StyleSheet.create({});