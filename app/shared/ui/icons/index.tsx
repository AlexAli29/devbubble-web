import { SVGProps } from "react";
import { cn } from "../../lib/utils";

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};
export const CIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="#283593"
        fillRule="evenodd"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#5c6bc0"
        fillRule="evenodd"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#3949ab"
        fillRule="evenodd"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export const GoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="16.8 16.1 72.9 27.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <switch>
        <g fill="#00acd7">
          <path d="m22.3 24.7c-.1 0-.2-.1-.1-.2l.7-1c.1-.1.2-.2.4-.2h12.6c.1 0 .2.1.1.2l-.6.9c-.1.1-.2.2-.4.2zm-5.3 3.2c-.1 0-.2-.1-.1-.2l.7-1c.1-.1.2-.2.4-.2h16.1c.1 0 .2.1.2.2l-.3 1c0 .1-.2.2-.3.2zm8.5 3.3c-.1 0-.2-.1-.1-.2l.5-.9c.1-.1.2-.2.4-.2h7c.1 0 .2.1.2.2l-.1.8c0 .1-.1.2-.2.2zm36.6-7.2-5.9 1.5c-.5.1-.6.2-1-.4-.5-.6-.9-1-1.7-1.3-2.2-1.1-4.4-.8-6.4.5-2.4 1.5-3.6 3.8-3.6 6.7 0 2.8 2 5.1 4.8 5.5 2.4.3 4.4-.5 6-2.3.3-.4.6-.8 1-1.3h-6.8c-.7 0-.9-.5-.7-1.1.5-1.1 1.3-2.9 1.8-3.8.1-.2.4-.6.9-.6h12.8c-.1 1-.1 1.9-.2 2.9-.4 2.5-1.3 4.9-2.9 6.9-2.5 3.3-5.8 5.4-10 6-3.5.5-6.7-.2-9.5-2.3-2.6-2-4.1-4.6-4.5-7.8-.5-3.8.7-7.3 3-10.3 2.5-3.3 5.8-5.4 9.9-6.1 3.3-.6 6.5-.2 9.3 1.7 1.9 1.2 3.2 2.9 4.1 5 .1.4 0 .5-.4.6z" />
          <path d="m73.7 43.5c-3.2-.1-6.1-1-8.6-3.1-2.1-1.8-3.4-4.1-3.8-6.8-.6-4 .5-7.5 2.9-10.6 2.6-3.4 5.7-5.1 9.9-5.9 3.6-.6 7-.3 10 1.8 2.8 1.9 4.5 4.5 5 7.9.6 4.8-.8 8.6-4 11.9-2.3 2.4-5.2 3.8-8.4 4.5-1.1.2-2.1.2-3 .3zm8.4-14.2c0-.5 0-.8-.1-1.2-.6-3.5-3.8-5.5-7.2-4.7-3.3.7-5.4 2.8-6.2 6.1-.6 2.7.7 5.5 3.2 6.7 1.9.8 3.9.7 5.7-.2 2.9-1.4 4.4-3.7 4.6-6.7z" />
        </g>
      </switch>
    </svg>
  );
};
export const ArrowBackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};
export const BellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const CSharpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="#283593"
        fillRule="evenodd"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#5c6bc0"
        fillRule="evenodd"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#3949ab"
        fillRule="evenodd"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export const CPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="#00549d"
        fillRule="evenodd"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#0086d4"
        fillRule="evenodd"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#0075c0"
        fillRule="evenodd"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M31 21H33V27H31zM38 21H40V27H38z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M29 23H35V25H29zM36 23H42V25H36z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export const DevopsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="-20.21 56.72 333.89 177.33"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#0d2c40">
        <path d="m93.09 176.17 20.91 1.54v17.86s-39.07 38.48-96-7.08h19.4l2.15-17.55s22.14 22.47 53.54 5.23z" />
        <path d="m22.28 93.66s-42.49 39.56-7.7 90.21l19.42 1.85 1.85-18.78s-17.85-29.25 5.21-52.34l-20.68-1.6z" />
        <path d="m26.9 90.89s53-34.17 93.29 7.08l-17.86-1.23-1.85 20s-20.32-24.62-54.18-5.53l-20.63-.92z" />
        <path d="m105.1 121.68 1.23-20.63 18.78 1.85 56.65 63.11h-19.39l-1.85 17.55z" />
      </g>
      <g fill="#02d35f">
        <path d="m98.33 172.79 71.73-79.13 19.09 1.85-1.23 19.4-70.5 78.5.3-20.32z" />
        <path d="m172.83 90.81 19.86 1.62-1.38 18.94s29.32-18.71 50.8 1.15l21 .92 1.89-18.44s-32.82-37-92.17-4.19z" />
        <path d="m245.11 115.52 21 1.23 1.62-18.55s45.95 51.19-3.7 95.21l-20.31-1.41 1.85-21s27.48-30.77-.46-55.48z" />
        <path d="m186.69 170.94-21.21-1.85-1.19 18.71s37.64 43.41 94.44 8.77l-19.4-1.57 1.85-20.09s-24.71 19.81-54.49-3.97z" />
      </g>
      <path
        d="m213.53 138.6v7a3.77 3.77 0 0 0 -.09.83 3.86 3.86 0 0 0 .09.84v11.28h-5.24v-20z"
        fill="#0d2c40"
      />
      <path
        d="m218.14 138.6a8.32 8.32 0 0 0 -4.61 2.17 8 8 0 0 0 -3.07 5.67 8.53 8.53 0 0 0 3.07 6 6.79 6.79 0 0 0 4.09 1.85c4.87.12 7.27-4.07 7.27-7.84s-2.98-8.07-6.75-7.85zm-1.59 11.31a3.19 3.19 0 0 1 -3-2.63 3.86 3.86 0 0 1 -.09-.84 3.77 3.77 0 0 1 .09-.83 3.19 3.19 0 0 1 3-2.63 3.48 3.48 0 0 1 0 6.93zm18.76-5.34c-.76-.24-3.57-.68-3.57-1.74 0-.6.86-.67 1.28-.65 1.2 0 3 1.43 4 1.16.89-.23 1.67-2.53 2-3.31a12.77 12.77 0 0 0 -8.34-1.52 5 5 0 0 0 -3.77 6.6c1.27 3.29 5.17 2 7.14 4 .81.84-.86 1.22-1.41 1.2a11.85 11.85 0 0 1 -4.74-1.8c-.49.7-2 2.37-1.82 3.24s2.17 1.52 3 1.78c2.78.9 7.07 1.24 9.16-1.29 2.61-3.04.33-6.61-2.93-7.67zm-40.69-11.51a11 11 0 1 0 11 11 11 11 0 0 0 -11-11zm0 16.61a5.64 5.64 0 1 1 5.65-5.64 5.64 5.64 0 0 1 -5.66 5.64z"
        fill="#0d2c40"
      />
      <path
        d="m90.44 138.35h-6.27l6.63 17.34h2.86v-7.39zm6.45.03h6.27l-6.64 17.34h-2.86v-7.39zm-36.89-2.47a15.09 15.09 0 0 0 -7.1-2.62c-3.38-.32-7 .09-10.13.09v22.29h.15c.6.07 1.2.13 1.81.17a39.73 39.73 0 0 0 7.22-.06c4.59-.51 7.54-2 9.35-3.94a10.11 10.11 0 0 0 2.55-6.54v-.53-.28c-.04-3.17-.95-6.36-3.85-8.58zm-5.1 13.62c-1.89 1.06-4.19.8-6.27.8v-11.61c2.21 0 4.7-.29 6.64 1.07 3.22 2.27 3.1 7.78-.4 9.74zm26.52 1.74c-.51-.43-1.16-1.16-1.85-1.28-1.1-.15-2.47 1.33-3.69 1.45-1.9.19-3.27-1.12-4-2.7h11.56c0-3.2-.27-6.57-3-8.77-5.07-4.14-13.39-1.08-14.32 5.45-1 6.88 4.41 11.32 11 10.46a8.64 8.64 0 0 0 4.42-2c.45-.4 1.11-.95.78-1.6a3.72 3.72 0 0 0 -.9-1.01zm-3.69-5.67h-5.9a3 3 0 0 1 5.9 0z"
        fill="#02d35f"
      />
    </svg>
  );
};
export const JSIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      {...props}
    >
      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
      <path
        fill="#000001"
        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
      ></path>
    </svg>
  );
};
export const KotlinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <linearGradient
        id="c"
        gradientTransform="rotate(-45 32051.159 -83912.245) scale(31.584)"
        gradientUnits="userSpaceOnUse"
        x1="-1582"
        x2="-1581"
        y1="-1495.328"
        y2="-1495.328"
      >
        <stop offset="0" stopColor="#c757bc" />
        <stop offset=".108" stopColor="#c757bc" />
        <stop offset=".173" stopColor="#cd5ca9" />
        <stop offset=".492" stopColor="#e8744f" />
        <stop offset=".716" stopColor="#f88316" />
        <stop offset=".823" stopColor="#ff8900" />
        <stop offset="1" stopColor="#ff8900" />
      </linearGradient>
      <linearGradient id="a">
        <stop offset="0" stopColor="#00afff" />
        <stop offset=".296" stopColor="#00afff" />
        <stop offset=".694" stopColor="#5282ff" />
        <stop offset="1" stopColor="#945dff" />
      </linearGradient>
      <linearGradient
        id="d"
        gradientTransform="rotate(-45 15635.387 -40897.94) scale(15.3946)"
        gradientUnits="userSpaceOnUse"
        x1="-1582"
        x2="-1581"
        xlinkHref="#a"
        y1="-1494.622"
        y2="-1494.622"
      />
      <linearGradient
        id="e"
        gradientTransform="matrix(7.6364 -7.6366 7.6366 7.6364 23489.887 -665.412)"
        gradientUnits="userSpaceOnUse"
        x1="-1582"
        x2="-1581"
        xlinkHref="#a"
        y1="-1494.036"
        y2="-1494.036"
      />
      <linearGradient
        id="f"
        gradientTransform="rotate(-45 32051.159 -83912.245) scale(31.584)"
        gradientUnits="userSpaceOnUse"
        x1="-1582"
        x2="-1581"
        y1="-1495.322"
        y2="-1495.322"
      >
        <stop offset="0" stopColor="#ad4ca4" />
        <stop offset=".108" stopColor="#ad4ca4" />
        <stop offset=".173" stopColor="#b25093" />
        <stop offset=".492" stopColor="#ca6545" />
        <stop offset=".716" stopColor="#d87213" />
        <stop offset=".823" stopColor="#de7700" />
        <stop offset="1" stopColor="#de7700" />
      </linearGradient>
      <linearGradient id="b">
        <stop offset="0" stopColor="#0098de" />
        <stop offset=".296" stopColor="#0098de" />
        <stop offset=".694" stopColor="#4771de" />
        <stop offset="1" stopColor="#8151de" />
      </linearGradient>
      <linearGradient
        id="g"
        gradientTransform="rotate(-45 15635.387 -40897.94) scale(15.3946)"
        gradientUnits="userSpaceOnUse"
        x1="-1582"
        x2="-1581"
        xlinkHref="#b"
        y1="-1494.622"
        y2="-1494.622"
      />
      <linearGradient
        id="h"
        gradientTransform="matrix(7.6364 -7.6366 7.6366 7.6364 23489.887 -665.412)"
        gradientUnits="userSpaceOnUse"
        x1="-1582"
        x2="-1581"
        xlinkHref="#b"
        y1="-1493.643"
        y2="-1493.643"
      />
      <path d="M24 0H12.05L.639 12h11.34l.053-.054z" fill="url(#c)" />
      <path d="M24 24H0zM12.032 11.946l-.053.054h.107z" fill="url(#d)" />
      <path d="M12.05 0H0v12.672V12h.639z" fill="url(#e)" />
      <path d="M11.979 12H.639L0 12.672V24z" fill="url(#f)" />
      <path d="M12.086 12h-.107L0 24h24z" fill="url(#g)" />
      <path d="M.639 12H0v.672z" fill="url(#h)" />
    </svg>
  );
};

export const PowerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const PythonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 256 255"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      {...props}
    >
      <defs>
        <linearGradient
          x1="12.959%"
          y1="12.039%"
          x2="79.639%"
          y2="78.201%"
          id="a"
        >
          <stop stopColor="#387EB8" offset="0%" />
          <stop stopColor="#366994" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="19.128%"
          y1="20.579%"
          x2="90.742%"
          y2="88.429%"
          id="b"
        >
          <stop stopColor="#FFE052" offset="0%" />
          <stop stopColor="#FFC331" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
        fill="url(#a)"
      />
      <path
        d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
        fill="url(#b)"
      />
    </svg>
  );
};
export const TSIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      {...props}
    >
      <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
      <polygon
        fill="#fff"
        points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
      ></polygon>
      <path
        fill="#fff"
        d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
      ></path>
    </svg>
  );
};
export const UserCircle = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className={cn("w-10 h-10 stroke-purple-100 cursor-pointer", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

export const DeleteIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
};
