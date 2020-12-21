import films from '@/views/films/films'
import ComingSoon from '@/views/films/comingSoon'
import NowPlaying from '@/views/films/nowPlaying'
import Datail from '@/views/films/Datail'

const filmsRouter =[
    {path:'/films', component:films,redirect:"/films/nowPlaying",children:[
        {path:'nowPlaying', component:NowPlaying},
        {path:'comingSoon', component:ComingSoon},
    ]},
    {path:'/film/:filmId' , component:Datail},
]

export default filmsRouter;