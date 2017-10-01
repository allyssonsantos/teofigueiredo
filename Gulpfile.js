var gulp        = require('gulp'),
    imageMin    = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    gutil       = require('gulp-util'),
    shell       = require('gulp-shell');

/**
 * Run build and server tasks
 */
gulp.task('default', ['build', 'server']);


/**
 * Minify all images and save on the same directory
 */
gulp.task('imagemin', () => gulp.src('./img_raw/*.jpg')
    .pipe(imageMin([
        imageMin.gifsicle({interlaced: true}),
        imageMin.jpegtran({progressive: true}),
        imageMin.optipng({optimizationLevel: 100}),
        imageMin.svgo({plugins: [{removeViewBox: false}]})
      ], {
        verbose: true,
        plugins: [imageMin.gifsicle(), imageMin.jpegtran(), imageMin.optipng()],
      }))
    .pipe(gulp.dest('./img/'))
    .on('end', () =>  gutil.log('Imagens foram minificadas'))
);

gulp.task('build', shell.task(['bundle exec jekyll serve']));

/**
 * BrowserSync, this will up a server and watch all files inside the src directory
 * when some file update, the browser will refresh automatic.
 * And have one watcher that watch the stylus files.
 */
gulp.task('server', () => {
  browserSync.init({server: {baseDir: '_site/'}});

  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});
