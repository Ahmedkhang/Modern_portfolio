/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {protocol:"https",hostname:"assets.aceternity.com"},
            {protocol:"https",hostname:"images.unsplash.com"},
            {protocol:"https",hostname:"aceternity.com"},
            {protocol:"https",hostname:"cdn.jsdelivr.net"},
            
        ]
    }
};

export default nextConfig;