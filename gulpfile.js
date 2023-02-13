// Plugins import
import gulp from 'gulp';
import browserSync from 'browser-sync';

// Tasks import
import styles from './gulp/tasks/styles.js';
import html from './gulp/tasks/html.js';
import imagemin from './gulp/tasks/imagemin.js';
import createAvif from './gulp/tasks/create-avif.js';
import createWebp from './gulp/tasks/create-webp.js';
import clean from './gulp/tasks/clean.js';
import { rootCopy, fontsCopy, imagesCopy, libsCopy } from './gulp/tasks/copy.js';
import htmlProd from './gulp/tasks/html-prod.js';
import stylesProd from './gulp/tasks/styles-prod.js';
import scriptsProd from './gulp/tasks/scripts-prod.js';

// Configuration
import { paths } from './gulp/config/paths.js';

global.app = {
  paths: paths,
  gulp: gulp,
  watcher: browserSync,
}

// Files changes watcher

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

// Independent tasks

export const images = gulp.series(createWebp, createAvif, imagemin);

// Development tasks

export default gulp.parallel(styles, html, watch);

// Production tasks

export const build = gulp.series(clean, rootCopy, fontsCopy, imagesCopy, libsCopy, htmlProd, stylesProd, scriptsProd);
