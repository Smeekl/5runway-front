module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.svg$': 'identity-obj-proxy',
    '\\.css$': 'identity-obj-proxy',
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@services/(.*)$": "<rootDir>/src/core/services/$1",
    "^@svgIcons/(.*)$": "<rootDir>/src/assets/svgIcons/$1",
    "^@composed-components/(.*)$": "<rootDir>/src/composed-components/$1",
    "^@componentTypes$": "<rootDir>/src/components/types",
    "^@composedComponentTypes$": "<rootDir>/src/composed-components/types",
    "^@serviceTypes$": "<rootDir>/src/core/services/types",
    "^@routers/(.*)$": "<rootDir>/src/routers/$1",
    "^@layouts/(.*)$": "<rootDir>/src/layouts/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@schemas$": "<rootDir>/src/core/schemas",
    "^@constants$": "<rootDir>/src/core/constants",
    "^@providers/(.*)$": "<rootDir>/src/providers/$1",
    "^@mocks/(.*)$": "<rootDir>/src/core/mocks/$1",
    "^@hooks/(.*)$": "<rootDir>/src/core/hooks/$1",
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
