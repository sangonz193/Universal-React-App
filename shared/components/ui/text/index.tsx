import React from "react"

import type { VariantProps } from "@gluestack-ui/nativewind-utils"
import { Text as StyledRNText } from "##/react-native"
import { Text as RNText } from "react-native"
import { textStyle } from "./styles"

type ITextProps = React.ComponentProps<typeof StyledRNText> &
  VariantProps<typeof textStyle>

const Text = React.forwardRef<RNText, ITextProps>(
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
    ref,
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
        ref={ref}
      />
    )
  },
)

Text.displayName = "Text"

export { Text }
