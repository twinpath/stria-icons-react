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
var ToiletPaperBlank_exports = {};
__export(ToiletPaperBlank_exports, {
  default: () => ToiletPaperBlank_default
});
module.exports = __toCommonJS(ToiletPaperBlank_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletPaperBlankThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464.005 0H131.975C75.337 0 32.02 85.219 32.02 194V360.75C32.02 393.391 24.292 413.062 9.667 456.141L1.26 481.062C-3.913 496.186 7.499 512 23.479 512H306.604C323.432 512 338.305 501.281 343.618 485.359C357.975 442.287 368.008 411.211 368.008 360.75V192C368.008 94.953 411.069 16 464.005 16S560.001 94.953 560.001 192S516.94 368 464.005 368H416.007C411.585 368 408.007 371.578 408.007 376S411.585 384 416.007 384H464.005C525.753 384 576.001 297.875 576.001 192S525.753 0 464.005 0ZM352.008 192V360.75C352.008 409.938 341.571 441.078 329.495 477.141C324.887 490.756 316.559 496 306.604 496H23.479C18.649 496 14.704 491.189 16.417 486.188L24.807 461.281C39.573 417.844 48.02 396.031 48.02 360.75V194C48.02 97.516 85.899 16 131.975 16H419.382C379.786 45.627 352.008 113.32 352.008 192ZM504.003 192C504.003 150.953 486.801 120 464.005 120S424.007 150.953 424.007 192S441.208 264 464.005 264S504.003 233.047 504.003 192ZM440.005 192C440.005 159.953 452.676 136 464.005 136S488.005 159.953 488.005 192S475.333 248 464.005 248S440.005 224.047 440.005 192Z" })
  }
));
ToiletPaperBlankThin.displayName = "ToiletPaperBlankThin";
var ToiletPaperBlank_default = ToiletPaperBlankThin;
