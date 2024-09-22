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
import { Heading } from "shared/components/ui/heading"
import { SharedProviders } from "shared/providers"

function App() {
  const [greetMsg, setGreetMsg] = useState("")

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    const message = (await invoke("greet")) as string
    setGreetMsg(message)
  }

  return (
    <SharedProviders>
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
    </SharedProviders>
  )
}

export default App
