export function setupMockPlugin(isBuild:boolean){
    return  viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
      }),
}