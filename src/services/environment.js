export function isProduction() {
    return process.env.NODE_ENV === 'production';
};

export function getConfigName() {
    return isProduction() ? 'production' : 'development';
};
