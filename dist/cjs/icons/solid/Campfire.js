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
const CampfireSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.009 320C335.513 320 400.017 255.5 400.017 176C400.017 142.75 366.64 74 320.013 32C306.636 44 294.511 56.75 283.886 69.5C266.384 46 244.634 22.25 220.007 0C156.878 57 112.001 131.25 112.001 176C112.001 255.5 176.505 320 256.009 320ZM226.65 107.379C230.126 111.572 276.038 172.818 276.038 172.818L305.384 137.951C307.429 141.529 309.372 145.006 311.009 148.381C324.71 175.578 318.882 210.547 294.341 228.543C283.501 236.416 270.107 241.119 255.689 241.119C219.593 241.119 190.247 216.172 190.247 175.682C190.247 155.539 202.415 137.746 226.65 107.379ZM490.759 449.875L351.108 400L490.759 350.125C507.415 344.187 516.103 325.875 510.134 309.25C504.228 292.594 485.79 283.844 469.259 289.875L256.009 366.035L42.759 289.875C26.134 283.812 7.79 292.594 1.884 309.25C-4.085 325.875 4.603 344.188 21.259 350.125L160.909 400L21.259 449.875C4.603 455.813 -4.085 474.125 1.884 490.75C6.54 503.844 18.853 512 32.009 512C35.571 512 39.228 511.406 42.759 510.125L256.009 433.965L469.259 510.125C472.79 511.406 476.446 512 480.009 512C493.165 512 505.478 503.844 510.134 490.75C516.103 474.125 507.415 455.812 490.759 449.875Z" })
  }
));
CampfireSolid.displayName = "CampfireSolid";
var Campfire_default = CampfireSolid;
