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
var Scribble_exports = {};
__export(Scribble_exports, {
  default: () => Scribble_default
});
module.exports = __toCommonJS(Scribble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScribbleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.49 486.99L461.897 501.69C448.006 508.641 433.178 512 418.491 512C388.523 512 359.117 498.003 339.226 471.977C310.148 433.954 312.508 383.933 345.07 347.488L441.256 235.074C449.913 225.826 449.881 213.157 442.225 205.096C438.272 200.925 432.944 198.597 427.194 198.535C422.475 198.191 416.069 200.675 412.022 204.736L177.212 454.215C160.29 471.196 138.275 481.038 115.541 479.71C92.463 479.413 71.026 470.009 55.151 453.262C23.823 420.176 24.198 368.702 56.042 336.053L263.633 123.254C275.571 109.944 274.992 88.136 261.414 74.592C254.368 67.547 244.899 63.641 235.071 64.016C225.118 64.235 215.931 68.406 209.212 75.732L54.432 227.966C41.792 240.338 21.558 240.182 9.183 227.591C-3.208 214.984 -3.036 194.739 9.558 182.351L163.181 31.32C180.65 12.183 206.087 0.654 233.649 0.045C260.93 -0.783 287.133 9.809 306.664 29.32C344.304 66.937 345.914 127.409 310.336 166.979L101.854 380.731C94.104 388.682 93.994 401.211 101.635 409.256C105.51 413.365 110.744 415.661 116.385 415.739C121.65 415.442 127.291 413.661 131.26 409.678L366.023 160.261C382.944 143.203 405.022 134.517 427.928 134.548C451.131 134.814 472.694 144.218 488.662 161.043C519.662 193.723 519.756 245.009 488.865 277.799L393.241 389.604C375.476 409.506 385.116 426.659 390.069 433.126C399.132 444.998 416.272 452.95 434.085 444.061L466.49 428.971C482.475 421.55 501.537 428.455 509.006 444.483C516.459 460.495 509.521 479.538 493.49 486.99Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
ScribbleDuotone.displayName = "ScribbleDuotone";
var Scribble_default = ScribbleDuotone;
