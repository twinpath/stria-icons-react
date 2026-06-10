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
var DesktopArrowDown_exports = {};
__export(DesktopArrowDown_exports, {
  default: () => DesktopArrowDown_default
});
module.exports = __toCommonJS(DesktopArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DesktopArrowDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 48V368C576 394.5 554.5 416 528 416H48C21.5 416 0 394.5 0 368V48C0 21.5 21.5 0 48 0H264V64H64V288H512V64H312V0H528C554.5 0 576 21.5 576 48Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 464H352L336 416H240L224 464H152C138.75 464 128 474.75 128 488S138.75 512 152 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464ZM312 64V158.062L351.031 119.031C360.406 109.656 375.594 109.656 384.969 119.031S394.344 143.594 384.969 152.969L304.969 232.969C295.594 242.344 280.406 242.344 271.031 232.969L191.031 152.969C181.656 143.594 181.656 128.406 191.031 119.031C195.719 114.344 201.844 112 208 112S220.281 114.344 224.969 119.031L264 158.062V64H64V288H512V64H312Z" })
    ]
  }
));
DesktopArrowDownDuotone.displayName = "DesktopArrowDownDuotone";
var DesktopArrowDown_default = DesktopArrowDownDuotone;
