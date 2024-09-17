import React, { PropsWithChildren } from "react"

export function compactProviders(
  wrappers: [
    React.FC<PropsWithChildren>,
    React.FC<PropsWithChildren>,
    ...React.FC<PropsWithChildren>[],
  ],
) {
  const copy = [...wrappers]
  const last = copy.pop()!

  return withWrappers(copy, last)
}

export const withWrappers = <TProps extends object>(
  wrappers: React.FC<React.PropsWithChildren>[],
  Component: React.ComponentType<TProps>,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<TProps> &
    React.RefAttributes<React.ComponentType<TProps>>
> =>
  // eslint-disable-next-line react/display-name
  React.forwardRef<React.ComponentType<TProps>, TProps>((props, ref) =>
    wrappers.reduceRight(
      (previousValue, CurrentValue) => (
        <CurrentValue>{previousValue}</CurrentValue>
      ),
      <Component ref={ref} {...props} />,
    ),
  )
