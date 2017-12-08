import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/Movie/movie'
// import MovieList from '@/components/movie/MovieList'
// import MovieDetail from '@/components/movie/MovieDetail'
// import Music from '@/components/music/Music'
// import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import PhotoList from '@/components/photo/PhotoList'
import PhotoDetail from '@/components/photo/PhotoDetail'
// import MusicList from '@/components/music/MusicList'
// import MusicAlbums from '@/components/music/MusicAlbums'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/movie',
      component: Movie
    }, {
      path: '/photo',
      component: Photo,
      children: [
        {
          path: 'photoList',
          component: PhotoList
        }, {
          path: 'photoDetail/:index',
          component: PhotoDetail
        }
      ]


    }
  ]
})
