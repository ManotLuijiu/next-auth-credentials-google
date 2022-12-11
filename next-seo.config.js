const NextSEO = {
  title: 'OnBBQ หมูกระทะ ชาบู',
  titleTemplate: '%s | OnBBQ',
  description: 'OnBBQ หมูกระทะ ชาบู ตักเอง ซื้อกลับบ้าน หรือนั่งกินที่ร้าน',
  favicon: '/favicon.ico',
  additionalMetaTags: [
    {
      property: 'author',
      content: 'Manot L.',
    },
    {
      property: 'keywords',
      content:
        'หมูกระทะ, ชาบู, หมูกระทะชั่งโล, ร้านหมูกระทะ, จิ้มจุ่ม, หมูสไลด์',
    },
  ],
  // "twitter": {
  //   "cardType": "summary",
  //   "handle": "OnBBQ",
  //   "site": "OnBBQ"
  // },
  openGraph: {
    type: 'website',
    site_name: 'OnBBQ',
    profile: {
      firstName: 'Jilaporn',
    },
    images: [
      {
        url: '/images/og.jpg',
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default NextSEO;
