const gulp = require('gulp')

const watch = require('gulp-watch')

const pug    = require('gulp-pug')
const babel  = require('gulp-babel')
const stylus = require('gulp-stylus')

const del         = require('del')
const browserSync = require('browser-sync')

// Global Variables & Objects

const config = require('./config.js')

const {srcAssets, devAssets} = config.base

// Tasks

gulp.task('pug', () => {

  const {src, dev} = config.pug

  return gulp.src(src)
    .pipe(pug())
    .pipe(gulp.dest(dev))
})

gulp.task('stylus', () => {

  const {src, dev} = config.stylus

  return gulp.src(src)
    .pipe(stylus())
    .pipe(gulp.dest(dev))
})

gulp.task('scripts', () => {

  const {src, dev} = config.scripts

  return gulp.src(src)
    .pipe(babel())
    .pipe(gulp.dest(dev))
})

gulp.task('clean', () => { del([devAssets + '/*']) })

gulp.task('build', ['clean', 'pug', 'stylus', 'scripts'])

gulp.task('bs', ['build'], () => {
  browserSync.init({
    server: {
      baseDir: devAssets
    },
    files: devAssets
  })
})

gulp.task('watch', ['bs'], () => {

  const {pug, stylus, scripts, images} = config.watch

  gulp.watch(pug, ['pug'])
  gulp.watch(stylus, ['stylus'])
  gulp.watch(scripts, ['scripts'])
  gulp.watch(images, ['images'])
})
