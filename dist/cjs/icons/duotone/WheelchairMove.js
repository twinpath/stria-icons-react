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
var WheelchairMove_exports = {};
__export(WheelchairMove_exports, {
  default: () => WheelchairMove_default
});
module.exports = __toCommonJS(WheelchairMove_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WheelchairMoveDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160.004 192C71.636 192 0 263.635 0 352S71.636 512 160.004 512S320.007 440.365 320.007 352S248.371 192 160.004 192ZM160.004 464C98.244 464 48.001 413.758 48.001 352S98.244 240 160.004 240S272.006 290.242 272.006 352S221.763 464 160.004 464ZM368.005 96C394.515 96 416.006 74.508 416.006 48S394.515 0 368.005 0C341.494 0 320.003 21.492 320.003 48S341.494 96 368.005 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440.766 235.719C434.672 228.312 425.609 224 416.015 224H299.11C341.367 180.02 339.168 182.504 340.826 180.25C349.982 168.031 352.764 152.625 348.482 138C344.17 123.344 333.544 111.906 322.013 107.719L206.01 51.219C195.26 46 182.416 47.156 172.822 54.406L108.82 102.406C94.664 113 91.789 133.062 102.414 147.188C113.008 161.344 133.071 164.156 147.196 153.594L195.604 117.312L245.306 141.453L191.025 195.125C242.982 205.342 285.801 240.686 306.509 288H376.983L352.639 409.719C349.17 427.062 360.42 443.906 377.733 447.375C379.858 447.812 381.952 448 384.046 448C398.983 448 412.359 437.5 415.39 422.281L447.391 262.281C449.266 252.875 446.828 243.125 440.766 235.719Z" })
    ]
  }
));
WheelchairMoveDuotone.displayName = "WheelchairMoveDuotone";
var WheelchairMove_default = WheelchairMoveDuotone;
