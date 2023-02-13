export const rootCopy = () => {
  return app.gulp.src(['./app/*.*', '!./app/*.html'])
    .pipe(app.gulp.dest('./dist/'))
}

export const fontsCopy = () => {
  return app.gulp.src('./app/fonts/*.*')
    .pipe(app.gulp.dest('./dist/fonts/'))
}

export const imagesCopy = () => {
  return app.gulp.src(['./app/img/**/*.*', '!./app/img/temp/**/*'])
    .pipe(app.gulp.dest('./dist/img/'))
}

export const libsCopy = () => {
  return app.gulp.src('./app/libs/**/*')
    .pipe(app.gulp.dest('./dist/libs/'))
}
