

describe('My Login application', async() => {
    it('should login with valid credentials', async () => {
        console.log('start')
        await driver.pause(3000)
        await driver.activateApp('FirstBlastIt')
        await element.click();
    })
})
