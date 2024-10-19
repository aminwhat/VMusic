import { StyleSheet, Text, SafeAreaView, View, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import * as AppAuth from 'expo-app-auth'


const LoginScreen = () => {

    async function authenticate() {
        const config = {
            issuer: 'https://accounts.spotify.com',
            clientId: '2d2dc45c579443819621813f841755e7',
            scopes: [
                'user-read-email',
                'user-library-read',
                'user-read-recently-played',
                'user-top-read',
                'playlist-read-private',
                'playlist-read-collaborative',
                'playlist-modify-public'
            ],
            redirectUrl: "exp://localhost:19002/--/spotify-auth-callback"
        }

        const result = await AppAuth.authAsync(config)
        console.log(result)
    }

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
                <Pressable
                    onPress={authenticate}
                    style={{
                        backgroundColor: "#1DB954",
                        padding: 10,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 300,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 10
                    }}>
                    <Text>Sign In With Spotify</Text>
                </Pressable>

                <Pressable style={{
                    backgroundColor: "#131624", padding: 10,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 300,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginVertical: 10,
                    borderColor: "#C0C0C0",
                    borderWidth: 0.8
                }}>
                    <MaterialIcons name='phone-android' size={24} color='white' />
                    <Text style={{
                        fontWeight: '500',
                        color: 'white',
                        textAlign: 'center',
                        flex: 1
                    }}>Contine with Phone Number</Text>
                </Pressable>
                <Pressable style={{
                    backgroundColor: "#131624", padding: 10,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 300,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginVertical: 10,
                    borderColor: "#C0C0C0",
                    borderWidth: 0.8
                }}>
                    <AntDesign name='google' size={24} color='red' />
                    <Text style={{
                        fontWeight: '500',
                        color: 'white',
                        textAlign: 'center',
                        flex: 1
                    }}>Contine with Google</Text>
                </Pressable>
                <Pressable style={{
                    backgroundColor: "#131624", padding: 10,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 300,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginVertical: 10,
                    borderColor: "#C0C0C0",
                    borderWidth: 0.8
                }}>
                    <Entypo name='facebook' size={24} color='blue' />
                    <Text style={{
                        fontWeight: '500',
                        color: 'white',
                        textAlign: 'center',
                        flex: 1
                    }}>SignIn with FaceBook</Text>
                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})