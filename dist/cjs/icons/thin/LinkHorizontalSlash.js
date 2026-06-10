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
var LinkHorizontalSlash_exports = {};
__export(LinkHorizontalSlash_exports, {
  default: () => LinkHorizontalSlash_default
});
module.exports = __toCommonJS(LinkHorizontalSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkHorizontalSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 192C573.75 192 624 242.25 624 304C624 333.869 612.068 360.893 592.941 380.994L605.412 390.906C626.697 368.039 640 337.631 640 304C640 233.422 582.594 176 512 176C507.594 176 504 179.578 504 184S507.594 192 512 192ZM320 96C381.75 96 432 146.25 432 208C432 221.816 429.154 234.906 424.557 247.139L437.93 257.77C444.412 242.463 448 225.643 448 208C448 137.422 390.594 80 320 80H214.301L234.428 96H320ZM320 416C258.25 416 208 365.75 208 304C208 290.184 210.848 277.094 215.443 264.863L202.07 254.232C195.588 269.539 192 286.359 192 304C192 374.578 249.406 432 320 432H425.691L405.564 416H320ZM128 320C66.25 320 16 269.75 16 208C16 178.133 27.932 151.109 47.059 131.008L34.588 121.094C13.303 143.961 0 174.369 0 208C0 278.578 57.406 336 128 336C132.406 336 136 332.422 136 328S132.406 320 128 320ZM12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.674 0 3.336 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.02 14.262L627.014 510.266C628.498 511.438 630.248 512 631.998 512C634.342 512 636.686 510.969 638.264 508.984C641.014 505.516 640.436 500.484 636.982 497.734L12.988 1.73Z" })
  }
));
LinkHorizontalSlashThin.displayName = "LinkHorizontalSlashThin";
var LinkHorizontalSlash_default = LinkHorizontalSlashThin;
