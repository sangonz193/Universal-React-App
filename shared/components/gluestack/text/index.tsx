import type { VariantProps } from "@gluestack-ui/nativewind-utils"
import React from "react"

import { textStyle } from "./styles"
import { Text as StyledRNText } from "~shared/react-native"

type ITextProps = React.ComponentProps<typeof StyledRNText> &
  VariantProps<typeof textStyle>

const Text = ({
  className,
  isTruncated,
  bold,
  underline,
  strikeThrough,
  size = "md",
  sub,
  italic,
  highlight,
  ...props
}: ITextProps) => {
  return (
    <StyledRNText
      className={textStyle({
        isTruncated,
        bold,
        underline,
        strikeThrough,
        size,
        sub,
        italic,
        highlight,
        class: className,
      })}
      {...props}
    />
  )
}

Text.displayName = "Text"

export { Text }
