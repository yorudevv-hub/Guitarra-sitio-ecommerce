// variables
const {dest,series, src, watch} = require('gulp');
const sassCompiler = require ('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer').default; 




// functions compilar sass

function css(){
    return src("src/scss/**/*.scss")
    .pipe(sassCompiler())
    .pipe(autoprefixer())
    .pipe(dest("build/css"));
}

function dev(){
    watch('src/scss/**/*.scss', css)
}
// exportar tarea
exports.css = css;
exports.dev = series(css, dev);
exports.default = series(css, dev);

// function watch

