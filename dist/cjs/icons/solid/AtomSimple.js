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
var AtomSimple_exports = {};
__export(AtomSimple_exports, {
  default: () => AtomSimple_default
});
module.exports = __toCommonJS(AtomSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AtomSimpleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.883 256.003C448.385 332.382 467.136 411.137 423.134 455.139C381.757 496.517 307.254 484.391 224 432.513C140.371 484.516 66.118 496.392 24.866 455.139C-19.136 411.137 -0.385 332.382 47.117 256.003C-0.385 179.623 -19.136 100.869 24.866 56.866S147.622 31.615 224 79.118C300.253 31.615 379.132 12.864 423.134 56.866C467.136 100.869 448.385 179.623 400.883 256.003ZM167.372 391.761C141.246 370.259 116.995 347.758 88.244 312.881C63.368 360.134 57.742 397.511 70.118 409.887C82.494 422.262 119.995 416.637 167.372 391.761ZM88.244 199.124C111.87 170.248 138.371 143.746 167.372 119.995C109.789 89.578 79.434 92.802 70.118 102.119C57.742 114.495 63.368 151.872 88.244 199.124ZM323.005 256.003C294.628 218.501 261.377 184.999 224 156.622C186.623 184.999 153.372 218.501 125.12 256.003C150.997 290.005 179.123 320.756 224 355.008C258.002 329.007 288.753 300.88 323.005 256.003ZM256.001 256.003C256.001 273.629 241.626 288.005 224 288.005S191.999 273.629 191.999 256.003S206.374 224.001 224 224.001S256.001 238.377 256.001 256.003ZM377.882 102.119C368.521 92.758 337.96 89.71 280.628 119.995C309.629 143.746 336.13 170.248 359.756 199.124C384.632 151.872 390.258 114.495 377.882 102.119ZM359.756 312.881C330.88 347.883 306.629 370.259 280.628 391.761C328.005 416.637 365.506 422.262 377.882 409.887C390.258 397.511 384.632 360.134 359.756 312.881Z" })
  }
));
AtomSimpleSolid.displayName = "AtomSimpleSolid";
var AtomSimple_default = AtomSimpleSolid;
