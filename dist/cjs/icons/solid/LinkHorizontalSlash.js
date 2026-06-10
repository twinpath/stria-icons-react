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
const LinkHorizontalSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160.811 288H144C99.889 288 64 252.111 64 208C64 189.838 70.318 173.266 80.555 159.822L30.369 120.488C11.607 144.805 0 174.912 0 208C0 287.529 64.471 352 144 352H166.824C162.48 336.717 160 320.656 160 304C160 298.6 160.332 293.277 160.811 288ZM573.883 424.484C613.521 398.893 640 354.715 640 304C640 224.471 575.529 160 496 160H473.176C477.52 175.283 480 191.344 480 208C480 213.4 479.668 218.723 479.189 224H496C540.111 224 576 259.889 576 304C576 340.48 551.309 370.994 517.865 380.578L414.281 299.391C435.176 274.674 448 243.02 448 208C448 128.471 383.529 64 304 64H144C134.9 64 126.117 65.143 117.504 66.783L38.814 5.109C34.408 1.672 29.189 0 24.033 0C16.908 0 9.846 3.156 5.127 9.188C-3.061 19.625 -1.248 34.717 9.189 42.889L601.186 506.883C611.686 515.086 626.748 513.211 634.873 502.805C643.061 492.367 641.248 477.273 630.811 469.102L573.883 424.484ZM364.342 260.25L320.344 225.766C325.416 224.727 330.611 224 336 224H349.053C350.846 218.971 352 213.637 352 208C352 185.979 337.01 167.568 316.758 161.939C297.281 164.566 279.25 171.312 263.096 180.896L195.607 128H304C348.111 128 384 163.889 384 208C384 228.002 376.523 246.215 364.342 260.25ZM336 384C291.889 384 256 348.111 256 304C256 301.885 256.463 299.896 256.625 297.822L201.059 254.271C195.301 269.76 192 286.461 192 304C192 383.529 256.471 448 336 448H448.232L366.576 384H336Z" })
  }
));
LinkHorizontalSlashSolid.displayName = "LinkHorizontalSlashSolid";
var LinkHorizontalSlash_default = LinkHorizontalSlashSolid;
