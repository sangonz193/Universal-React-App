import { ComponentProps, PropsWithChildren } from "react"
import { Button, ButtonText } from "./ui/button"
import { Merge } from "type-fest"
import { cn } from "##/cn"
import { View } from "##/react-native"
import { Text } from "./ui/text"

export function Demo({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <View
      className={cn(
        "bg-background-50 border-outline-200 mx-auto w-60 gap-3 rounded-xl border p-4",
        className,
      )}
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
