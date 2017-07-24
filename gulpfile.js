const gulp = require('gulp');

gulp.task('build', function() {
  gulp.src('./node_modules/sc2-sdk/dist/sc2.min.js')
    .pipe(gulp.dest('public'));
});