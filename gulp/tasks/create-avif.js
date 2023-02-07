import avif from 'gulp-avif';

const createAvif = () => {
  return app.gulp.src(app.paths.images.src)
    .pipe(avif({
      quality: 85,
    }))
    .pipe(app.gulp.dest(app.paths.images.dest))
}

export default createAvif;
