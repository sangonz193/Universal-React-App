import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Demo, DemoButton } from "shared/components/demo"
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "shared/components/gluestack/alert-dialog"
import { Button, ButtonText } from "shared/components/gluestack/button"
import { Heading } from "shared/components/gluestack/heading"

export default function Index() {
  const [open, setOpen] = useState(false)

  return (
    <SafeAreaView className="grow items-center justify-center">
      <Demo>
        <DemoButton onPress={() => setOpen(true)}>Greet</DemoButton>
      </Demo>

      <AlertDialog isOpen={open} onClose={() => setOpen(false)} size="xs">
        <AlertDialogBackdrop />

        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold">
              Hello from Expo!
            </Heading>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onPress={() => setOpen(false)}>
              <ButtonText>OK</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SafeAreaView>
  )
}
