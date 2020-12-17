import films from '@/views/films/films'
import ComingSoon from '@/views/films/comingSoon'
import NowPlaying from '@/views/films/nowPlaying'

const filmsRouter = {path:'/films', component:films,redirect:"/Films/nowPlaying",children:[
    {path:'comingSoon', component:ComingSoon},
    {path:'nowPlaying', component:NowPlaying}
]}

export default filmsRouter;