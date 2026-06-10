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
var Pi_exports = {};
__export(Pi_exports, {
  default: () => Pi_default
});
module.exports = __toCommonJS(Pi_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PiSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M433.625 345.281C450.594 359.438 452.859 384.656 438.719 401.625L426.203 416.625C409.625 436.562 385.203 448 359.219 448C311.125 448 272 408.875 272 360.781V144H176V287.5C176 336.656 163.109 385.188 138.734 427.844C131.344 440.781 117.844 448 103.969 448C97.234 448 90.406 446.312 84.156 442.719C64.969 431.781 58.312 407.344 69.266 388.156C86.75 357.562 96 322.75 96 287.5V144H40C17.906 144 0 126.094 0 104S17.906 64 40 64H408C430.094 64 448 81.906 448 104S430.094 144 408 144H352V360.781C352 366.906 360.859 370.156 364.734 365.406L377.281 350.375C391.453 333.406 416.656 331.094 433.625 345.281Z" })
  }
));
PiSolid.displayName = "PiSolid";
var Pi_default = PiSolid;
