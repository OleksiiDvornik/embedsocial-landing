export const paths = {
  html: {
    src: './app/html/*.html',
    dest: './app',
    watch: './app/html/parts/*.html',
  },
  styles: {
    src: './app/scss/**/*.scss',
    dest: './app/css/',
  },
  images: {
    src: './app/img/temp/**/*.+(jpg|png)',
    dest: './app/img/'
  }
};
