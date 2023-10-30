

describe('Register and Login into application', async() => {

    it('register into firstblast account', async () => {

        console.log('start')

        await driver.pause(3000)

        const app=await $('~FirstBlastIt')

        await app.click()

        await driver.pause(5000)

        const phoneButton= await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]')

        driver.waitUntil(phoneButton.waitForDisplayed)

        await phoneButton.click()

        const countryCode= await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[1]')

        driver.waitUntil(countryCode.waitForClickable)

        await countryCode.click()

        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText').setValue('INDIA')

        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]/android.widget.TextView[1]').click()

        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText').setValue('7904749236')

        await driver.hideKeyboard()

        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.CheckBox').click()

        const getOtp= await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]')

        driver.waitUntil(getOtp.waitForClickable)

        await getOtp.click()

        const verifyAndProceed= await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[4]')

        driver.waitUntil(verifyAndProceed.waitForClickable)

        await verifyAndProceed.click()

        await console.log("sucessfully login into firstblastit account")





})


})
