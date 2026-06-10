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
var PhotoFilm_exports = {};
__export(PhotoFilm_exports, {
  default: () => PhotoFilm_default
});
module.exports = __toCommonJS(PhotoFilm_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhotoFilmLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 120C301.256 120 312 109.254 312 96S301.256 72 288 72C274.746 72 264 82.746 264 96S274.746 120 288 120ZM576 0H256C220.654 0 192 28.654 192 64V288C192 323.346 220.654 352 256 352H576C611.348 352 640 323.346 640 288V64C640 28.654 611.348 0 576 0ZM608 288C608 305.645 593.645 320 576 320H256C238.355 320 224 305.645 224 288V64C224 46.355 238.355 32 256 32H576C593.645 32 608 46.355 608 64V288ZM474.586 107.91C463.305 92.098 436.088 91.973 424.588 107.879L380.559 169.311L373.59 160.369C362.152 145.904 336.623 145.811 325.186 160.4L262.156 240.75C255.033 249.881 254.002 262.305 259.533 272.312C264.781 281.977 275.062 288 286.375 288H545.582C556.582 288 566.738 282.227 572.111 272.939C572.111 272.908 572.111 272.908 572.143 272.877C577.799 262.994 577.205 251.072 570.549 241.754L474.586 107.91ZM290.188 255.873L348.436 180.26L368.527 205.924C372.875 211.469 386.125 216.578 394.119 205.391L448.555 126.641L541.238 255.873H290.188ZM496 384C487.164 384 480 391.162 480 400V448C480 465.672 465.674 480 448 480H416V400C416 391.162 408.836 384 400 384S384 391.162 384 400V480H128V192H144C152.836 192 160 184.836 160 176C160 167.162 152.836 160 144 160H64C28.654 160 0 188.652 0 224V448C0 483.346 28.654 512 64 512H448C483.346 512 512 483.346 512 448V400C512 391.162 504.836 384 496 384ZM96 480H64C46.355 480 32 465.645 32 448V416H96V480ZM96 384H32V288H96V384ZM96 256H32V224C32 206.355 46.355 192 64 192H96V256Z" })
  }
));
PhotoFilmLight.displayName = "PhotoFilmLight";
var PhotoFilm_default = PhotoFilmLight;
