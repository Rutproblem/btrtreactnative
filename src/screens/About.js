import React from 'react'
import { Text, StyleSheet, View, Button, Pressable } from 'react-native'

export default function About({ navigation }) {
    const openHomeTab = () => {
        navigation.navigate('HomeTab');
    };

return(
    <View style={styles.container}>
        <Text style={styles.emoji}>ℹ️</Text>
        <Text style={styles.title}>About Screen</Text>
        <Text style={styles.description}>Welcome to the About Screen</Text>
        <Pressable style={styles.button}>
            <Text style={styles.btnText}>Go to Home</Text>
        </Pressable>

    </View>
)
 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        padding: 24,
        backgroundColor: "#f8fafc"
    },
    emoji: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#0f172a',
        marginBottom: 16
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0f172a',
        marginBottom: 12
    },
    description: {
        maxWidth: 320,
        fontSize: 16,
        color: '#64748b',
        textAlign: 'center',
        marginBottom: 24
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
