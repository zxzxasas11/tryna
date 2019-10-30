export default ({ app }) => {
    /*app.router.beforeEach((to, from, next) => {
        next();
        return;
        if (to.meta.requireAuth) {
            store.dispatch("setRouterTo", to.path);
            //判断是否登录
            if (!localStorage.getItem("token")) {
                store.dispatch("setLoginVisible");
                //router.push("/Home");
            } else {    //已经登录
                /!*if(to.meta.needAdmin){
                  if(store.getters.getToken.userId!=='1'&&store.getters.getToken.userId!=="f101127bf8d74d8e9762bb7439423463"){
                    router.push("/Home");
                  }
                  else{
                    next();
                  }
                }*!/
                //else{
                next();
                //}

            }
        } else {
            next();
        }

    });*/
}

