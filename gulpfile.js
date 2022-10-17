const { src } = require('gulp');
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify'),
    webpack = require('gulp-webpack'),
    htmlmin = require('gulp-htmlmin')

gulp.task('cssCode', function () {
    return gulp.src('app/css/**/*.css')
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true,
            online: true
        }))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        open: false,
        notify: false
    });
});

gulp.task('scripts', function () {
    return gulp.src('app/libs/*.js')
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('code', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});
gulp.task('css-libs', function () {
    return gulp.src([
        'app/css/main.css',
        'app/css/fonts.css'
    ])
        .pipe(concat('style.css'))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('clean', async function () {
    return del.sync('public');
});

gulp.task('prebuild', async function () {

    var buildCss = gulp.src([
        'app/css/style.min.css'
    ])
        .pipe(gulp.dest('public/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('public/fonts'))
    var buildImg = gulp.src('app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'))

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('public/js'))

    var buildHtml = gulp.src('app/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
})

gulp.task('watch', function () {
    gulp.watch('app/css/**/*.css', gulp.parallel('css-libs'));
    gulp.watch('app/*.html', gulp.parallel('code'));
});
gulp.task('d', gulp.parallel('css-libs', 'scripts', 'browser-sync', 'watch'));
// gulp.task('default', gulp.parallel('css-libs', 'htaccess', 'browser-sync', 'watch'));
gulp.task('build', gulp.parallel('prebuild', 'clean', 'cssCode', 'scripts'));
