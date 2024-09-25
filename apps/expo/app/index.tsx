import { SafeAreaView } from "react-native-safe-area-context"
import { Demo } from "shared/components/demo"

export default function Index() {
  return (
    <SafeAreaView className="grow items-center justify-center">
      <Demo />
    </SafeAreaView>
  )
}
