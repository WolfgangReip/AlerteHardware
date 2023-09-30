type MonSVGProps = {
    width?: number;
    height?: number;
    style?: React.CSSProperties;
};

export default function MonSVG({ width, height, style }: MonSVGProps) {
    return (
        <svg width={width} height={height} style={style} viewBox='0 0 512 509'>
            <linearGradient id='monDegradé' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='10%' stopColor='#07eaf8' />
                <stop offset='33%' stopColor='#b207f8' />
                <stop offset='66%' stopColor='#ed091c' />
                <stop offset='90%' stopColor='#edde09' />
            </linearGradient>

            <g id='Layer_x0020_1'>
                <metadata id='CorelCorpID_0Corel-Layer' />
                <path
                    fill='url(#monDegradé)'
                    fillRule='nonzero'
                    d='M122.58 82.55l266.84 0c10.1,0 19.28,4.14 25.92,10.78l0.56 0.62c6.33,6.6 10.24,15.55 10.24,25.31l0 270.32c0,10.04 -4.15,19.21 -10.8,25.87l-0.04 0.04c-6.66,6.65 -15.83,10.8 -25.88,10.8l-266.84 0c-10.05,0 -19.23,-4.14 -25.89,-10.79 -6.68,-6.65 -10.83,-15.83 -10.83,-25.92l0 -270.32c0,-10.1 4.13,-19.29 10.78,-25.93l0.61 -0.56c6.6,-6.32 15.54,-10.22 25.33,-10.22zm44.46 167.97c7.83,0 14.96,3.19 20.13,8.35l0.04 0.04c5.17,5.19 8.35,12.31 8.35,20.13 0,7.86 -3.19,15 -8.35,20.16l-0.54 0.5c-2.82,2.67 -6.18,4.78 -9.89,6.13l0 41.93 97.67 0c4.82,0 8.73,3.9 8.73,8.72l0 50.47 106.24 0c4.75,0 9.1,-1.96 12.26,-5.11 3.16,-3.17 5.12,-7.52 5.12,-12.26l0 -270.32c0,-4.56 -1.8,-8.75 -4.72,-11.87l-0.41 -0.39c-3.15,-3.15 -7.49,-5.11 -12.25,-5.11l-24.78 0 0 138.73c0,4.82 -3.9,8.73 -8.73,8.73l-38.24 0c-1.37,4.59 -3.88,8.72 -7.19,12.03 -5.14,5.18 -12.28,8.38 -20.15,8.38 -7.82,0 -14.95,-3.2 -20.12,-8.36l-0.04 -0.03c-5.17,-5.19 -8.35,-12.31 -8.35,-20.13 0,-7.87 3.19,-15.01 8.35,-20.17 5.16,-5.15 12.3,-8.35 20.16,-8.35 7.87,0 15.01,3.2 20.17,8.36l0.49 0.54c2.77,2.92 4.94,6.41 6.28,10.27l29.92 0 0 -130 -224.61 0c-4.58,0 -8.77,1.79 -11.89,4.7l-0.38 0.41c-3.15,3.15 -5.11,7.5 -5.11,12.26l0 35.07 151.42 0 0 -6.25c0,-3.48 1.42,-6.64 3.7,-8.92 2.28,-2.28 5.45,-3.7 8.92,-3.7l29.71 0c3.48,0 6.64,1.42 8.92,3.7 2.27,2.28 3.7,5.44 3.7,8.92l0 29.95c0,3.47 -1.43,6.64 -3.7,8.91 -2.28,2.28 -5.44,3.7 -8.92,3.7l-29.71 0c-3.47,0 -6.64,-1.42 -8.92,-3.7 -2.28,-2.27 -3.7,-5.44 -3.7,-8.91l0 -6.25 -151.42 0 0 37.9 121.36 0c4.82,0 8.73,3.91 8.73,8.73l0 85.8 77.27 0 0 -8.63c0,-3.61 1.48,-6.9 3.84,-9.26 2.37,-2.37 5.66,-3.85 9.27,-3.85l32.98 0c3.62,0 6.9,1.48 9.27,3.85 2.36,2.36 3.84,5.65 3.84,9.26l0 33.24c0,3.62 -1.48,6.9 -3.84,9.27 -2.37,2.37 -5.65,3.85 -9.27,3.85l-32.98 0c-3.61,0 -6.9,-1.48 -9.27,-3.85 -2.36,-2.37 -3.84,-5.65 -3.84,-9.27l0 -7.15 -86 0c-4.82,0 -8.73,-3.91 -8.73,-8.73l0 -85.81 -112.63 0 0 162.45c0,4.75 1.97,9.1 5.12,12.25 3.15,3.16 7.5,5.12 12.26,5.12l143.14 0 0 -41.74 -97.66 0c-4.82,0 -8.73,-3.91 -8.73,-8.73l0 -49.98c-4.77,-1.34 -9.04,-3.89 -12.45,-7.3 -5.16,-5.16 -8.35,-12.3 -8.35,-20.16 0,-7.84 3.2,-14.98 8.37,-20.15 5.14,-5.18 12.27,-8.37 20.14,-8.37zm8.71 19.77c-2.2,-2.2 -5.28,-3.57 -8.71,-3.57 -3.4,0 -6.48,1.38 -8.71,3.61 -2.24,2.2 -3.6,5.28 -3.6,8.71 0,3.4 1.38,6.48 3.6,8.71 2.23,2.22 5.31,3.6 8.71,3.6 3.26,0 6.2,-1.23 8.38,-3.25l0.33 -0.35c2.23,-2.23 3.61,-5.31 3.61,-8.71 0,-3.43 -1.37,-6.51 -3.57,-8.71l-0.04 -0.04zm179.81 28.38l-26.8 0 0 27.06 26.8 0 0 -27.06zm-56.52 -66.14c-2.22,-2.22 -5.3,-3.6 -8.71,-3.6 -3.4,0 -6.48,1.37 -8.7,3.6 -2.23,2.22 -3.61,5.31 -3.61,8.71 0,3.42 1.37,6.5 3.57,8.71l0.04 0.03c2.2,2.21 5.28,3.57 8.7,3.57 3.41,0 6.49,-1.38 8.71,-3.6 1.93,-1.9 3.21,-4.44 3.53,-7.29 -0.15,-0.66 -0.24,-1.34 -0.24,-2.04 0,-0.52 0.05,-1.03 0.14,-1.53 -0.42,-2.39 -1.51,-4.54 -3.07,-6.22l-0.36 -0.34zm-3.68 -80.87l-22.54 0 0 22.78 22.54 0 0 -22.78zm-295.36 192.64l0 30.52c0,3.14 2.57,5.71 5.71,5.71l44.84 0c3.14,0 5.71,-2.57 5.71,-5.71l0 -30.52c0,-3.14 -2.57,-5.71 -5.71,-5.71l-44.84 0c-3.14,0 -5.71,2.57 -5.71,5.71zm0 -70.09l0 30.52c0,3.14 2.57,5.71 5.71,5.71l44.84 0c3.14,0 5.71,-2.57 5.71,-5.71l0 -30.52c0,-3.14 -2.57,-5.71 -5.71,-5.71l-44.84 0c-3.14,0 -5.71,2.57 -5.71,5.71zm0 -70.09l0 30.52c0,3.14 2.57,5.71 5.71,5.71l44.84 0c3.14,0 5.71,-2.57 5.71,-5.71l0 -30.52c0,-3.14 -2.57,-5.71 -5.71,-5.71l-44.84 0c-3.14,0 -5.71,2.57 -5.71,5.71zm0 -70.09l0 30.52c0,3.14 2.57,5.71 5.71,5.71l44.84 0c3.14,0 5.71,-2.57 5.71,-5.71l0 -30.52c0,-3.14 -2.57,-5.71 -5.71,-5.71l-44.84 0c-3.14,0 -5.71,2.57 -5.71,5.71zm512 210.27l0 30.52c0,3.14 -2.57,5.71 -5.71,5.71l-44.85 0c-3.13,0 -5.7,-2.57 -5.7,-5.71l0 -30.52c0,-3.14 2.57,-5.71 5.7,-5.71l44.85 0c3.14,0 5.71,2.57 5.71,5.71zm0 -70.09l0 30.52c0,3.14 -2.57,5.71 -5.71,5.71l-44.85 0c-3.13,0 -5.7,-2.57 -5.7,-5.71l0 -30.52c0,-3.14 2.57,-5.71 5.7,-5.71l44.85 0c3.14,0 5.71,2.57 5.71,5.71zm0 -70.09l0 30.52c0,3.14 -2.57,5.71 -5.71,5.71l-44.85 0c-3.13,0 -5.7,-2.57 -5.7,-5.71l0 -30.52c0,-3.14 2.57,-5.71 5.7,-5.71l44.85 0c3.14,0 5.71,2.57 5.71,5.71zm0 -70.09l0 30.52c0,3.14 -2.57,5.71 -5.71,5.71l-44.85 0c-3.13,0 -5.7,-2.57 -5.7,-5.71l0 -30.52c0,-3.14 2.57,-5.71 5.7,-5.71l44.85 0c3.14,0 5.71,2.57 5.71,5.71zm-166.13 374.81l30.52 0c3.14,0 5.71,-2.57 5.71,-5.71l0 -44.84c0,-3.14 -2.57,-5.71 -5.71,-5.71l-30.52 0c-3.14,0 -5.71,2.57 -5.71,5.71l0 44.84c0,3.14 2.57,5.71 5.71,5.71zm-70.08 0l30.52 0c3.14,0 5.7,-2.57 5.7,-5.71l0 -44.84c0,-3.14 -2.56,-5.71 -5.7,-5.71l-30.52 0c-3.14,0 -5.71,2.57 -5.71,5.71l0 44.84c0,3.14 2.57,5.71 5.71,5.71zm-70.09 0l30.52 0c3.13,0 5.7,-2.57 5.7,-5.71l0 -44.84c0,-3.14 -2.57,-5.71 -5.7,-5.71l-30.52 0c-3.14,0 -5.71,2.57 -5.71,5.71l0 44.84c0,3.14 2.57,5.71 5.71,5.71zm-70.09 0l30.52 0c3.14,0 5.7,-2.57 5.7,-5.71l0 -44.84c0,-3.14 -2.56,-5.71 -5.7,-5.71l-30.52 0c-3.14,0 -5.71,2.57 -5.71,5.71l0 44.84c0,3.14 2.57,5.71 5.71,5.71zm210.26 -508.84l30.52 0c3.14,0 5.71,2.57 5.71,5.71l0 44.85c0,3.13 -2.57,5.7 -5.71,5.7l-30.52 0c-3.14,0 -5.71,-2.57 -5.71,-5.7l0 -44.85c0,-3.14 2.57,-5.71 5.71,-5.71zm-70.08 0l30.52 0c3.14,0 5.7,2.57 5.7,5.71l0 44.85c0,3.13 -2.56,5.7 -5.7,5.7l-30.52 0c-3.14,0 -5.71,-2.57 -5.71,-5.7l0 -44.85c0,-3.14 2.57,-5.71 5.71,-5.71zm-70.09 0l30.52 0c3.13,0 5.7,2.57 5.7,5.71l0 44.85c0,3.13 -2.57,5.7 -5.7,5.7l-30.52 0c-3.14,0 -5.71,-2.57 -5.71,-5.7l0 -44.85c0,-3.14 2.57,-5.71 5.71,-5.71zm-70.09 0l30.52 0c3.14,0 5.7,2.57 5.7,5.71l0 44.85c0,3.13 -2.56,5.7 -5.7,5.7l-30.52 0c-3.14,0 -5.71,-2.57 -5.71,-5.7l0 -44.85c0,-3.14 2.57,-5.71 5.71,-5.71z'
                />
            </g>
        </svg>
    );
}
