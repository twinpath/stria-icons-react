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
var TugrikSign_exports = {};
__export(TugrikSign_exports, {
  default: () => TugrikSign_default
});
module.exports = __toCommonJS(TugrikSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TugrikSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 56C384 69.25 373.25 80 360 80H216V184.762L305.812 160.812C318.719 157.344 331.781 165.062 335.188 177.812C338.594 190.625 331 203.781 318.188 207.188L216 234.438V280.762L305.812 256.812C318.719 253.344 331.781 261.062 335.188 273.812C338.594 286.625 331 299.781 318.188 303.188L216 330.438V456C216 469.25 205.25 480 192 480S168 469.25 168 456V343.238L78.188 367.188C76.125 367.75 74.031 368 72 368C61.375 368 51.688 360.906 48.812 350.188C45.406 337.375 53 324.219 65.812 320.812L168 293.562V247.238L78.188 271.188C76.125 271.75 74.031 272 72 272C61.375 272 51.688 264.906 48.812 254.188C45.406 241.375 53 228.219 65.812 224.812L168 197.562V80H24C10.75 80 0 69.25 0 56S10.75 32 24 32H360C373.25 32 384 42.75 384 56Z" })
  }
));
TugrikSignRegular.displayName = "TugrikSignRegular";
var TugrikSign_default = TugrikSignRegular;
