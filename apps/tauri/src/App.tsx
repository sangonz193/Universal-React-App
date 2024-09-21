import "./App.css"

import { invoke } from "@tauri-apps/api/core"
import { useState } from "react"
import { Demo, DemoButton } from "shared/components/demo"
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "shared/components/ui/alert-dialog"
import { Button, ButtonText } from "shared/components/ui/button"
import { GluestackUIProvider } from "shared/components/ui/gluestack-ui-provider"
import { Heading } from "shared/components/ui/heading"

function App() {
  const [greetMsg, setGreetMsg] = useState("")

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    const message = (await invoke("greet")) as string
    setGreetMsg(message)
  }

  return (
    <GluestackUIProvider
      className="flex grow flex-col items-center justify-center"
      mode="system"
    >
      <Demo className="m-auto">
        <DemoButton onPress={greet}>Greet</DemoButton>
      </Demo>

      <AlertDialog
        isOpen={!!greetMsg}
        onClose={() => setGreetMsg("")}
        size="xs"
      >
        <AlertDialogBackdrop />

        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold">
              {greetMsg}
            </Heading>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onPress={() => setGreetMsg("")}>
              <ButtonText>OK</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </GluestackUIProvider>
  )
}

export default App
