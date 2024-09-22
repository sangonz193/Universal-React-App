"use client"

import { SharedProviders } from "shared/providers"
import { compactRenders, r } from "shared/utils/react"

import StyledJsxRegistry from "./registry"

export function Providers() {
  return compactRenders([
    r(StyledJsxRegistry), //
    r(SharedProviders),
  ])
}
