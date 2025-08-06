// !!註: 無法使用static/images/圖片.img 。目前只能使用外部圖片。原因不明無法解決。

export const useProjects = () => {
    const projects = ref([
        {
            title: '家具電商',
            desc: '使用 js、C3、api購物車包含前後台。',
            image:'https://raw.githubusercontent.com/tsa206531/OverTask25/refs/heads/main/img/woworoom%E5%89%8D%E5%8F%B0.jpg',
            link: 'https://woworoom-yl-chens-projects.vercel.app/'
          },
          {
            title: '前端開發Blog',
            desc: 'bootstrap5 、 RWD ',
            image: 'https://raw.githubusercontent.com/tsa206531/OverTask25/refs/heads/main/img/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BCBlog.jpg',
            link: 'https://over-task25.vercel.app/'
          },
          {
            title: 'tailwindcss卡片切版練習',
            desc: 'tailwindcss、RWD。 (2024)',
            image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/work-image1.png',
            link: 'https://codepen.io/EY-chen/full/bGJPWGw'
          },
          {
            title: 'Bst5 格線練習',
            desc: '使用bootstrap5 row、col 建立表單。 (2023)',
            image: 'https://raw.githubusercontent.com/tsa206531/OverTask25/refs/heads/main/img/BT5%E6%A0%BC%E7%B7%9A%E7%B7%B4%E7%BF%92(2023).jpg',
            link: 'https://codepen.io/EY-chen/full/yLQmeRG'
          },
          {
            title: '甜點電商切版練習',
            desc: '使用 Html 、 Css 製作的甜點首頁練習。(2022)',
            image:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/banner.png',
            link: 'https://codepen.io/EY-chen/full/vYdRByx'
          },
          {
            title: 'Vue3顯示練習',
            desc: 'Vue3 bootstrap5 RWD (2022)',
            image: 'https://raw.githubusercontent.com/tsa206531/OverTask25/refs/heads/main/img/Vue3%E9%9B%BB%E5%95%86%E5%BE%8C%E5%8F%B0%E9%A1%AF%E7%A4%BA%E7%B7%B4%E7%BF%92.jpg',
            link: 'https://codepen.io/EY-chen/full/ZEjKzeQ'
          },
          {
            title: '家具電商前台練習',
            desc: 'JavaScript、todolist、Cart、CartList。(2022)',
            image: 'https://raw.githubusercontent.com/tsa206531/OverTask25/refs/heads/main/img/API_JS%E8%B3%BC%E7%89%A9%E8%BB%8A%E7%B7%B4%E7%BF%92.jpg',
            link: 'https://codepen.io/EY-chen/full/QWxZbKK'
          },
          {
            title: '景點收尋器',
            desc: 'Vue3、AJAX、Bs5、GoogleMap',
            image: 'https://raw.githubusercontent.com/tsa206531/OverTask25/refs/heads/main/img/%E6%99%AF%E9%BB%9E%E6%94%B6%E5%B0%8B%E5%99%A8.jpg',
            link: 'https://codepen.io/EY-chen/full/ZYErLEQ'
          },
          {
            title: '卡片切版練習',
            desc: 'Html、Css。 (2023)',
            image: 'https://raw.githubusercontent.com/tsa206531/OverTask25/refs/heads/main/img/2023AI%E5%B7%A5%E5%85%B7%E7%8E%8B%E5%88%87%E7%89%88%E7%B7%B4%E7%BF%92.jpg',
            link: 'https://codepen.io/EY-chen/full/OJBBRXd'
          },
          {
            title: '旅行社後台',
            desc: 'JavaScript、C3',
            image: 'https://raw.githubusercontent.com/tsa206531/OverTask25/refs/heads/main/img/%E6%97%85%E9%81%8A%E5%BE%8C%E5%8F%B0C3.jpg',
            link: 'https://codepen.io/EY-chen/full/poKdYGZ'
          },
          {
            title: '個人動態履歷',
            desc: '使用 bootstrap5 + JQuery 製作動態效果。 (2023)',
            image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2023week1/vito.png',
            link: 'https://codepen.io/EY-chen/full/PoXZwJy'
          },
          {
            title: '即時匯率查詢',
            desc: '查詢最新匯率的前端應用。',
            image: 'https://placehold.co/400x200?text=Currency',
            link: '#'
          }
        ]
        

    )
  
    return { projects }
  }