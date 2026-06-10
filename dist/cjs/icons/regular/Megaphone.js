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
var Megaphone_exports = {};
__export(Megaphone_exports, {
  default: () => Megaphone_default
});
module.exports = __toCommonJS(Megaphone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MegaphoneRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M552 32C538.744 32 528 42.744 528 56V59.562L46.961 194.855C44.543 184.158 35.43 176 24 176C10.746 176 0 186.744 0 200V312C0 325.254 10.746 336 24 336C35.43 336 44.543 327.844 46.961 317.145L167.891 351.156C162.854 362.654 160 375.125 160 388C160 438.734 201.266 480 252 480C298.51 480 336.654 445.199 342.752 400.336L528 452.438V456C528 469.254 538.744 480 552 480C565.254 480 576 469.254 576 456V56C576 42.744 565.254 32 552 32ZM296 388C296 412.266 276.266 432 252 432S208 412.266 208 388C208 379.514 210.648 371.441 215.119 364.439L295.873 387.152C295.879 387.441 296 387.711 296 388ZM48 267.562V244.438L528 109.438V402.562L48 267.562Z" })
  }
));
MegaphoneRegular.displayName = "MegaphoneRegular";
var Megaphone_default = MegaphoneRegular;
