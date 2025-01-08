/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'spencer@spwoo.onmicrosoft.com',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: '/icons/logo.png',

  // Prefix for KV Storage
  kvPrefix: process.env.KV_PREFIX || '',

  // The name of your website. Present alongside your icon.
  title: "Elysian's Academic Bank (Past Papers, Notes, etc.)",

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: '/Elysian',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 100,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: 'Inter',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: 'Fira Mono',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer: [
    '<b>"And that there is not for man except that [good] for which he strives."</b><br> - Surah An-Najm, Ayah 39',
    '<b>"Indeed, Allah will not change the condition of a people until they change what is in themselves."</b><br> - Surah Ar-Ra\'d, Ayah 11',
    '<b>"<i>And whoever strives only strives for [the benefit of] himself.</i> Indeed, Allah is free from need of the worlds."</b><br> - Surah Al-Ankabut, Ayah 6',
    '<b>"And whoever fears Allah – He will make for him a way out and provide for him from where he does not expect."</b><br> - Surah At-Talaq, Ayah 2-3',
    '<b>"And rely upon Allah; and sufficient is Allah as Disposer of affairs."</b><br> - Surah Al-Ahzab, Ayah 3',
    '<b>"Indeed, with hardship comes ease."</b><br> - Surah Ash-Sharh, Ayah 6',
    '<b>"So be patient. Indeed, the promise of Allah is truth."</b><br> - Surah Ar-Rum, Ayah 60',
    '<b>"And say, \'Do [as you will], for Allah will see your deeds, and [so will] His Messenger and the believers.\'"</b><br> - Surah At-Tawbah, Ayah 105',
    '<b>"And whoever relies upon Allah – then He is sufficient for him."</b><br> - Surah At-Talaq, Ayah 3',
    '<b>"Indeed, Allah loves those who rely upon Him."</b><br> - Surah Aal-e-Imran, Ayah 159',
    '<b>"Verily, Allah does not let the reward of the doers of good go to waste."</b><br> - Surah Yusuf, Ayah 90',
    '<b>"And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient."</b><br> - Surah Al-Baqarah, Ayah 155',
    '<b>"The strong believer is better and more beloved to Allah than the weak believer, while there is good in both. Strive for that which will benefit you, seek the help of Allah, and do not feel helpless."</b><br> - Sahih Muslim 2664',
    '<b>"Whoever works righteousness – whether male or female – while being a believer, We will surely cause him to live a good life."</b><br> - Surah An-Nahl, Ayah 97',
    '<b>"So whoever does an atom’s weight of good will see it."</b><br> - Surah Az-Zalzalah, Ayah 7',
    '<b>"Indeed, Allah does not wrong the people at all, but it is the people who are wronging themselves."</b><br> - Surah Yunus, Ayah 44',
    '<b>"And those who strive for Us – We will surely guide them to Our ways."</b><br> - Surah Al-Ankabut, Ayah 69',
    '<b>"No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim, even if it were the prick he receives from a thorn, but that Allah expiates some of his sins for it."</b><br> - Sahih Bukhari 5641',
    '<b>"If you give thanks, I will surely increase you [in favor]."</b><br> - Surah Ibrahim, Ayah 7',
    '<b>"And [He] created man and taught him eloquence. The sun and the moon [move] by precise calculation."</b><br> - Surah Ar-Rahman, Ayah 3-5',
  ],

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: ['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route'],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: 'mailto:hakimifirdaus944@gmail.com',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/elysiankukla/past-papers-index',
    },
  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'DD-MM-YYYY HH:mm:ss',
}
