import React, { ReactNode } from "react"

export function compactRenders(
  wrappers: ReturnType<typeof r>[],
  children?: React.ReactNode,
) {
  return wrappers.reduceRight((acc, item) => item({ children: acc }), children)
}

export function r<TProps extends { children?: ReactNode }>(
  ...params: TProps extends { children?: ReactNode } ?
    | [React.ComponentType<{ children?: ReactNode }>]
    | [React.ComponentType<{ children: ReactNode }>]
    | [React.ComponentType<TProps>, Omit<TProps, "children"> | undefined]
  : [React.ComponentType<TProps>, Omit<TProps, "children">]
) {
  const [Component, _props] = params

  return function render(props: { children?: ReactNode }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <Component {...props} {...((_props ?? {}) as any)} />
  }
}
