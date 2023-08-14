interface Props {
  width?: number
  height?: number
  color?: string
}

export const FemaleIcon = ({ width = 24, height = 24, color = '#d4d4d4' }: Props) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9511 5.00023C9.22161 5.02636 7.01518 7.23962 7.00008 9.97177C9.37173 9.36069 11.1149 7.50854 11.9511 5.00023ZM12 15C9.92508 15 8.14536 13.7361 7.3887 11.9362C10.6875 11.1335 12.9473 8.55435 13.928 5.38525C15.7323 6.13994 17 7.92192 17 10C17 12.7614 14.7614 15 12 15ZM18.9995 10.0812C18.9998 10.0542 19 10.0271 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 10.0268 5.00015 10.0536 5.00045 10.0804C5.0002 10.0888 5.00005 10.0972 5 10.1056C4.9954 10.9434 4.99703 12.2057 4.99856 13.3972V13.3972L4.99856 13.3973L4.99856 13.3979C4.99929 13.9659 5 14.5178 5 15C5.00001 15.5523 5.44772 16 6 16H7.48312C5.32577 17.0824 4 18.9333 4 21C4 21.5523 4.44772 22 5 22C5.55228 22 6 21.5523 6 21C6 19.2701 7.93073 17 12 17C16.0693 17 18 19.2701 18 21C18 21.5523 18.4477 22 19 22C19.5523 22 20 21.5523 20 21C20 18.9333 18.6742 17.0824 16.5169 16H18C18.5523 16 19 15.5523 19 15C19 14.5175 19.0007 13.9651 19.0014 13.3966L19.0014 13.3951C19.0029 12.2042 19.0046 10.9429 19 10.1056C18.9999 10.0974 18.9998 10.0893 18.9995 10.0812Z"
      fill={color}
    />
  </svg>
)