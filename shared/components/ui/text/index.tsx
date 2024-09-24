import type { VariantProps } from "@gluestack-ui/nativewind-utils"
import React from "react"
import { Text as RNText } from "react-native"

import { textStyle } from "./styles"
import { Text as StyledRNText } from "~shared/react-native"

type ITextProps = React.ComponentProps<typeof StyledRNText> &
  VariantProps<typeof textStyle>

const Text = React.forwardRef<typeof RNText, ITextProps>(
  (
    {
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
    },
  ) => {
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
  },
)

Text.displayName = "Text"

export { Text }
