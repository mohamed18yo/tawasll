export const Home = (props) => {
  const fill = props.isActive ? '#fff' : 'none';
  return (
    <svg
      style={(props.style, { cursor: 'pointer' })}
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21.125"
      viewBox="0 0 20 21.125"
    >
      <g id="Iconly_Bold_Home" data-name="Iconly/Bold/Home" transform="translate(0.5 0.625)">
        <g id="Home" transform="translate(0 0)">
          <path
            id="Home-2"
            data-name="Home"
            d="M6.635,18.773V15.716A1.419,1.419,0,0,1,8.058,14.3h2.874a1.429,1.429,0,0,1,1.007.414,1.408,1.408,0,0,1,.417,1v3.058a1.213,1.213,0,0,0,.356.867,1.231,1.231,0,0,0,.871.36h1.961a3.46,3.46,0,0,0,2.443-1A3.41,3.41,0,0,0,19,16.578V7.867a2.473,2.473,0,0,0-.9-1.9L11.434.676A3.1,3.1,0,0,0,7.485.747L.967,5.965A2.474,2.474,0,0,0,0,7.867v8.7A3.444,3.444,0,0,0,3.456,20H5.372a1.231,1.231,0,0,0,1.236-1.218Z"
            fill={fill}
            stroke="#fff"
            strokeWidth="1"
          />
        </g>
      </g>
    </svg>
  );
};
export const MesssageIcon = (props) => {
  const fill = props.isActive ? '#fff' : 'none';
  return (
    <svg
      style={(props.style, { cursor: 'pointer' })}
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="17.989"
      height="17.984"
      viewBox="0 0 17.989 17.984"
    >
      <g id="Component_132_7" data-name="Component 132 – 7" transform="translate(0.5 0.5)">
        <path
          id="Path_6381"
          data-name="Path 6381"
          d="M19.989,8.853,8.565,20.273l4.143-4.142h4.854a2.427,2.427,0,0,0,2.427-2.426V6.426A2.427,2.427,0,0,0,17.562,4H5.427A2.427,2.427,0,0,0,3,6.426v7.279a2.427,2.427,0,0,0,2.427,2.426H7.854v4.853Z"
          transform="translate(-3 -4)"
          fill={fill}
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
};
export const SearchIcon = (props) => {
  const fill = props.isActive ? '#fff' : 'none';
  const stk = props.color ? props.color : '#fff';
  return (
    <svg
      style={props.style}
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="21.109"
      height="21"
      viewBox="0 0 21.109 21"
    >
      <g id="Iconly_Bold_Search" data-name="Iconly/Bold/Search" transform="translate(0.5 0.5)">
        <g id="Search">
          <path
            id="Search-2"
            data-name="Search"
            d="M17.741,19.608l-2.12-2.43a1.083,1.083,0,0,1,0-1.524.986.986,0,0,1,1.393,0l2.554,2.062h.045a1.348,1.348,0,0,1,0,1.892,1.315,1.315,0,0,1-1.872,0ZM0,8.67A8.624,8.624,0,0,1,8.578,0a8.531,8.531,0,0,1,6.065,2.54,8.716,8.716,0,0,1,2.512,6.13A8.624,8.624,0,0,1,8.578,17.34,8.624,8.624,0,0,1,0,8.67Z"
            fill={fill}
            stroke={stk}
            strokeWidth="1"
          />
        </g>
      </g>
    </svg>
  );
};
export const LogoutIcon = (props) => {
  const stk = props.color ? props.color : '#fff';
  return (
    <svg
      style={props.style}
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      id="Iconly_Light-outline_Logout"
      data-name="Iconly/Light-outline/Logout"
      width="20.537"
      height="20"
      viewBox="0 0 20.537 20"
    >
      <g id="Logout" transform="translate(-0.022 -0.022)">
        <path
          id="Logout-2"
          data-name="Logout"
          d="M4.434,20A4.435,4.435,0,0,1,0,15.773l0-.209V4.435A4.436,4.436,0,0,1,4.226,0l.209,0H9.309a4.435,4.435,0,0,1,4.431,4.226l0,.209v.932a.75.75,0,0,1-1.493.1l-.007-.1V4.435A2.935,2.935,0,0,0,9.482,1.5l-.173,0H4.434A2.935,2.935,0,0,0,1.5,4.262l0,.173V15.565A2.935,2.935,0,0,0,4.261,18.5l.173.005H9.319a2.925,2.925,0,0,0,2.92-2.752l0-.172v-.943a.751.751,0,0,1,1.494-.1l.006.1v.943A4.426,4.426,0,0,1,9.534,20l-.215,0Zm11.894-6.555a.75.75,0,0,1-.07-.977l.072-.085,1.64-1.634H7.746a.75.75,0,0,1-.1-1.493l.1-.006H17.972L16.33,7.617a.75.75,0,0,1-.076-.977l.073-.085a.751.751,0,0,1,.976-.075l.084.072,2.929,2.915a.747.747,0,0,1,.214.436h0l0,.017v0l0,.018h0q0,.028,0,.057h0v0s0,.01,0,.015v0s0,.008,0,.012v.047a.746.746,0,0,1-.073.252v0l-.006.013-.006.01,0,0-.008.014h0l-.008.013h0l-.009.014h0l-.008.012v0l-.007.011,0,0-.007.009,0,0,0,0h0a.754.754,0,0,1-.09.1l-2.911,2.9a.749.749,0,0,1-1.06,0Z"
          transform="translate(0.022 0.022)"
          fill={'#fff'}
          stroke={stk}
        />
      </g>
    </svg>
  );
};

export const NotificationsIcon = (props) => {
  const fill = props.isActive ? '#fff' : 'none';
  return (
    <svg
      onClick={props.onClick}
      style={(props.style, { cursor: 'pointer' })}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="21"
      viewBox="0 0 18 21"
    >
      <g id="Iconly_Bold_Notification" data-name="Iconly/Bold/Notification" transform="translate(0.5 0.5)">
        <g id="Notification">
          <path
            id="Notification-2"
            data-name="Notification"
            d="M7.983,19.967a3.619,3.619,0,0,1-1.714-.733,1.551,1.551,0,0,1-.7-1.173c0-.5.462-.734.889-.833a25.955,25.955,0,0,1,4.046,0c.427.1.889.329.889.833a1.553,1.553,0,0,1-.695,1.174,3.635,3.635,0,0,1-1.713.732A4,4,0,0,1,8.48,20,3.667,3.667,0,0,1,7.983,19.967ZM3.764,15.747a4.535,4.535,0,0,1-2.9-1.413A3.615,3.615,0,0,1,0,11.956a3.368,3.368,0,0,1,.731-2.31A3.8,3.8,0,0,0,1.794,6.8V6.37A5.625,5.625,0,0,1,3.077,2.512,7.073,7.073,0,0,1,8.456,0h.09a7.041,7.041,0,0,1,5.467,2.624,5.546,5.546,0,0,1,1.2,3.746V6.8a3.889,3.889,0,0,0,1.062,2.849A3.364,3.364,0,0,1,17,11.956a3.614,3.614,0,0,1-.863,2.379,4.539,4.539,0,0,1-2.9,1.413c-1.571.133-3.144.247-4.737.247A41.689,41.689,0,0,1,3.764,15.747Z"
            fill={fill}
            stroke="#fff"
            strokeWidth="1"
          />
        </g>
      </g>
    </svg>
  );
};

export const AlbumIcon = (props) => {
  return (
    <svg
      style={props.style}
      id="Album"
      xmlns="http://www.w3.org/2000/svg"
      width="21.021"
      height="21.021"
      viewBox="0 0 21.021 21.021"
    >
      <path
        id="Path_7777"
        data-name="Path 7777"
        d="M20.919,24.119H6.907A4.914,4.914,0,0,1,2,19.212V5.2H3.4V19.212a3.508,3.508,0,0,0,3.5,3.5H20.919Z"
        transform="translate(-2 -3.098)"
        fill="#d0d6e0"
      />
      <path
        id="Path_7778"
        data-name="Path 7778"
        d="M23.458,3.025A3.5,3.5,0,0,0,20.981,2H9.768A3.508,3.508,0,0,0,6.26,5.5V16.715a3.514,3.514,0,0,0,3.5,3.5h11.22a3.508,3.508,0,0,0,3.5-3.5V5.5A3.5,3.5,0,0,0,23.458,3.025Zm-.381,10.307-2.115-1.314a2.089,2.089,0,0,0-2.628.3l-1.012,1.012.985.985,1.038-1.038a.7.7,0,0,1,.867-.105l2.864,1.813v1.734a2.109,2.109,0,0,1-2.1,2.1H9.768a2.109,2.109,0,0,1-2.1-2.1V14.9l3.14-3.14a.723.723,0,0,1,.985,0L17.7,17.667l.985-.985-5.965-5.965a2.1,2.1,0,0,0-2.9.072L7.666,12.911V5.5a2.109,2.109,0,0,1,2.1-2.1H20.981a2.109,2.109,0,0,1,2.1,2.1Z"
        transform="translate(-3.462 -2)"
        fill="#d0d6e0"
      />
      <path
        id="Path_7779"
        data-name="Path 7779"
        d="M20.381,5.65a3.1,3.1,0,1,0,3.1,3.1,3.1,3.1,0,0,0-3.1-3.1Zm0,4.828a1.7,1.7,0,1,1,1.7-1.7A1.7,1.7,0,0,1,20.381,10.478Z"
        transform="translate(-7.242 -3.252)"
        fill="#d0d6e0"
      />
    </svg>
  );
};

export const VideoIcon = (props) => {
  return (
    <svg
      style={props.style}
      id="Iconly_Light-outline_Video"
      data-name="Iconly/Light-outline/Video"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="15.391"
      viewBox="0 0 20 15.391"
    >
      <g id="Video" transform="translate(0 0)">
        <path
          id="Video-2"
          data-name="Video"
          d="M4.3,15.391A4.341,4.341,0,0,1,1.19,14.223,4.106,4.106,0,0,1,0,11.2V4.188a4.106,4.106,0,0,1,1.19-3.02A4.341,4.341,0,0,1,4.3,0h6.269a4.339,4.339,0,0,1,3.113,1.168,4.011,4.011,0,0,1,1.175,2.616L17.509,2.7a1.809,1.809,0,0,1,2.486,1.534L20,4.377v6.638a1.808,1.808,0,0,1-2.359,1.722l-.133-.048-2.646-1.082a4.012,4.012,0,0,1-1.176,2.615,4.338,4.338,0,0,1-3.112,1.169ZM1.5,4.188V11.2a2.549,2.549,0,0,0,2.8,2.687h6.269a2.549,2.549,0,0,0,2.8-2.687v-.7c0-.008,0-.015,0-.023V4.913q0-.019,0-.038V4.188a2.549,2.549,0,0,0-2.8-2.687H4.3A2.549,2.549,0,0,0,1.5,4.188ZM18.075,11.3a.308.308,0,0,0,.417-.215l.008-.07V4.377a.308.308,0,0,0-.356-.305l-.068.019L14.877,5.4V9.993Z"
          transform="translate(0 0)"
          fill="#d0d6e0"
        />
      </g>
    </svg>
  );
};

export const CommentIcon = (props) => {
  return (
    <svg style={props.style} xmlns="http://www.w3.org/2000/svg" width="14.34" height="14.34" viewBox="0 0 14.34 14.34">
      <g id="Iconly_Light_Chat" data-name="Iconly/Light/Chat" transform="translate(0.5 0.5)">
        <g id="Chat">
          <path
            id="Combined_Shape"
            data-name="Combined Shape"
            d="M6.06.778a.78.78,0,1,1,.78.78A.78.78,0,0,1,6.06.778Zm-3.03,0a.779.779,0,1,1,.779.78A.78.78,0,0,1,3.03.778ZM0,.778a.78.78,0,1,1,.779.78A.78.78,0,0,1,0,.778Z"
            transform="translate(3.019 6.04)"
            fill="none"
            stroke="gray"
            strokeWidth="1"
          />
          <path
            id="Stroke_7"
            data-name="Stroke 7"
            d="M6.684,0A6.674,6.674,0,0,0,0,6.68a7.06,7.06,0,0,0,.9,3.333.7.7,0,0,1,.047.6L.5,12.111a.416.416,0,0,0,.547.52l1.347-.4a1.132,1.132,0,0,1,.994.24A6.668,6.668,0,1,0,6.684,0Z"
            fill="none"
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </g>
    </svg>
  );
};

export const HeartIcon = (props) => {
  return (
    <svg
      style={props.style}
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="17.448"
      height="16.583"
      viewBox="0 0 17.448 16.583"
    >
      <g id="Iconly_Light-outline_Heart" data-name="Iconly/Light-outline/Heart" transform="translate(0.39 0.375)">
        <g id="Heart" transform="translate(0)">
          <path
            id="Heart-2"
            data-name="Heart"
            d="M8.026,15.747l-.2-.123a28.96,28.96,0,0,1-5-3.894A10.283,10.283,0,0,1,.339,7.774,6.463,6.463,0,0,1,.506,3.193,5.248,5.248,0,0,1,3.737.262,5.47,5.47,0,0,1,8.112.713l.22.132L8.555.712A5.477,5.477,0,0,1,12.706.2l.222.066A5.256,5.256,0,0,1,16.162,3.2a6.484,6.484,0,0,1,.167,4.592,10.411,10.411,0,0,1-2.48,3.947,28.979,28.979,0,0,1-5,3.887l-.191.119a.612.612,0,0,1-.635.005ZM4.11,1.422A4.056,4.056,0,0,0,1.6,3.726a5.231,5.231,0,0,0-.109,3.663,9.178,9.178,0,0,0,2.178,3.473,27.713,27.713,0,0,0,4.782,3.721l-.118-.075.389-.245a27.693,27.693,0,0,0,3.829-2.978l.44-.418A9.138,9.138,0,0,0,15.173,7.4a5.237,5.237,0,0,0-.108-3.673,4.061,4.061,0,0,0-2.51-2.307,4.257,4.257,0,0,0-3.856.65.611.611,0,0,1-.721.008l-.164-.118a4.249,4.249,0,0,0-3.7-.54Zm8.214,4.5A1.651,1.651,0,0,0,11.189,4.48a.609.609,0,1,1,.371-1.16,2.869,2.869,0,0,1,1.98,2.5.61.61,0,0,1-.557.658l-.052,0A.609.609,0,0,1,12.324,5.918Z"
            fill="gray"
            stroke="rgba(0,0,0,0)"
            strokeWidth="0.75"
          />
        </g>
      </g>
    </svg>
  );
};
export const LightHeartIcon = (props) => {
  return (
    <svg
      style={props.style}
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="17.658"
      height="16.781"
      viewBox="0 0 17.658 16.781"
    >
      <g id="Iconly_Light_Heart" data-name="Iconly/Light/Heart" transform="translate(0.517 0.531)">
        <g id="Heart">
          <path
            id="Path_33961"
            d="M8.1,15.622a30.485,30.485,0,0,1-5.269-4.1,10.492,10.492,0,0,1-2.508-4C-.615,4.594.485,1.243,3.562.252a5.231,5.231,0,0,1,4.747.8h0a5.239,5.239,0,0,1,4.747-.8c3.078.992,4.185,4.342,3.244,7.269a10.492,10.492,0,0,1-2.508,4,30.485,30.485,0,0,1-5.269,4.1l-.206.128Z"
            transform="translate(0 0)"
            fill="#dc3232"
            stroke="#dc3232"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            id="Path_33964"
            d="M0,0A2.434,2.434,0,0,1,1.677,2.119"
            transform="translate(11.584 3.546)"
            fill="#dc3232"
            stroke="#dc3232"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </g>
    </svg>
  );
};
export const ShearIcon = (props) => {
  return (
    <svg
      onClick={props.onClick}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      width="16.728"
      height="16.864"
      viewBox="0 0 16.728 16.864"
    >
      <g id="Component_138_3" data-name="Component 138 – 3" transform="translate(0.5 0.634)">
        <path
          id="Path_6385"
          data-name="Path 6385"
          d="M7.924,11.959a2.605,2.605,0,0,0,0-2.325m0,2.325a2.6,2.6,0,1,1,0-2.325m0,2.325,5.745,2.873m-5.745-5.2,5.745-2.873m0,0a2.6,2.6,0,1,0,1.162-3.487,2.6,2.6,0,0,0-1.162,3.487Zm0,8.07a2.6,2.6,0,1,0,3.488-1.163,2.6,2.6,0,0,0-3.488,1.163Z"
          transform="translate(-3.001 -2.999)"
          fill="none"
          stroke="gray"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
};

export const CategoryIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 21.5 21.5">
      <g id="Iconly_Light_Category" data-name="Iconly/Light/Category" transform="translate(0.75 0.75)">
        <g id="Category" transform="translate(0 0)">
          <path
            id="Stroke_1"
            data-name="Stroke 1"
            d="M2.449,0H5.716A2.459,2.459,0,0,1,8.163,2.47V5.764a2.46,2.46,0,0,1-2.448,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.47A2.46,2.46,0,0,1,2.449,0Z"
            transform="translate(11.837 0)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            id="Stroke_3"
            data-name="Stroke 3"
            d="M2.449,0H5.714A2.46,2.46,0,0,1,8.163,2.47V5.764a2.46,2.46,0,0,1-2.449,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.47A2.46,2.46,0,0,1,2.449,0Z"
            transform="translate(0 0)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            id="Stroke_5"
            data-name="Stroke 5"
            d="M2.449,0H5.714A2.46,2.46,0,0,1,8.163,2.471V5.764a2.46,2.46,0,0,1-2.449,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.471A2.46,2.46,0,0,1,2.449,0Z"
            transform="translate(0 11.766)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            id="Stroke_7"
            data-name="Stroke 7"
            d="M2.449,0H5.716A2.46,2.46,0,0,1,8.163,2.471V5.764a2.459,2.459,0,0,1-2.448,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.471A2.46,2.46,0,0,1,2.449,0Z"
            transform="translate(11.837 11.766)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
};

export const SettingsIcon = (props) => {
  // const stk = props.color ? props.color : '#fff';

  return (
    <svg style={props.style} xmlns="http://www.w3.org/2000/svg" width="19.534" height="20.722" viewBox="0 0 19.534 20.722">
      <g id="Iconly_Light_Setting" data-name="Iconly/Light/Setting" transform="translate(0.879 0.75)">
        <g id="Setting" transform="translate(-0.779 -0.778)">
          <path
            id="Path_33946"
            d="M17.528,5.346l-.622-1.08a1.913,1.913,0,0,0-2.609-.7h0a1.9,1.9,0,0,1-2.609-.677,1.831,1.831,0,0,1-.256-.915h0A1.913,1.913,0,0,0,9.519,0H8.265a1.9,1.9,0,0,0-1.9,1.913h0A1.913,1.913,0,0,1,4.448,3.8a1.831,1.831,0,0,1-.915-.256h0a1.913,1.913,0,0,0-2.609.7l-.668,1.1a1.913,1.913,0,0,0,.7,2.609h0a1.913,1.913,0,0,1,.957,1.657,1.913,1.913,0,0,1-.957,1.657h0a1.9,1.9,0,0,0-.7,2.6h0l.632,1.089A1.913,1.913,0,0,0,3.5,15.7h0a1.895,1.895,0,0,1,2.6.7,1.831,1.831,0,0,1,.256.915h0a1.913,1.913,0,0,0,1.913,1.913H9.519a1.913,1.913,0,0,0,1.913-1.9h0a1.9,1.9,0,0,1,1.913-1.913,1.95,1.95,0,0,1,.915.256h0a1.913,1.913,0,0,0,2.609-.7h0l.659-1.1a1.9,1.9,0,0,0-.7-2.609h0a1.9,1.9,0,0,1-.7-2.609,1.876,1.876,0,0,1,.7-.7h0a1.913,1.913,0,0,0,.7-2.6h0Z"
            transform="translate(0.779 0.778)"
            fill="none"
            stroke="#200e32"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <circle
            id="Ellipse_737"
            cx="2.636"
            cy="2.636"
            r="2.636"
            transform="translate(7.039 7.753)"
            fill="none"
            stroke="#200e32"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
};
