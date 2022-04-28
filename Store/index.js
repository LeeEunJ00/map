export const state = () => ({
  articles: require('@/data/articles.json'), 
  drawer: false,
    items: [
      {
        text: 'products',
        hrefs: '/products'
      },
      {
        text:'News',
        href: '/news'
      },
      {
        text: 'Support',
        href: '/support',
      },      {
        text: 'login',
        href: '/login',
      },
     
    ],
});
