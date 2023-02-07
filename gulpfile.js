// Core
import gulp from 'gulp';
import browserSync from 'browser-sync';

// Tasks
import styles from './gulp/tasks/styles.js';
import html from './gulp/tasks/html.js';
import imagemin from './gulp/tasks/imagemin.js';
import createAvif from './gulp/tasks/create-avif.js';
import createWebp from './gulp/tasks/create-webp.js';

// Configuration
import { paths } from './gulp/config/paths.js';

global.app = {
  paths: paths,
  gulp: gulp,
  watcher: browserSync,
}

// File changes watcher

browserSync.create();

const watch = () => {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
  app.gulp.watch(app.paths.html.dest).on('change', browserSync.reload);
  app.gulp.watch(app.paths.styles.src, styles);
  app.gulp.watch(app.paths.html.src, html);
  app.gulp.watch(app.paths.html.watch, html);
};

export const images = gulp.series(createWebp, createAvif, imagemin);
export default gulp.parallel(styles, html, watch);
