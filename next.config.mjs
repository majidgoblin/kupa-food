/** @type {import('next').NextConfig} */

import widthPwa from 'next-pwa'

const withPWAInit = widthPwa({
    dest: 'public',
    register:true,
})


const nextConfig = {};



export default withPWAInit(nextConfig);
