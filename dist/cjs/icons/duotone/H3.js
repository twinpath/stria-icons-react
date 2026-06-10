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
const H3Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 104V408C320 430.094 302.094 448 280 448S240 430.094 240 408V296H80V408C80 430.094 62.094 448 40 448S0 430.094 0 408V104C0 81.906 17.906 64 40 64S80 81.906 80 104V216H240V104C240 81.906 257.906 64 280 64S320 81.906 320 104Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M526.35 448H460.026C418.732 448 382.468 420.344 369.781 379.188C363.282 358.063 375.125 335.688 396.233 329.188C417.341 322.656 439.746 334.531 446.246 355.625C448.511 363.031 454.058 368 460.026 368H526.35C544.912 368 560.005 350.156 560.005 328.219S544.912 288.437 526.35 288.437H444.121C428.044 288.437 413.544 278.812 407.279 264C401.03 249.219 404.233 232.094 415.435 220.562L489.806 144H408.014C385.921 144 368.016 126.094 368.016 104S385.921 64 408.014 64H584.409C600.487 64 614.986 73.625 621.251 88.438C627.516 103.219 624.298 120.344 613.095 131.875L538.115 209.063C595.268 215.281 640 266.344 640 328.219C640 394.281 589.019 448 526.35 448Z" })
    ]
  }
));
H3Duotone.displayName = "H3Duotone";
var H3_default = H3Duotone;
