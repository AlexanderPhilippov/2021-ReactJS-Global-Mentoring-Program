import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
    return {
        displayName: 'Test',
        transform: {
            '\\.(js|ts|jsx|tsx)$': 'ts-jest',
            '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|webmanifest|xml|scss)$':
                'jest-transform-stub',
        },
        moduleNameMapper: {
            '\\.(css)$': 'identity-obj-proxy',
        },
        moduleDirectories: ['node_modules', 'src'],
        testPathIgnorePatterns: ['cypress'],
    }
}
