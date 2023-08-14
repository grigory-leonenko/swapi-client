import cx from 'classnames'

interface Props {
  width?: number
  height?: number
  color?: string
  vertical?: boolean
}

export const SizeIcon = ({ width = 24, height = 24, color = '#d4d4d4', vertical }: Props) => (
  <svg
    className={cx(vertical ? 'rotate-90' : undefined)}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12H2M22 12L18 16M22 12L18 8M2 12L6 16M2 12L6 8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
