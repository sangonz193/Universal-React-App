"use client"

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

function _Demo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Demo className="m-auto">
        <DemoButton onPress={() => setOpen(true)}>Greet</DemoButton>
      </Demo>

      <AlertDialog isOpen={open} onClose={() => setOpen(false)} size="xs">
        <AlertDialogBackdrop />

        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold">
              Hello from Next.js!
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

export { _Demo as Demo }
