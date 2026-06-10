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
var RightToBracket_exports = {};
__export(RightToBracket_exports, {
  default: () => RightToBracket_default
});
module.exports = __toCommonJS(RightToBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightToBracketSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344.73 238.547L200.629 102.547C193.654 95.969 183.428 94.172 174.625 97.953C165.822 101.75 160.115 110.422 160.115 120V192H32.023C14.336 192 0 206.328 0 224V288C0 305.676 14.336 320 32.023 320H160.115V392C160.115 401.578 165.822 410.25 174.625 414.047C183.428 417.828 193.654 416.031 200.629 409.453L344.73 273.453C354.332 264.391 354.332 247.609 344.73 238.547ZM416 32H352C334.326 32 320 46.328 320 64S334.326 96 352 96H416C433.674 96 448 110.328 448 128V384C448 401.672 433.674 416 416 416H352C334.326 416 320 430.328 320 448S334.326 480 352 480H416C469.02 480 512 437.02 512 384V128C512 74.98 469.02 32 416 32Z" })
  }
));
RightToBracketSolid.displayName = "RightToBracketSolid";
var RightToBracket_default = RightToBracketSolid;
