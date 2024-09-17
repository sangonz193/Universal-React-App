"use client"

import { useState } from "react"
import { Demo as SharedDemo, DemoButton } from "shared/components/demo"
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "shared/components/ui/alert-dialog"
import { Button, ButtonText } from "shared/components/ui/button"
import { Heading } from "shared/components/ui/heading"

export function Demo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SharedDemo className="m-auto">
        <DemoButton onPress={() => setOpen(true)}>Greet</DemoButton>
      </SharedDemo>

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
