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
var LinkSimpleSlash_exports = {};
__export(LinkSimpleSlash_exports, {
  default: () => LinkSimpleSlash_default
});
module.exports = __toCommonJS(LinkSimpleSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkSimpleSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 112H480C559.406 112 624 176.594 624 256C624 299.824 603.906 338.652 572.926 365.084L585.662 375.207C618.721 345.873 640 303.562 640 256C640 167.781 568.219 96 480 96H384C379.594 96 376 99.578 376 104S379.594 112 384 112ZM256 400H160C80.594 400 16 335.406 16 256C16 212.176 36.092 173.35 67.072 146.918L54.338 136.793C21.279 166.127 0 208.438 0 256C0 344.219 71.781 416 160 416H256C260.406 416 264 412.422 264 408S260.406 400 256 400ZM12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.674 0 3.336 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.02 14.262L627.014 510.266C628.498 511.438 630.248 512 631.998 512C634.342 512 636.686 510.969 638.264 508.984C641.014 505.516 640.436 500.484 636.982 497.734L12.988 1.73Z" })
  }
));
LinkSimpleSlashThin.displayName = "LinkSimpleSlashThin";
var LinkSimpleSlash_default = LinkSimpleSlashThin;
