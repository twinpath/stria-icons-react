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
var Certificate_exports = {};
__export(Certificate_exports, {
  default: () => Certificate_default
});
module.exports = __toCommonJS(Certificate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CertificateSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.605 300.855C518.229 313.855 511.855 336.98 493.981 341.23L431.236 357.23L448.985 419.23C453.984 437.105 437.111 453.855 419.237 448.98L357.242 431.23L341.368 493.98C336.994 512.105 313.495 518.105 300.996 504.605L256 458.605L211.004 504.605C198.38 517.98 175.131 512.48 170.632 493.98L154.758 431.23L92.763 448.98C74.889 453.855 58.016 437.105 63.015 419.23L80.764 357.23L18.019 341.23C0.145 336.98 -6.354 313.855 7.395 300.855L53.391 255.855L7.395 210.855C-6.229 197.98 0.145 174.855 18.019 170.605L80.764 154.605L63.015 92.605C58.016 74.73 74.889 57.855 92.763 62.855L154.758 80.605L170.632 17.855C175.006 -0.02 198.38 -6.145 211.004 7.23L256 53.605L300.996 7.23C313.745 -6.27 337.119 0.23 341.368 17.855L357.242 80.605L419.237 62.855C437.111 57.855 453.984 74.73 448.985 92.605L431.236 154.605L493.981 170.605C511.855 174.855 518.354 197.98 504.605 210.855L458.609 255.855L504.605 300.855Z" })
  }
));
CertificateSolid.displayName = "CertificateSolid";
var Certificate_default = CertificateSolid;
