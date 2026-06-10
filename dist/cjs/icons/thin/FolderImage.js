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
var FolderImage_exports = {};
__export(FolderImage_exports, {
  default: () => FolderImage_default
});
module.exports = __toCommonJS(FolderImage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderImageThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L217.375 41.375C211.371 35.371 203.234 32 194.746 32H48C21.492 32 0 53.492 0 80V432C0 458.508 21.492 480 48 480H464C490.508 480 512 458.508 512 432V144C512 117.492 490.508 96 464 96ZM496 432C496 449.672 481.672 464 464 464H48C30.328 464 16 449.672 16 432V80C16 62.328 30.328 48 48 48H188.117C196.602 48 204.742 51.371 210.742 57.371L265.371 112H464C481.672 112 496 126.328 496 144V432ZM313.312 218.688C304.375 205.312 282.312 205.312 273.375 218.688L217 303.25L201.406 281.859C192.344 269.516 171.656 269.516 162.594 281.859L92.594 377.875C87.25 385.234 86.5 394.813 90.625 402.859C94.719 410.969 102.906 416 112 416H400C408.844 416 416.938 411.156 421.125 403.344C425.344 395.531 424.906 386.078 419.969 378.688L313.312 218.688ZM407.062 395.75L407.031 395.781C405.656 398.375 402.938 400 400 400H112C108.969 400 106.25 398.328 104.875 395.609C103.5 392.922 103.75 389.734 105.531 387.297L175.531 291.297C177.062 289.203 179.406 288 182 288C184.594 288 186.938 289.203 188.469 291.297L217.562 331.219L286.687 227.562C289.687 223.094 297 223.094 300 227.562L406.656 387.578C408.312 390.031 408.469 393.156 407.062 395.75ZM128 248C150.062 248 168 230.062 168 208S150.062 168 128 168S88 185.938 88 208S105.938 248 128 248ZM128 184C141.219 184 152 194.766 152 208S141.219 232 128 232S104 221.234 104 208S114.781 184 128 184Z" })
  }
));
FolderImageThin.displayName = "FolderImageThin";
var FolderImage_default = FolderImageThin;
