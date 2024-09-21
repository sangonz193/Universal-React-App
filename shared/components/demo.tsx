import { ComponentProps, PropsWithChildren } from "react"
import { Merge } from "type-fest"

import { cn } from "../cn"
import { View } from "../react-native"
import { Button, ButtonText } from "./ui/button"
import { Text } from "./ui/text"

export function Demo({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <View
      className={cn("mx-auto w-60 max-w-full gap-3 rounded-xl p-5", className)}
    >
      <Text bold className="p-2 text-center">
        This is a demo component
      </Text>

      {children}
    </View>
  )
}

export function DemoButton(
  props: Merge<ComponentProps<typeof Button>, { children: string }>,
) {
  return (
    <Button {...props}>
      <ButtonText>{props.children}</ButtonText>
    </Button>
  )
}
