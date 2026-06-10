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
var H3_exports = {};
__export(H3_exports, {
  default: () => H3_default
});
module.exports = __toCommonJS(H3_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H3Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M531.938 231.124H469.094L615.562 91.578C620.297 87.049 621.797 80.116 619.375 74.057C616.938 67.966 611.062 64 604.516 64H384C375.156 64 368 71.152 368 79.991S375.156 95.982 384 95.982H564.547L418.078 235.527C413.344 240.056 411.844 246.99 414.266 253.049C416.703 259.139 422.578 263.105 429.125 263.105H531.938C573.875 263.105 608 297.367 608 339.468S573.875 415.8 531.938 415.8H449.016C426.375 415.8 406.344 401.308 399.188 379.758C396.406 371.387 387.344 366.827 378.953 369.638C370.563 372.418 366.031 381.475 368.813 389.877C380.344 424.513 412.563 447.781 449.016 447.781H531.938C591.531 447.781 640 399.184 640 339.468C640 279.721 591.531 231.124 531.938 231.124ZM304 64.219C295.156 64.219 288 71.371 288 80.21V240.118H32V80.21C32 71.371 24.844 64.219 16 64.219S0 71.371 0 80.21V432.009C0 440.848 7.156 448 16 448S32 440.848 32 432.009V272.1H288V432.009C288 440.848 295.156 448 304 448S320 440.848 320 432.009V80.21C320 71.371 312.844 64.219 304 64.219Z" })
  }
));
H3Light.displayName = "H3Light";
var H3_default = H3Light;
