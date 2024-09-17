"use client"

import React, { useRef, useState } from "react"
import { useServerInsertedHTML } from "next/navigation"
import { StyleRegistry, createStyleRegistry } from "styled-jsx"
// @ts-ignore
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Main } from "next/document"
import { AppRegistry } from "react-native-web"
import { flush } from "@gluestack-ui/nativewind-utils/flush"

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [jsxStyleRegistry] = useState(() => createStyleRegistry())
  const isServerInserted = useRef(false)

  useServerInsertedHTML(() => {
    // @ts-ignore
    AppRegistry.registerComponent("Main", () => Main)
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication("Main")
    if (!isServerInserted.current) {
      isServerInserted.current = true
      const styles = [getStyleElement(), jsxStyleRegistry.styles(), flush()]
      jsxStyleRegistry.flush()
      return <>{styles}</>
    }
  })

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
}
