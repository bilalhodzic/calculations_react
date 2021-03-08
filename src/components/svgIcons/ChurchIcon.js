export function ChurchIcon(props) {
  return (
    <svg
      {...props}
      width={props.size || "108"}
      height={props.size || "108"}
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M18.0783 74.7271H17.6971C13.9817 74.7271 10.959 77.7497 10.959 81.4651V90.4867C10.959 91.3659 11.6716 92.0785 12.5508 92.0785H23.2246C24.104 92.0785 24.8164 91.3657 24.8164 90.4867V81.4651C24.8166 77.7497 21.7939 74.7271 18.0783 74.7271ZM21.6327 88.8949H14.1429V81.4651C14.1429 79.5053 15.7374 77.9107 17.6973 77.9107H18.0785C20.0382 77.9107 21.6329 79.5051 21.6329 81.4651V88.8949H21.6327Z"
          fill={props.color || "#21344d"}
        />
        <path
          d="M90.7656 74.7271H90.3846C86.6692 74.7271 83.6465 77.7497 83.6465 81.4651V90.4867C83.6465 91.3659 84.3591 92.0785 85.2383 92.0785H95.9121C96.7915 92.0785 97.5039 91.3657 97.5039 90.4867V81.4651C97.5039 77.7497 94.4812 74.7271 90.7656 74.7271ZM94.32 88.8949H86.8301V81.4651C86.8301 79.5053 88.4247 77.9107 90.3846 77.9107H90.7658C92.7255 77.9107 94.3202 79.5051 94.3202 81.4651V88.8949H94.32Z"
          fill={props.color || "#21344d"}
        />
        <path
          d="M106.234 97.0836H104.447V75.9292L105.613 76.4185C105.812 76.5015 106.02 76.5424 106.229 76.5424C106.662 76.5424 107.09 76.3659 107.405 76.0243C107.685 75.721 107.821 75.3119 107.821 74.8997V67.2377C107.821 66.5966 107.436 66.0177 106.845 65.7695L97.7084 61.9362C96.8975 61.596 95.9648 61.9777 95.6244 62.7881C95.2845 63.5988 95.6657 64.5317 96.4764 64.8719L104.637 68.2959V72.5562L80.5569 62.4526V58.1923L90.1078 62.1996C90.9187 62.5398 91.8514 62.1583 92.1918 61.3476C92.5317 60.5371 92.1505 59.6041 91.3398 59.2639L80.5573 54.7397V48.7463L82.002 49.3528C82.2 49.4361 82.4094 49.4769 82.618 49.4769C83.0973 49.4769 83.5714 49.2608 83.891 48.8429C84.1081 48.5591 84.21 48.2033 84.21 47.8459V40.1728C84.21 39.5317 83.8254 38.9533 83.2344 38.7051L59.3387 28.6727V19.2978H67.5911C68.4703 19.2978 69.1829 18.585 69.1829 17.706V10.9312C69.1829 10.052 68.4701 9.33937 67.5911 9.33937H59.3387V1.92117C59.3387 1.04195 58.6259 0.329346 57.7469 0.329346H50.9526C50.0734 0.329346 49.3608 1.04216 49.3608 1.92117V9.33937H41.1084C40.2292 9.33937 39.5166 10.0522 39.5166 10.9312V17.7064C39.5166 18.5856 40.2294 19.2982 41.1084 19.2982H49.3608V28.5778L25.2381 38.7055C24.6471 38.9537 24.2625 39.5321 24.2625 40.1733V47.8405C24.2625 48.2095 24.37 48.5774 24.5995 48.8664C25.0602 49.4474 25.8262 49.6241 26.4707 49.3531L27.9068 48.7503V54.7399L1.61892 65.7697C1.02767 66.0179 0.642864 66.5964 0.642864 67.2379V74.8999C0.642864 75.3123 0.779097 75.7212 1.05869 76.0245C1.3737 76.3661 1.80252 76.5426 2.2349 76.5426C2.44302 76.5426 2.65282 76.5018 2.85047 76.4188L4.01704 75.9294V97.0838H2.2305C1.35127 97.0838 0.638672 97.7966 0.638672 98.6757V106.047C0.638672 106.926 1.35148 107.639 2.2305 107.639H106.234C107.113 107.639 107.825 106.926 107.825 106.047V98.6757C107.825 97.7964 107.113 97.0836 106.234 97.0836ZM80.5571 65.9056L101.263 74.5934V97.0836H80.5571V65.9056ZM42.7005 16.1145V12.5232H50.9528C51.8323 12.5232 52.5447 11.8104 52.5447 10.9314V3.51321H56.155V10.9314C56.155 11.8106 56.8676 12.5232 57.7469 12.5232H65.9992V16.1145H57.7469C56.8674 16.1145 56.155 16.8274 56.155 17.7064V27.3364L54.8527 26.7895C54.4584 26.624 54.0145 26.624 53.6201 26.7895L52.5447 27.241V17.7064C52.5447 16.8271 51.8318 16.1145 50.9528 16.1145H42.7005ZM27.4464 45.4908V41.2315L54.2365 29.9839L81.0263 41.2315V45.4908L54.8527 34.5018C54.4584 34.3362 54.0145 34.3362 53.6201 34.5018L27.4464 45.4908ZM29.4987 75.6053C30.3779 75.6053 31.0905 74.8925 31.0905 74.0135V47.4137L54.2365 37.6959L77.3736 47.41V97.0836H65.1401V83.396C65.1401 77.6706 60.4988 73.0297 54.7738 73.0297H54.1239C48.3988 73.0297 43.7576 77.6708 43.7576 83.396V97.0836H31.0907V81.4426C31.0907 80.5634 30.3779 79.8508 29.4989 79.8508C28.6196 79.8508 27.907 80.5636 27.907 81.4426V97.0836H7.20091V74.5934L27.9066 65.9056V74.0133C27.9068 74.8925 28.6194 75.6053 29.4987 75.6053ZM56.1674 86.9852V76.3502C59.463 77.001 61.9563 79.9124 61.9563 83.3962V86.9854H56.1674V86.9852ZM61.956 90.1688V97.0836H56.1672V90.1688H61.956ZM46.9411 86.9852V83.396C46.9411 79.8235 49.563 76.8528 52.9835 76.3049V86.9852H46.9411ZM52.9833 90.1688V97.0836H46.9409V90.1688H52.9833ZM3.82673 72.5564V68.2961L27.9066 58.1925V62.4528L3.82673 72.5564ZM104.642 104.455H3.82233V100.267H104.642V104.455Z"
          fill={props.color || "#21344d"}
        />
        <path
          d="M54.2331 42.6248C46.3331 42.6248 39.9062 49.0518 39.9062 56.9516C39.9062 64.8517 46.3333 71.2785 54.2331 71.2785C62.1332 71.2785 68.56 64.8515 68.56 56.9516C68.56 49.0518 62.1332 42.6248 54.2331 42.6248ZM63.1543 50.2819C64.2473 51.7402 64.9901 53.4748 65.2609 55.3598H62.1401C61.9303 54.3163 61.5184 53.3452 60.9473 52.4889L63.1543 50.2819ZM45.312 63.6216C44.219 62.1633 43.4764 60.4287 43.2054 58.5437H46.3262C46.536 59.5872 46.9478 60.5582 47.5189 61.4146L45.312 63.6216ZM46.3262 55.3598H43.2054C43.4762 53.475 44.219 51.7402 45.312 50.2819L47.5189 52.4891C46.9478 53.3457 46.5358 54.3165 46.3262 55.3598ZM52.6411 45.9243V49.0449H52.6413C51.5978 49.2547 50.6267 49.6667 49.7701 50.2379L47.5632 48.0309C49.0215 46.9377 50.756 46.1951 52.6411 45.9243ZM52.6413 67.9796C50.7563 67.7088 49.0217 66.9662 47.5634 65.873L49.7703 63.666C50.6267 64.2372 51.5978 64.6492 52.6413 64.8588V67.9796ZM49.3514 56.9518C49.3514 54.2601 51.5412 52.0701 54.2331 52.0701C56.9251 52.0701 59.1149 54.2601 59.1149 56.9518C59.1149 59.6436 56.9251 61.8336 54.2331 61.8336C51.5412 61.8336 49.3514 59.6436 49.3514 56.9518ZM55.825 67.9794V64.8588C56.8685 64.649 57.8395 64.2372 58.6959 63.666L60.9029 65.873C59.4446 66.966 57.71 67.7084 55.825 67.9794ZM58.6959 50.2377C57.8395 49.6665 56.8685 49.2545 55.825 49.0449V45.9243C57.71 46.1951 59.4446 46.9377 60.9029 48.0307L58.6959 50.2377ZM63.1543 63.6216L60.9473 61.4146C61.5184 60.5582 61.9305 59.5872 62.1401 58.5437H65.2609C64.9901 60.4287 64.2473 62.1631 63.1543 63.6216Z"
          fill={props.color || "#21344d"}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="107.31"
            height="107.31"
            fill="white"
            transform="translate(0.578125 0.329102)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
