let prefix = "/api/";
//代理访问的地址
export default {
    //代理访问的地址的响应的路径
    getCity : prefix + "getCitiesInfo",

    getNowPlaying :prefix + "getNowPlayingFilmList",

    getComingSoon: prefix + "getComingSoonFilmList",
};