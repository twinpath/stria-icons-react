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
var H4_exports = {};
__export(H4_exports, {
  default: () => H4_default
});
module.exports = __toCommonJS(H4_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H4Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 64C257.906 64 240 81.906 240 104V216H80V104C80 81.906 62.094 64 40 64S0 81.906 0 104V408C0 430.094 17.906 448 40 448S80 430.094 80 408V296H240V408C240 430.094 257.906 448 280 448S320 430.094 320 408V104C320 81.906 302.094 64 280 64ZM600 64C577.906 64 560 81.906 560 104V240H455.922L479.359 111.156C483.313 89.406 468.891 68.594 447.156 64.656C425.406 60.75 404.578 75.125 400.641 96.844L368.641 272.844C366.531 284.5 369.687 296.531 377.297 305.625C384.891 314.75 396.141 320 408 320H560V408C560 430.094 577.906 448 600 448S640 430.094 640 408V104C640 81.906 622.094 64 600 64Z" })
  }
));
H4Solid.displayName = "H4Solid";
var H4_default = H4Solid;
