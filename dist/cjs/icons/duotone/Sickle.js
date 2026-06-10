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
var Sickle_exports = {};
__export(Sickle_exports, {
  default: () => Sickle_default
});
module.exports = __toCommonJS(Sickle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SickleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.822 153.684C513.464 161.967 502.601 166.912 497.421 160.113C484.663 143.297 468.366 129.326 449.671 119.187C404.7 94.461 347.603 96.191 304.021 123.145C232.523 167.283 217.743 253.459 256.65 317.01L197.48 376.18L133.425 312.234L159.406 286.254C133.056 245.811 121.31 197.178 131.843 149.85C149.908 68.496 220.9 0 317.917 0C447.271 0 500.958 99.652 511.822 153.684Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M129.933 308.74C123.677 302.495 113.443 302.499 107.192 308.75L84.691 331.25C78.441 337.5 78.441 347.75 84.691 354L87.316 356.75L9.373 434.752C-3.124 447.249 -3.124 467.511 9.373 480.007L31.994 502.627C44.492 515.124 64.754 515.124 77.251 502.627L155.319 424.5L158.069 427.25C164.32 433.5 174.445 433.5 180.695 427.25L203.321 404.625C209.573 398.374 209.569 388.237 203.312 381.991L129.933 308.74Z" })
    ]
  }
));
SickleDuotone.displayName = "SickleDuotone";
var Sickle_default = SickleDuotone;
