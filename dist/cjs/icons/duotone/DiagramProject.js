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
var DiagramProject_exports = {};
__export(DiagramProject_exports, {
  default: () => DiagramProject_default
});
module.exports = __toCommonJS(DiagramProject_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramProjectDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144.25 192H128L224.883 361.771C227.988 338.314 247.98 320 272.25 320H274.699L186.646 165.971C178.621 181.334 162.701 192 144.25 192ZM192.25 64V128H448.25V64H192.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 0H496C469.6 0 448 21.6 448 48V144C448 170.4 469.6 192 496 192H592C618.4 192 640 170.4 640 144V48C640 21.6 618.4 0 592 0ZM368 320H272C245.6 320 224 341.6 224 368V464C224 490.4 245.6 512 272 512H368C394.4 512 416 490.4 416 464V368C416 341.6 394.4 320 368 320ZM144 0H48C21.6 0 0 21.6 0 48V144C0 170.4 21.6 192 48 192H144C170.4 192 192 170.4 192 144V48C192 21.6 170.4 0 144 0Z" })
    ]
  }
));
DiagramProjectDuotone.displayName = "DiagramProjectDuotone";
var DiagramProject_default = DiagramProjectDuotone;
