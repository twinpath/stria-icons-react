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
var Feather_exports = {};
__export(Feather_exports, {
  default: () => Feather_default
});
module.exports = __toCommonJS(Feather_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FeatherDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M483.565 244.238L352.079 287.986H449.819C439.946 298.609 453.569 284.861 403.575 334.857L255.964 383.979H354.204C279.212 457.098 159.6 454.598 107.354 438.975L107.263 438.885L345.179 200.969C354.554 191.594 354.554 176.406 345.179 167.031S320.616 157.656 311.241 167.031L73.177 405.096L72.77 404.693C63.53 373.803 43.657 241.764 129.352 156.246C154.1 131.498 136.477 149.121 215.095 70.627C305.71 -19.99 404.825 -17.615 467.317 44.879C517.938 95.375 529.061 169.744 483.565 244.238Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 512C17.844 512 11.719 509.656 7.031 504.969C-2.344 495.594 -2.344 480.406 7.031 471.031L311.031 167.031C320.406 157.656 335.594 157.656 344.969 167.031S354.344 191.594 344.969 200.969L40.969 504.969C36.281 509.656 30.156 512 24 512Z" })
    ]
  }
));
FeatherDuotone.displayName = "FeatherDuotone";
var Feather_default = FeatherDuotone;
