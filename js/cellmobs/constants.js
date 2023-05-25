export const ENVIRONMENT = 'dev'
export const X_API_KEY = process.env.X_API_KEY || '644c243bd4dd6969fb98e4af' // You Cellmobs API Key
export const X_TENANTID = process.env.X_TENANTID || '644c240c69d66b5163a76a28' // Your Cellmobs Tenant ID
export const HOST_NAME = process.env.HOST_NAME || 'my-new-app.com'  // Your Application host
export const API_BASE_URL = process.env.API_BASE_URL || "https://my-new-app.web-dev.cellmobs.com/v1" // Your Cellmobs API host
export const CDN_BASE_URL = "https://cdn.cellmobs.com/"  // The Cellmobs public CDN
export const ADMIN_BASE_URL = process.env.ADMIN_BASE_URL || "https://my-new-app.console-dev.cellmobs.com"  // Your Cellmobs App Console host
export const RECAPTCHA_SITEKEY = process.env.RECAPTCHA_SITEKEY || "SITEKEY" // Your Google re-CAPTCHA site key
export const GOOGLE_API_CLIENT_ID = process.env.GOOGLE_API_CLIENT_ID || "" // Your Google API Client ID for Google Sign-In support
export const SUBSCRIPTION_PLAN_ID = process.env.SUBSCRIPTION_PLAN_ID || "646cb7c828a2997484c645e2" // The Cellmobs Subscription your app will use (Optional)
export const GOOGLE_MEASUREMENT_ID = process.env.GOOGLE_MEASUREMENT_ID || "MEASUREMENTID"  // Your Google Analytics Measurement ID
export const TINY_MCE_KEY = process.env.TINY_MCE_KEY || "mmvidmfyf6zu0gmbeyenmk74ufb0usbi3eui7egubsh12krf"  // Your TinyMCE key in case you want to support inline editing

