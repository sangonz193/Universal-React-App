import { GluestackUIProvider } from "./components/gluestack/gluestack-ui-provider"
import { compactRenders, r } from "./utils/react"

export function SharedProviders({ children }: { children?: React.ReactNode }) {
  return compactRenders(
    [
      r(GluestackUIProvider, { mode: "system" }), //
    ],
    children,
  )
}
