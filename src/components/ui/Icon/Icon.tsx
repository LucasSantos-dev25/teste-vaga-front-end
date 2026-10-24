import type { SVGProps } from 'react'
import { icons, type IconName } from './icons'

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
  size?: number
  title?: string
  strokeWidth?: number
}

export function Icon({ name, size = 24, title, strokeWidth = 1.5, ...rest }: IconProps) {
  const { viewBox, content } = icons[name]

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...rest}
    >
      {title && <title>{title}</title>}
      {content}
    </svg>
  )
}
