import Vue from "vue";
import Router from "vue-router";
import qrbarcont from "./views/contents";
import jbcode from "./components/jbcode";
import textqrcode from "./components/textqrcode";
import wifiqrcode from "./components/wifiqrcode";
import jb1code from "./components/jb1code";
import chatqrcode from "./components/chatqrcode";
import qrcode from "./components/qrcode";
import welcome from "./components/welcome";


Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/code',
            component: qrbarcont,
        },
        {
            path: '/code',
            //name: 'contents',同页面双路由时使用name指定
            component: qrbarcont,
            redirect: '/code/jba', //重定向
            children: [{
                    path: 'bar',
                    component: jbcode
                }, {
                    path: 'text',
                    component: textqrcode
                },
                {
                    path: 'link',
                    component: wifiqrcode
                },
                {
                    path: 'jba',
                    component: jb1code
                },
                {
                    path: 'chat',
                    component: chatqrcode
                }, {
                    path: 'mail',
                    component: qrcode
                }
            ],

        }, {
            path: '/about',
            component: welcome,
        },
        //{ path: '/', components: { viewbody: jbcode, sidebar: leftlist } },
    ]
});