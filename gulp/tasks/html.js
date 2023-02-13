// Plugin imports

import fileinclude from 'gulp-file-include';

// Configuration

// Task

const html = () => {
  return app.gulp.src(app.paths.html.src)
    .pipe(fileinclude())
    .pipe(app.gulp.dest(app.paths.html.dest))
    .pipe(app.watcher.stream())
}

export default html;
