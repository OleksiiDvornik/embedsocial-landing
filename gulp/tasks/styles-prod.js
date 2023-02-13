// Plugin imports

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
import mediaQueries from 'gulp-group-css-media-queries';
import rename from 'gulp-rename';
import size from 'gulp-size';

// Configuration
const sass = gulpSass(dartSass);

// Task

const stylesProd = () => {
  return app.gulp.src(app.paths.styles.src)
    .pipe(sass())
    .pipe(mediaQueries())
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(size())
    .pipe(app.gulp.dest(app.paths.styles.build))
}

export default stylesProd;
