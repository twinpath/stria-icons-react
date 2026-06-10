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
const LinkHorizontalSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 304C91.062 304 48 260.938 48 208C48 186.117 55.646 166.16 68.02 149.996L30.418 120.525C11.633 144.852 0 174.955 0 208C0 287.406 64.594 352 144 352H167.451C163.061 336.648 160 320.746 160 304H144ZM573.842 424.451C613.48 398.83 640 354.633 640 304C640 224.594 575.406 160 496 160H472.549C476.939 175.352 480 191.254 480 208H496C548.938 208 592 251.062 592 304C592 343.789 567.662 377.979 533.098 392.518L414.338 299.436C435.184 274.617 448 242.928 448 208C448 128.594 383.406 64 304 64H144C134.908 64 126.125 65.146 117.514 66.791L38.814 5.109C34.408 1.672 29.189 0 24.033 0C16.908 0 9.846 3.156 5.127 9.188C-3.061 19.625 -1.248 34.717 9.189 42.889L601.186 506.883C611.686 515.086 626.748 513.211 634.873 502.805C643.061 492.367 641.248 477.273 630.811 469.102L573.842 424.451ZM376.66 269.904L305.107 213.824C314.848 210.395 325.07 208 336 208H368C368 188.766 359.355 171.674 345.857 160H336C309.125 160 284.189 167.656 262.783 180.65L175.193 112H304C356.938 112 400 155.062 400 208C400 231.762 391.061 253.23 376.66 269.904ZM336 400C283.062 400 240 356.938 240 304C240 297.904 240.707 291.984 241.799 286.201L201.32 254.475C195.596 269.982 192 286.527 192 304C192 383.406 256.594 448 336 448H448.234L386.992 400H336Z" })
  }
));
LinkHorizontalSlashRegular.displayName = "LinkHorizontalSlashRegular";
var LinkHorizontalSlash_default = LinkHorizontalSlashRegular;
