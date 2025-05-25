export default function sitemap() {
    return [
      {
        url: 'https://kyoutuu.com',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://kyoutuu.com/dashboard',
        lastModified: new Date('2025-05-26'),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://kyoutuu.com/policy',
        lastModified: new Date('2025-05-26'),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: 'https://kyoutuu.com/kiyaku',
        lastModified: new Date('2025-05-26'),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: 'https://kyoutuu.com/tokushoho',
        lastModified: new Date('2025-05-26'),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      // 他のページも追加
    ]
  }