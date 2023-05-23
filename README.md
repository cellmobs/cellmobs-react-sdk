# cellmobs-react

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 
It provides the basic framework for developing Cellmobs clients using [React.js](https://reactjs.org/) and Next.js. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Configuration

There is a `constants.js` file here you can edit the default API and ADMIN hosts. 

```javascript

export const ENVIRONMENT = 'dev'
export const X_API_KEY = process.env.X_API_KEY || 'api-key' // You Cellmobs API Key
export const X_TENANTID = process.env.X_TENANTID || 'tenant-id' // Your Cellmobs Tenant ID
export const HOST_NAME = process.env.HOST_NAME || 'yourdomain.com'  // Your Application host
export const API_BASE_URL = process.env.API_BASE_URL || "https://app-name.web-dev.cellmobs.com/v1" // Your Cellmobs API host if app-name was the name of your app. 
export const CDN_BASE_URL = "https://cdn.cellmobs.com/"  // The Cellmobs public CDN 
export const ADMIN_BASE_URL = process.env.ADMIN_BASE_URL || "https://app-name.console-dev.cellmobs.com"  // Your Cellmobs App Console host
export const RECAPTCHA_SITEKEY = process.env.RECAPTCHA_SITEKEY || "SITEKEY" // Your Google re-CAPTCHA site key
export const GOOGLE_API_CLIENT_ID = process.env.GOOGLE_API_CLIENT_ID || "" // Your Google API Client ID for Google Sign-In support
export const SUBSCRIPTION_PLAN_ID = process.env.SUBSCRIPTION_PLAN_ID || "646cb7c828a2997484c645e2" // The Cellmobs Subscription your app will use (Optional)
export const GOOGLE_MEASUREMENT_ID = process.env.GOOGLE_MEASUREMENT_ID || "MEASUREMENTID"  // Your Google Analytics Measurement ID
export const TINY_MCE_KEY = process.env.TINY_MCE_KEY || "TINY-MCE-KEY"  // Your TinyMCE key in case you want to support inline editing

```
## Testing

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Cellmobs Docs](https://docs.cellmobs.com) - an Cellmobs Developer Documentation.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

For Cellmobs customer support [https://www.cellmobs.com/support](https://www.cellmobs.com/support) 

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on AWS EKS

Coming soon!
