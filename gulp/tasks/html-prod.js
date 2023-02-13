// Plugin imports

import fileinclude from 'gulp-file-include';
import replace from 'gulp-replace';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';

// Task

const htmlProd = () => {
  return app.gulp.src('./app/html/*.html')
  .pipe(fileinclude())
  .pipe(replace('index.css', 'index.min.css'))
  .pipe(replace('index.js', 'index.min.js'))
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(size())
  .pipe(app.gulp.dest('dist'))
}

export default htmlProd;
