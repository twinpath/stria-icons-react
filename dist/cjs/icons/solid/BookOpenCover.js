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
var BookOpenCover_exports = {};
__export(BookOpenCover_exports, {
  default: () => BookOpenCover_default
});
module.exports = __toCommonJS(BookOpenCover_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookOpenCoverSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 32.008C544 12.383 526.498 -2.617 507.105 0.383L336 26.863V410.883L544 364.656V32.008ZM304 26.863L132.895 0.383C113.502 -2.617 96 12.383 96 32.008V364.656L304 410.883V26.863ZM600.238 32.961L576 39.02V364.66C576 379.656 565.584 392.641 550.941 395.898L320 447.219L89.059 395.898C74.416 392.641 64 379.656 64 364.66V39.02L39.762 32.961C19.564 27.914 0 43.188 0 64.004V416C0 431 10.418 443.984 25.059 447.242L313.059 511.238C317.631 512.254 322.369 512.254 326.941 511.238L614.941 447.242C629.582 443.984 640 431 640 416V64.004C640 43.188 620.436 27.914 600.238 32.961Z" })
  }
));
BookOpenCoverSolid.displayName = "BookOpenCoverSolid";
var BookOpenCover_default = BookOpenCoverSolid;
