module.exports = {
    // 页头
    title: '博客',
    // meta 描述
    description: '博客',
    // base 路径，基于 gitHubPage: *.io/study-blog/ 二级目录
    base: '/study-blog/',
    // 标签
    head: [
        // 浏览器 tab logo 展示
        ['link', {rel: 'shortcut icon', href: '/logo.png'}]
    ],
    // 导航栏配置
    themeConfig: {
        // 导航栏 logo
        logo: '/logo.png',
        // 菜单配置
        nav: [
            {
                text: '博文',
                link: '/blogs/'
            },
            {
                text: 'GitHub',
                link: '',
                target: '_blank'
            }
        ],
        // 侧边导航栏配置
        sidebar: {
            '/blogs/': [
                {
                    title: '第一篇博文',
                    path: '/blogs/',
                },
            ]
        }
    },
}
