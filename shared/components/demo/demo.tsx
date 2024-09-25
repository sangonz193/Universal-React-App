"use client"

import { DemoButton } from "./button"
import { Text } from "../gluestack/text"

import { cn } from "~shared/cn"
import { View } from "~shared/react-native"

export function Demo({ className }: { className?: string }) {
  return (
    <View
      className={cn("mx-auto w-60 max-w-full gap-3 rounded-xl p-5", className)}
    >
      <Text bold className="p-2 text-center">
        This is a demo component
      </Text>

      <DemoButton />
    </View>
  )
}
