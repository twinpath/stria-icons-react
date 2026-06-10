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
var TennisBall_exports = {};
__export(TennisBall_exports, {
  default: () => TennisBall_default
});
module.exports = __toCommonJS(TennisBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TennisBallDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464.316 240C474.971 240 485.371 241.006 495.633 242.451C488.818 120.756 391.561 23.498 269.865 16.684C271.311 26.945 272.316 37.346 272.316 48C272.316 171.516 171.832 272 48.316 272C37.662 272 27.262 270.994 17 269.549C23.814 391.244 121.072 488.502 242.768 495.316C241.322 485.055 240.316 474.654 240.316 464C240.316 340.484 340.801 240 464.316 240ZM240.316 48C240.316 37.404 239.229 27.078 237.57 16.945C120.016 26.059 26.375 119.699 17.262 237.254C27.395 238.912 37.721 240 48.316 240C154.191 240 240.316 153.875 240.316 48ZM272.316 464C272.316 474.596 273.404 484.922 275.062 495.055C392.617 485.941 486.258 392.301 495.371 274.746C485.238 273.088 474.912 272 464.316 272C358.441 272 272.316 358.125 272.316 464Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M269.549 16.684C265.037 16.432 260.574 16 256 16C249.672 16 243.459 16.465 237.254 16.945C238.912 27.078 240 37.404 240 48C240 153.875 153.875 240 48 240C37.404 240 27.078 238.912 16.945 237.254C16.465 243.459 16 249.672 16 256C16 260.574 16.432 265.037 16.684 269.549C26.945 270.994 37.346 272 48 272C171.516 272 272 171.516 272 48C272 37.346 270.994 26.945 269.549 16.684ZM495.316 242.451C485.055 241.006 474.654 240 464 240C340.484 240 240 340.484 240 464C240 474.654 241.006 485.055 242.451 495.316C246.963 495.568 251.426 496 256 496C262.328 496 268.541 495.535 274.746 495.055C273.088 484.922 272 474.596 272 464C272 358.125 358.125 272 464 272C474.596 272 484.922 273.088 495.055 274.746C495.535 268.541 496 262.328 496 256C496 251.426 495.568 246.963 495.316 242.451Z" })
    ]
  }
));
TennisBallDuotone.displayName = "TennisBallDuotone";
var TennisBall_default = TennisBallDuotone;
