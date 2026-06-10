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
var Campfire_exports = {};
__export(Campfire_exports, {
  default: () => Campfire_default
});
module.exports = __toCommonJS(Campfire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CampfireDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.012 32.001C306.635 44.001 294.51 56.752 283.885 69.502C266.383 46.001 244.633 22.251 220.006 0C156.877 57.002 112 131.254 112 176.005C112 255.508 176.504 320.01 256.008 320.01S400.016 255.508 400.016 176.005C400.016 142.754 366.639 74.002 320.012 32.001ZM294.34 228.55C283.5 236.423 270.105 241.127 255.688 241.127C219.592 241.127 190.246 216.179 190.246 175.687C190.246 155.544 202.414 137.75 226.648 107.382C230.125 111.576 276.037 172.824 276.037 172.824L305.383 137.955C307.428 141.534 309.371 145.01 311.008 148.385C324.709 175.584 318.881 210.553 294.34 228.55Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.134 490.75C505.478 503.844 493.165 512 480.009 512C476.446 512 472.79 511.406 469.259 510.125L256.009 433.965L42.759 510.125C39.228 511.406 35.571 512 32.009 512C18.853 512 6.54 503.844 1.884 490.75C-4.085 474.125 4.603 455.812 21.259 449.875L160.909 400L21.259 350.125C4.603 344.187 -4.085 325.875 1.884 309.25C7.79 292.594 26.134 283.812 42.759 289.875L256.009 366.035L469.259 289.875C485.79 283.844 504.228 292.594 510.134 309.25C516.103 325.875 507.415 344.188 490.759 350.125L351.108 400L490.759 449.875C507.415 455.812 516.103 474.125 510.134 490.75Z" })
    ]
  }
));
CampfireDuotone.displayName = "CampfireDuotone";
var Campfire_default = CampfireDuotone;
