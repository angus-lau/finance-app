import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from 'expo-auth-session';


WebBrowser.maybeCompleteAuthSession();

console.log(AuthSession.makeRedirectUri({ useProxy: true }));
const { width } = Dimensions.get("window");
export default function LoginScreen() {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("DashboardScreen");
  };

const [request, response, promptAsync] = Google.useAuthRequest({
  expoClientId: 'EXPO_CLIENT_ID',
  iosClientId: 'IOS_CLIENT_ID',
  redirectUri: 'REDIRECT_URI',
});


  React.useEffect(() => {
  if (response?.type === 'success') {
    const { authentication } = response;
    console.log('Access Token:', authentication.accessToken);
    navigation.navigate('DashboardScreen');
  }
}, [response]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.topSection}>
            <Text style={styles.welcomeText}>Login</Text>
            <Image
              source={require("../assets/conq-credit.png")}
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>

          <View style={styles.formSection}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleNext}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.footerLinks}>
              <TouchableOpacity>
                <Text style={styles.rightText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>Continue With</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
  <Image
    source={{
      uri: 'https://developers.google.com/static/identity/images/g-logo.png',
    }}
    style={styles.googleIcon}
  />
  <Text style={styles.googleButtonText}>Google</Text>
</TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  topSection: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    paddingVertical: 40,
  },
  welcomeText: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    marginBottom: 50,
  },
  illustration: {
    width: width * 0.7,
    height: width * 0.6,
  },
  formSection: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
    elevation: 1,
  },
  loginButton: {
    backgroundColor: "#007A74",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    elevation: 2,
  },
  loginText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  footerLinks: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  leftText: {
    fontSize: 14,
    color: "#555",
  },
  rightText: {
    fontSize: 14,
    color: "#007A74",
    fontWeight: "500",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 13,
    color: "#666",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  googleIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "500",
  },
});
