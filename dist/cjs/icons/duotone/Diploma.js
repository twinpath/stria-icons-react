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
var Diploma_exports = {};
__export(Diploma_exports, {
  default: () => Diploma_default
});
module.exports = __toCommonJS(Diploma_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiplomaDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M539.26 144H384V382.012L539.26 416C594.898 416 640 351.527 640 272C640 192.469 594.898 144 539.26 144ZM0 272C0 351.529 42.98 416 96 416L256 381.715V144H96C42.98 144 0 192.471 0 272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 112C480 123.398 477.494 134.189 473.156 144H400.002C417.676 144 432 129.674 432 112S417.676 80 400.002 80C384.076 80 372.328 82.639 331.127 144H384V480L320 448L256 480V144H308.873C267.674 82.639 255.924 80 240 80C222.326 80 208 94.326 208 112S222.326 144 240 144H166.844C162.506 134.189 160 123.398 160 112C160 68.148 195.676 32 239.529 32C272.305 32 294.473 47.084 320 78.949C345.527 47.084 367.695 32 400.473 32C444.324 32 480 68.148 480 112Z" })
    ]
  }
));
DiplomaDuotone.displayName = "DiplomaDuotone";
var Diploma_default = DiplomaDuotone;
