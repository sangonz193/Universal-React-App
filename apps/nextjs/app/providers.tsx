"use client"

import { PropsWithChildren } from "react"
import { SharedProviders } from "shared/providers"
import { compactRenders, r } from "shared/utils/react"

import StyledJsxRegistry from "./registry"

export function Providers({ children }: PropsWithChildren) {
  return compactRenders([
    r(StyledJsxRegistry), //
    r(SharedProviders, { children }),
  ])
}
