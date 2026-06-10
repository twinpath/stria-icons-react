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
var Podcast_exports = {};
__export(Podcast_exports, {
  default: () => Podcast_default
});
module.exports = __toCommonJS(Podcast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PodcastRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 304C189.811 304 157.439 312.969 157.439 349.5C157.439 383.949 170.83 458.049 178.891 487.689C184.221 507.449 204.369 512 224 512S263.779 507.449 269.109 487.689C277.17 457.789 290.561 383.82 290.561 349.5C290.561 312.969 258.189 304 224 304ZM225.541 463.984C225.055 463.994 224.541 464 224 464C223.455 464 222.938 463.994 222.449 463.984C215.521 433.977 206.611 381.258 205.58 353.641C209.105 352.836 214.945 352 224 352C233.109 352 238.969 352.846 242.484 353.656C241.576 380.445 232.637 433.277 225.541 463.984ZM224 288C259.375 288 288 259.375 288 224S259.375 160 224 160S160 188.625 160 224S188.625 288 224 288ZM224 208C232.822 208 240 215.178 240 224S232.822 240 224 240S208 232.822 208 224S215.178 208 224 208ZM224 0C100.5 0 0 100.484 0 224C0 295.125 32.656 360.438 89.594 403.188C93.906 406.438 98.969 408 103.969 408C111.281 408 118.469 404.688 123.187 398.406C131.156 387.812 129 372.766 118.406 364.812C73.656 331.219 48 279.891 48 224C48 126.953 126.969 48 224 48S400 126.953 400 224C400 279.875 374.344 331.203 329.625 364.812C319.031 372.781 316.875 387.812 324.844 398.422C332.812 408.969 347.844 411.219 358.437 403.188C415.344 360.438 448 295.125 448 224C448 100.484 347.5 0 224 0ZM345.812 300.812C360.344 277.828 368 251.266 368 224C368 144.594 303.406 80 224 80S80 144.594 80 224C80 251.266 87.656 277.828 102.188 300.812C109.281 312 124.062 315.375 135.281 308.297S149.844 286.391 142.75 275.187C133.094 259.891 128 242.188 128 224C128 171.062 171.062 128 224 128S320 171.062 320 224C320 242.188 314.906 259.891 305.25 275.188C298.156 286.391 301.5 301.219 312.719 308.297C316.688 310.812 321.125 312 325.5 312C333.469 312 341.25 308.047 345.812 300.812Z" })
  }
));
PodcastRegular.displayName = "PodcastRegular";
var Podcast_default = PodcastRegular;
