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
var Duck_exports = {};
__export(Duck_exports, {
  default: () => Duck_default
});
module.exports = __toCommonJS(Duck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DuckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M543.992 128.001C543.992 181.019 501.014 224 447.996 224H421C458.278 210.819 479.996 169.8 479.996 128.001H543.992Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M433.318 277.43C422.461 269.667 416.015 257.145 416.007 243.8C415.929 236.877 417.652 230.054 421.008 224C458.286 210.819 480.004 169.8 480.004 128.001C480.004 74.981 437.026 32 384.011 32S288.014 74.981 288.014 128.001C288.014 150.171 295.84 171.63 310.115 188.591C316.428 195.996 319.933 205.389 320.015 215.119C320.015 237.694 301.719 255.994 279.146 256H257.46C225.952 256 177.286 242.8 155.787 219.761C145.77 209.001 128.025 216.17 128.025 230.63C128.033 315.336 196.698 383.999 281.396 383.999H249.4C173.406 383.999 110.742 328.559 98.592 256H48.195C39.034 256 31.404 263.66 32.037 272.749C40.655 388.639 137.386 480 255.448 480H362.641C418.148 480 473.444 435.48 479.351 380.289C483.797 340.19 466.178 300.829 433.318 277.43ZM384.011 144C375.174 144 368.009 136.837 368.009 128.001C368.009 119.163 375.174 112 384.011 112C392.848 112 400.009 119.163 400.009 128.001C400.009 136.837 392.848 144 384.011 144Z" })
    ]
  }
));
DuckDuotone.displayName = "DuckDuotone";
var Duck_default = DuckDuotone;
