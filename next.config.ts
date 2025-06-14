import type { NextConfig } from "next";
const path = require('path');
const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
        additionalData: `@import "variables"; @import "animations";`,
    },
};

export default nextConfig;
