/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content2.mcqstudy.com',
      },
      {
        protocol: 'https',
        hostname: 'server3.mcqstudy.com',
      },
    ],
  },
  compiler: {
    reactRemoveProperties: true, // Optional: Ensures unused properties are removed
  },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'content2.mcqstudy.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'server3.mcqstudy.com',
//       },
//     ],
//   },
//   compiler: {
//     reactRemoveProperties: true, // Optional: Ensures unused properties are removed
//   },
//   async headers() {
//     return [
//       {
//         source: '/(.*)', // Apply CORS headers globally to all routes
//         headers: [
//           {
//             key: 'Access-Control-Allow-Origin',
//             value: '*', // Allow this origin
//           },
//           {
//             key: 'Access-Control-Allow-Methods',
//             value: 'GET, POST, PUT, DELETE', // Allow these HTTP methods
//           },
//           {
//             key: 'Access-Control-Allow-Headers',
//             value: 'Content-Type, Authorization', // Allow these headers
//           },
//         ],
//       },
//     ];
//   },
//   async rewrites() {
//     return [
//       {
//         // Rewriting all requests that start with /api to be proxied to the backend server
//         source: '/api/:path*', // This matches any route under /api
//         destination: 'https://english-welsh.net/api/:path*', // This is where you want to proxy the request
//       },
//     ];
//   },
// };

// export default nextConfig;
