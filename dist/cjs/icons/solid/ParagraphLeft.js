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
var ParagraphLeft_exports = {};
__export(ParagraphLeft_exports, {
  default: () => ParagraphLeft_default
});
module.exports = __toCommonJS(ParagraphLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ParagraphLeftSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M147.826 224H159.938V288C159.938 305.674 174.264 320 191.936 320H191.939C209.611 320 223.938 305.674 223.938 288V64H255.938V288C255.938 305.674 270.264 320 287.936 320H287.939C305.611 320 319.938 305.674 319.938 288V64C337.611 64 351.938 49.672 351.938 32V31.998C351.938 14.326 337.611 0 319.939 0H143.938C80.33 0 32.527 47.412 31.943 110.824C31.371 173.078 85.568 224 147.826 224ZM352.002 384H128.021V336C128.021 329.797 124.426 324.141 118.801 321.516C113.252 318.922 106.564 319.734 101.766 323.703L5.75 403.703C2.109 406.75 0 411.25 0 416S2.109 425.25 5.75 428.297L101.766 508.297C104.705 510.734 108.346 512 112.018 512C114.316 512 116.645 511.5 118.801 510.484C124.426 507.859 128.021 502.203 128.021 496V448H351.998C369.672 448 384 433.672 384 415.998C384 398.326 369.674 384 352.002 384Z" })
  }
));
ParagraphLeftSolid.displayName = "ParagraphLeftSolid";
var ParagraphLeft_default = ParagraphLeftSolid;
