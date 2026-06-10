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
var LineHeight_exports = {};
__export(LineHeight_exports, {
  default: () => LineHeight_default
});
module.exports = __toCommonJS(LineHeight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LineHeightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M264 104H568C572.406 104 576 100.406 576 96S572.406 88 568 88H264C259.594 88 256 91.594 256 96S259.594 104 264 104ZM568 248H264C259.594 248 256 251.594 256 256S259.594 264 264 264H568C572.406 264 576 260.406 576 256S572.406 248 568 248ZM568 408H264C259.594 408 256 411.594 256 416S259.594 424 264 424H568C572.406 424 576 420.406 576 416S572.406 408 568 408ZM178.344 133.656C179.906 135.219 181.937 136 184 136S188.094 135.219 189.656 133.656C192.781 130.531 192.781 125.469 189.656 122.344L101.656 34.344C98.531 31.219 93.469 31.219 90.344 34.344L2.344 122.344C-0.781 125.469 -0.781 130.531 2.344 133.656S10.531 136.781 13.656 133.656L88 59.312V452.688L13.656 378.344C10.531 375.219 5.469 375.219 2.344 378.344S-0.781 386.531 2.344 389.656L90.344 477.656C91.906 479.219 93.937 480 96 480S100.094 479.219 101.656 477.656L189.656 389.656C192.781 386.531 192.781 381.469 189.656 378.344S181.469 375.219 178.344 378.344L104 452.688V59.312L178.344 133.656Z" })
  }
));
LineHeightThin.displayName = "LineHeightThin";
var LineHeight_default = LineHeightThin;
