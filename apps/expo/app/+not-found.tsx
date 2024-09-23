import { Link, Stack } from "expo-router"
import { StyleSheet, View } from "react-native"
import { Button, ButtonText } from "shared/components/ui/button"
import { Heading } from "shared/components/ui/heading"

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Heading>This screen doesn't exist.</Heading>
        <Link href="/" style={styles.link}>
          <Button variant="link">
            <ButtonText>Go to home screen!</ButtonText>
          </Button>
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
