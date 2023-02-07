// Core
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

// Task

const optimizeImages = () => {
  return app.gulp.src(app.paths.images.src)
    .pipe(imagemin([
      imageminMozjpeg({quality: 90, progressive: true}),
	    imageminPngquant({quality: [0.6, 0.8]}),
    ], {
      verbose: true
    }))
    .pipe(app.gulp.dest(app.paths.images.dest))
}

export default optimizeImages;
