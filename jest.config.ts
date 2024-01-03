module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/**/*.{ts,tsx}',
    '!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}',
    '!src/theme/**',
    '!src/declarations.d.ts',
    '!src/utils/constant.tsx',
    '!src/App.tsx',
    '!src/index.tsx',
    '!src/store/**',
    '!src/services/**',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-stub',
    '^.+\\.png$': 'jest-transform-stub',
    '^.+\\.(ts|tsx)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '^.+\\.(svg|gif)$': 'jest-svg-transformer',
    '\\.(css)$': 'identity-obj-proxy',
    '^.+\\.(ts|tsx)$': 'jest-transform-stub',
  },
}
