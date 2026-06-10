var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var PhotoFilmMusic_exports = {};
__export(PhotoFilmMusic_exports, {
  default: () => PhotoFilmMusic_default
});
module.exports = __toCommonJS(PhotoFilmMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhotoFilmMusicRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 112C272 129.672 286.328 144 304 144C321.678 144 336.002 129.672 336.002 112S321.678 80 304 80C286.328 80 272 94.328 272 112ZM160 400V112H64C28.654 112 0 140.654 0 176V384C0 419.346 28.654 448 64 448H289.973C294.619 428.244 307.785 411.467 326.203 400H160ZM112 400H64C55.178 400 48 392.822 48 384V352H112V400ZM112 304H48V256H112V304ZM112 208H48V176C48 167.178 55.178 160 64 160H112V208ZM576 0H256C220.652 0 192 28.652 192 64V256C192 291.346 220.652 320 256 320H368V245.344C368 224.641 381.203 206.344 400.844 199.812L503.637 165.539L466.65 111.125C463.682 106.672 458.686 104 453.338 104C447.986 104 442.99 106.672 440.025 111.125L377.281 205.234L354.93 174.574C351.914 170.441 347.109 168 341.998 168C336.889 168 332.084 170.441 329.068 174.574L256 272C247.178 272 240 264.822 240 256V64C240 55.178 247.178 48 256 48H576C584.822 48 592 55.178 592 64V136.074L608.812 130.469C613.75 128.828 618.859 128 624.016 128C629.646 128 634.975 129.154 640 130.945V64C640 28.652 611.348 0 576 0ZM618.941 160.834L410.941 230.166C404.408 232.344 400 238.459 400 245.346V417.697C394.857 416.699 389.559 416 384 416C348.654 416 320 437.49 320 464S348.654 512 384 512C419.348 512 448 490.51 448 464V319L592 271V353.697C586.857 352.699 581.559 352 576 352C540.654 352 512 373.49 512 400S540.654 448 576 448C611.348 448 640 426.51 640 400V176.012C640 165.092 629.301 157.379 618.941 160.834Z" })
  }
));
PhotoFilmMusicRegular.displayName = "PhotoFilmMusicRegular";
var PhotoFilmMusic_default = PhotoFilmMusicRegular;
