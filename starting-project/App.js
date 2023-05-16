import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CategoriesScreen from "./Screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./Screens/MealsOverviewScreen";
import MealDetailScreen from "./Screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoratesScreen from "./Screens/FavoratesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavorateContextProvider, {
    FavorateContext,
} from "./store/context/FavorateContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#ceebce" },
                headerTintColor: "#223012",
                sceneContainerStyle: { backgroundColor: "#223022" },
                drawerContentStyle: { backgroundColor: "#2230022" },
                drawerInactiveTintColor: "",
                drawerActiveTintColor: "gray",
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "All Categories",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favourites"
                component={FavoratesScreen}
                options={{
                    title: "Favourites",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <FavorateContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: "#ceebce" },
                            headerTintColor: "#223012",
                            contentStyle: { backgroundColor: "#223022" },
                        }}
                    >
                        <Stack.Screen
                            name="AllCategories"
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="MealsDetails"
                            component={MealDetailScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavorateContextProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
