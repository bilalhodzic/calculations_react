export function ArrowIcon(props) {
  return (
    <svg
      {...props}
      width="20"
      height="40"
      viewBox="0 0 20 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4153 0.308323L19.0136 8.90681C19.2126 9.10568 19.3223 9.37116 19.3223 9.65423C19.3223 9.93731 19.2126 10.2028 19.0136 10.4017L18.3805 11.0349C17.968 11.4469 17.2976 11.4469 16.8857 11.0349L9.66532 3.81451L2.43695 11.0429C2.23792 11.2418 1.9726 11.3516 1.68968 11.3516C1.40645 11.3516 1.14113 11.2418 0.941946 11.0429L0.309042 10.4097C0.110012 10.2106 0.000366228 9.94532 0.000366231 9.66224C0.000366234 9.37917 0.110012 9.1137 0.309042 8.91482L8.91523 0.308323C9.11489 0.108979 9.38146 -0.000510334 9.66485 0.00011814C9.94934 -0.000510328 10.2158 0.108979 10.4153 0.308323Z"
        fill={props.color}
      />
      <line
        x1="9.5"
        y1="2.17383"
        x2="9.5"
        y2="39.1738"
        stroke={props.color}
        strokeWidth="3"
      />
    </svg>
  );
}
