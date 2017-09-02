
const srcAssets  = 'src/assets',
      devAssets  = 'dev',
      distAssets = 'dist'

module.exports = {
  base: {
    srcAssets:  'src/assets',
    devAssets:  'dev',
    distAssets: 'dist'
  },
  pug: {
    src: [srcAssets + '/pug/*.pug', '!' + srcAssets + '/pug/_*.pug'],
    dev: devAssets + '/',
    dist: distAssets + '/'
  },
  stylus: {
    src: [srcAssets + '/stylus/*.styl', '!' + srcAssets + '/stylus/_*.styl'],
    dev: devAssets + '/stylesheets',
    dist: distAssets + '/stylesheets'
  },
  scripts: {
    src: srcAssets + '/scripts/*.js',
    dev: devAssets + '/javascripts',
    dist: distAssets + '/javascripts',
    options: {
      presets: ['env']
    }
  },
  watch: {
    pug:     srcAssets + '/pug/**/*.pug',
    stylus:  srcAssets + '/stylus/**/*.styl',
    scripts: srcAssets + '/scripts/**/*.js',
    images:  srcAssets + '/images/**/*.{jpg,png,svg,gif}'
  }
}