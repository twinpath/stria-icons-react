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
var Wrench_exports = {};
__export(Wrench_exports, {
  default: () => Wrench_default
});
module.exports = __toCommonJS(Wrench_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WrenchSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M486.506 122.781C483.602 110.695 468.252 106.654 459.461 115.443L382.906 192H298.906V108L375.461 31.443C384.252 22.654 380.211 7.305 368.125 4.4C344.434 -1.293 318.703 -1.721 292.123 4.639C230.678 19.338 182.805 71.547 172.965 133.955C168.729 160.814 171.229 186.662 178.967 210.127L0 389.094C-28.125 417.219 -28.125 462.781 0 490.906C14.062 504.969 32.469 512 50.906 512S87.75 504.969 101.812 490.906L280.781 311.938C304.246 319.674 330.092 322.176 356.951 317.941C419.359 308.102 471.566 260.229 486.268 198.783C492.627 172.203 492.199 146.473 486.506 122.781ZM58.906 456C45.652 456 34.906 445.254 34.906 432C34.906 418.744 45.652 408 58.906 408S82.906 418.744 82.906 432C82.906 445.254 72.16 456 58.906 456Z" })
  }
));
WrenchSolid.displayName = "WrenchSolid";
var Wrench_default = WrenchSolid;
