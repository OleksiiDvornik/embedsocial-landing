export const paths = {
  html: {
    src: './app/html/*.html',
    dest: './app',
    watch: './app/html/parts/*.html',
  },
  styles: {
    src: './app/scss/**/*.scss',
    dest: './app/css/',
    build: './dist/css/'
  },
  scripts: {
    src: './app/scripts/*.js',
    dest: './dist/scripts/'
  },
  images: {
    src: './app/img/temp/**/*.+(jpg|png)',
    dest: './app/img/'
  }
};
