const gulp = require('gulp')

const pug    = require('gulp-pug')
const babel  = require('gulp-babel')
const stylus = require('gulp-stylus')
  const nib  = require('nib')
  const jeet = require('jeet')

// const gulpif  = require('gulp-if')
const watch   = require('gulp-watch')
const plumber = require('gulp-plumber')

const del         = require('del')
const browserSync = require('browser-sync')
const runSequence = require('run-sequence')

// Global Variables & Objects

const config = require('./config.js')

const {srcAssets, devAssets} = config.base

// Tasks for base

gulp.task('pug', () => {

  const {src, dev} = config.pug

  return gulp.src(src)
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest(dev))
})

gulp.task('stylus', () => {

  const {src, dev} = config.stylus

  return gulp.src(src)
    .pipe(plumber())
    .pipe(stylus({/*'include css': true,*/ use: [nib(), jeet()]}))
    .pipe(gulp.dest(dev))
})

gulp.task('scripts', () => {

  const {src, dev} = config.scripts

  return gulp.src(src)
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest(dev))
})

gulp.task('images', () => {

  const {src, dev} = config.images

  return gulp.src(src)
    .pipe(plumber())
    .pipe(gulp.dest(dev))
})

gulp.task('lib', () => {

  const {src, dev} = config.lib

  return gulp.src(src)
    .pipe(plumber())
    .pipe(gulp.dest(dev))
})

// Tasks for dev

gulp.task('clean', () => { return del([devAssets + '/*']) })

gulp.task('build', (cb) => {
  runSequence(
    'clean',
    ['stylus', 'scripts', 'images', 'lib'],
    'pug',
    cb)
})

gulp.task('bs', ['build'], () => {
  browserSync.init({
    server: {
      baseDir: devAssets
    },
    files: devAssets
  })
})

gulp.task('watch', ['bs'], () => {

  const {pug, stylus, scripts, images, lib} = config.watch

  gulp.watch(pug, ['pug'])
  gulp.watch(stylus, ['stylus'])
  gulp.watch(scripts, ['scripts'])
  gulp.watch(images, ['images'])
  gulp.watch(lib, ['lib'])
})
