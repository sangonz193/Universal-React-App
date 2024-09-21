import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { PropsWithChildren, useMemo } from "react"
import { useColorScheme } from "react-native"
import { getColor } from "shared/utils/get-color"

export function NavigationThemeProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme()

  const value = useMemo(() => {
    const baseTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme

    return {
      ...baseTheme,
      colors: {
        ...baseTheme.colors,
        background: getColor("background-0", colorScheme),
      },
    }
  }, [colorScheme])

  return <ThemeProvider value={value}>{children}</ThemeProvider>
}
