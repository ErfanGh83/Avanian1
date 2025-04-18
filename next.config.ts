// next.config.js
module.exports = {
  output: "export", // فعال‌سازی خروجی استاتیک (Static HTML Export)
  distDir: "dist", // پوشه‌ی خروجی build به جای `.next`
  images: {
    domains: ["img.freepik.com", "static.vecteezy.com", "wallpapers.com"],
    unoptimized: true, // نیاز است اگر از `output: 'export'` استفاده می‌کنید
  },
};
