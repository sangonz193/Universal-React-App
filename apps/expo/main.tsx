import "expo-router/entry"

import { cssInterop } from "nativewind"
import { SafeAreaView } from "react-native-safe-area-context"

cssInterop(SafeAreaView, { className: "style" })
