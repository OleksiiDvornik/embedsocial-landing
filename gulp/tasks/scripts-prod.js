// Plugin imports
import babel from 'gulp-babel';
import uglify from  'gulp-uglify';
import rename from 'gulp-rename';
import size from 'gulp-size';

// Task

const scriptsProd = () => {
  return app.gulp.src(app.paths.scripts.src)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(size())
    .pipe(app.gulp.dest(app.paths.scripts.dest))
}

export default scriptsProd;
