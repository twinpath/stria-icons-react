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
var FaceFrown_exports = {};
__export(FaceFrown_exports, {
  default: () => FaceFrown_default
});
module.exports = __toCommonJS(FaceFrown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceFrownSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 256C496 388.581 388.581 496 256 496S16 388.581 16 256S123.419 16 256 16S496 123.419 496 256ZM370.688 373.797C342.312 339.594 300.406 320 256 320S169.688 339.594 141.188 373.703C127.688 390.001 152.312 410.5 165.812 394.203C188.188 367.406 221.094 352 256 352S323.812 367.406 346.188 394.203C359.688 410.5 384.312 390.001 370.688 373.797ZM144 208C144 225.703 158.312 240 176 240S208 225.703 208 208S193.688 176 176 176S144 190.297 144 208ZM304 208C304 225.703 318.312 240 336 240S368 225.703 368 208S353.688 176 336 176S304 190.297 304 208Z" })
  }
));
FaceFrownSolid.displayName = "FaceFrownSolid";
var FaceFrown_default = FaceFrownSolid;
