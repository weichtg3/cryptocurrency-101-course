const config={
    title:'Cryptocurrency 101',
    tagline:'A practical, security-first beginner course',
    favicon:'img/favicon.svg',
    url:'https://weichtg3.github.io',
    baseUrl:'/cryptocurrency-101-course/',
    organizationName:'weichtg3',
    projectName:'cryptocurrency-101-course',
    onBrokenLinks:'throw',
    onBrokenMarkdownLinks:'warn',
    presets:[
        ['classic',{
            docs:{
                sidebarPath:require.resolve('./sidebars.js'),
                routeBasePath:'/'
            },
            blog:false,
            theme:{
                customCss:require.resolve('./src/css/custom.css')
            }
        }]
    ],
    themeConfig:{
        navbar:{
            title:'Cryptocurrency 101',
            items:[{href:'https://github.com/weichtg3/cryptocurrency-101-course',label:'GitHub',position:'right'}]
        },
        footer:{
            style:'dark',
            copyright:'Educational content only — not financial, legal, or tax advice.'
        }
    }
};

module.exports=config;
