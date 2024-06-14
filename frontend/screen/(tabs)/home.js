import { ScrollView, StyleSheet, Text, View } from "react-native"

const Home = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>
                    Home
                </Text>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})