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
var WindWarning_exports = {};
__export(WindWarning_exports, {
  default: () => WindWarning_default
});
module.exports = __toCommonJS(WindWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindWarningDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384.004 271.975H415.121C415.406 268.256 415.856 264.586 415.944 260.812C418.602 145.971 327.658 50.715 212.813 48.057C97.969 45.398 2.713 136.344 0.057 251.188C-2.601 366.031 88.342 461.285 203.188 463.943C291.363 465.984 367.811 412.752 399.846 335.982H384.004C366.328 335.982 352 321.652 352 303.979C352 286.303 366.328 271.975 384.004 271.975ZM184 152C184 138.75 194.75 128 208 128S232 138.75 232 152V264C232 277.25 221.25 288 208 288S184 277.25 184 264V152ZM208 384C190.326 384 176 369.672 176 352C176 334.326 190.326 320 208 320S240 334.326 240 352C240 369.672 225.674 384 208 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 288C221.25 288 232 277.25 232 264V152C232 138.75 221.25 128 208 128S184 138.75 184 152V264C184 277.25 194.75 288 208 288ZM208 320C190.326 320 176 334.326 176 352C176 369.672 190.326 384 208 384S240 369.672 240 352C240 334.326 225.674 320 208 320ZM552 272H384C366.328 272 352 286.312 352 304S366.328 336 384 336H552C565.234 336 576 346.781 576 360S565.234 384 552 384H512C494.328 384 480 398.312 480 416S494.328 448 512 448H552C600.531 448 640 408.531 640 360S600.531 272 552 272ZM480 240H552C600.531 240 640 200.531 640 152S600.531 64 552 64H512C494.328 64 480 78.312 480 96S494.328 128 512 128H552C565.234 128 576 138.781 576 152S565.234 176 552 176H480C462.328 176 448 190.312 448 208S462.328 240 480 240Z" })
    ]
  }
));
WindWarningDuotone.displayName = "WindWarningDuotone";
var WindWarning_default = WindWarningDuotone;
