import { variables } from "../components/ui/gluestack-ui-provider/config"

export const DEFAULT_SCHEMA = "light"

export function getColor(
  color: keyof (typeof variables)["dark"] extends `--color-${infer TColor}` ?
    TColor
  : unknown,
  schema: keyof typeof variables | null | undefined,
) {
  return `rgb(${variables[schema || DEFAULT_SCHEMA][`--color-${color}`]})`
}
