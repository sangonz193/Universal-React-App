import { useState } from "react"

import { platform } from "./platform"
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "../gluestack/alert-dialog"
import { Button, ButtonText } from "../gluestack/button"
import { Heading } from "../gluestack/heading"

export function DemoButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>
        <ButtonText>Greet from {platform}</ButtonText>
      </Button>

      <AlertDialog isOpen={open} onClose={() => setOpen(false)} size="xs">
        <AlertDialogBackdrop />

        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold">
              {platform} says hi!
            </Heading>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onPress={() => setOpen(false)}>
              <ButtonText>OK</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
