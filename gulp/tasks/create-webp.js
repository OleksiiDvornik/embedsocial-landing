import webp from 'gulp-webp';

const createWebp = () => {
  return app.gulp.src(app.paths.images.src)
    .pipe(webp({
      quality: 90,
    }))
    .pipe(app.gulp.dest(app.paths.images.dest))
}

export default createWebp;
