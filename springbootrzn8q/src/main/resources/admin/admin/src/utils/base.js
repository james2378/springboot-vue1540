const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootrzn8q/",
            name: "springbootrzn8q",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootrzn8q/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Layui和SpringBoot动漫商城管理的设计与实现"
        } 
    }
}
export default base
