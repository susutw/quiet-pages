// 網站設定：使用這個模板時，主要只需要改這個檔案。
export const site = {
  title: '無題',
  description: '一些字，一些照片。',
  author: '你的名字',
  lang: 'zh-Hant',
  // 所有日期時間都以這個時區顯示
  timeZone: 'Asia/Taipei',
  // 首頁顯示哪個分頁：'blog' | 'photos' | 'notes'
  home: 'blog' as 'blog' | 'photos' | 'notes',
  tabs: [
    { key: 'blog', label: '文章', href: '/blog/' },
    { key: 'photos', label: '圖文', href: '/photos/' },
    { key: 'notes', label: '短文', href: '/notes/' },
  ],
  footer: '',
};
