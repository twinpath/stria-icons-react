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
var Vials_exports = {};
__export(Vials_exports, {
  default: () => Vials_default
});
module.exports = __toCommonJS(Vials_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VialsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 32H312C298.801 32 288 42.799 288 56C288 69.199 298.801 80 312 80H320V396.459C320 438.223 350.467 475.574 392.033 479.611C439.723 484.244 480 446.754 480 400V80H488C501.199 80 512 69.199 512 56C512 42.799 501.199 32 488 32ZM432 256H368V80H432V256ZM200 32H24C10.801 32 0 42.799 0 56C0 69.199 10.801 80 24 80H32V396.459C32 438.223 62.467 475.574 104.033 479.611C151.723 484.244 192 446.754 192 400V80H200C213.199 80 224 69.199 224 56C224 42.799 213.199 32 200 32ZM144 256H80V80H144V256Z" })
  }
));
VialsRegular.displayName = "VialsRegular";
var Vials_default = VialsRegular;
