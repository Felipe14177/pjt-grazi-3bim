import { StatusBar } from "expo-status-bar";
import { BackHandler, Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hook/Auth";
import { router } from "expo-router";

export default function App() {
  const { signIn, signOut } = useAuth();

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email: "super@email.com", password: "Super123!" });
      router.replace("/");
    } catch (error) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo do Felipe</Text>
      <Button title="Signin Super" onPress={handleEntrarSuper} />
      <Button
        title="Signin Adm"
        onPress={() => signIn({ email: "adm@email.com", password: "Adm123!" })}
      />
      <Button
        title="Signin User"
        onPress={() =>
          signIn({ email: "user@email.com", password: "User123!" })
        }
      />
      <Button title="Sobre" onPress={() => router.push("/about")} />
      <Button
        title="Sair do Aplicativo"
        onPress={() => BackHandler.exitApp()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  title: {
    fontFamily: "regular",
    fontSize: 20,
  },
});