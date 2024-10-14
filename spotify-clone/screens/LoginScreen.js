import { StyleSheet, Text, SafeAreaView, View, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';



const LoginScreen = () => {
    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={{ height: 80 }} />
                <Entypo name="spotify" size={80} color="white" style={{ textAlign: "center" }} />
                <Text style={{
                    color: 'white',
                    fontSize: 40,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40,
                    marginHorizontal: 5
                }}>Millions of songs free on spotify!</Text>
                <View style={{ height: 80 }} />
                <Pressable style={{
                    backgroundColor: "#1DB954",
                    padding: 10,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 300,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Sign In With Spotify</Text>
                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})