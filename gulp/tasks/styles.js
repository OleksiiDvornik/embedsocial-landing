// Core
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemap from 'gulp-sourcemaps';

// Configuration
const sass = gulpSass(dartSass);

// Task
const styles = () => {
  return app.gulp.src(app.paths.styles.src)
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemap.write("."))
    .pipe(app.gulp.dest(app.paths.styles.dest))
    .pipe(app.watcher.stream())
};

export default styles;
