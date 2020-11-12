
const { getProjectPath, cssInjection } = require('./util/projectHelper')
const transformLess = require('./util/transformLess')

const path = require('path')
const through2 = require('through2')
const gulp = require('gulp')
const rename = require('gulp-rename')
const destDir = getProjectPath('dist')
const babel = require("gulp-babel")
process.env.PROJECT = process.argv[process.argv.length - 1]
if ('build/build-project.js' === process.env.PROJECT || process.env.PROJECT.substr(0,2) !== '--') {
    throw new Error('请指定projectName. e.g.: npm run porject -- --projectName');
}
process.env.PROJECT = process.env.PROJECT.substr(2)
const projectDestDir = getProjectPath(`../../${process.env.PROJECT}/src/components/iview`)

gulp.task('compile-css', done => {
  return gulp
    .src(['../src/**/*.less'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        this.push(file.clone())
        if (file.path.match(/(\/|\\)style(\/|\\)(.*)\.less$/)
          || file.path.match(/(\/|\\)style\.less$/)
        ) {
          transformLess(file.path)
            .then(css => {
              file.contents = Buffer.from(css)
              file.path = file.path.replace(/\.less$/, '.css')
              this.push(file)
              next()
            })
            .catch(e => {
              console.error(e)
            })
        }
        else {
          next()
        }
      })
    )
    .pipe(gulp.dest(destDir))
    .pipe(gulp.dest(projectDestDir))
    .pipe(rename({basename: 'iview'}))
    .pipe(gulp.dest(path.join(projectDestDir, '../../../static/css')))
})

gulp.task('compile-js', () => {
  return gulp
    .src(['../src/**/*.js'])
    .pipe(babel({
      "plugins": ["@babel/plugin-proposal-object-rest-spread"],
      "presets": [
        "@babel/preset-env"
      ]
    }))
    .pipe(
      through2.obj(function (file, encoding, next) {
        this.push(file.clone())
        if (
          file.path.match(/(\/|\\)style(\/|\\)index\.js/)
        ) {
          const content = file.contents.toString(encoding)
          file.contents = Buffer.from(cssInjection(content))
          file.path = file.path.replace(/index\.js/, 'css.js')
          this.push(file)
          next()
        }
        else {
          next()
        }
      })
    )
    .pipe(gulp.dest(destDir))
    .pipe(gulp.dest(projectDestDir))
})

gulp.task('copy-static', () => {
  return gulp
    .src(['../assets/**/*.@(png|svg|jpg)'])
    .pipe(gulp.dest(path.join(destDir, 'assets')))
    .pipe(gulp.dest(path.join(projectDestDir, 'assets')))
})

gulp.task('copy-vue', () => {
  return gulp
    .src(['../src/components/**/*.vue'])
    .pipe(gulp.dest(path.join(destDir, 'components')))
    .pipe(gulp.dest(path.join(projectDestDir, 'components')))
})

gulp.task('auto', () => {
  gulp.watch('../src/**/*.js', gulp.series('compile-js'))
  gulp.watch('../assets/**/*.@(png|svg|jpg)', gulp.series('copy-static'))
  gulp.watch('../src/components/**/*.vue', gulp.series('copy-vue'))
  gulp.watch('../src/**/*.less', gulp.series('compile-css'))
})

gulp.task('dev', gulp.series('compile-css', 'compile-js', 'copy-vue','copy-static', 'auto'))

gulp.task('default', gulp.series('compile-css', 'compile-js', 'copy-vue','copy-static'))
