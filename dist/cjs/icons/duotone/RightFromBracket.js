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
var RightFromBracket_exports = {};
__export(RightFromBracket_exports, {
  default: () => RightFromBracket_default
});
module.exports = __toCommonJS(RightFromBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightFromBracketDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 480H160C177.673 480 192 465.673 192 448V448C192 430.327 177.673 416 160 416H96C78.327 416 64 401.673 64 384V128C64 110.327 78.327 96 96 96H160C177.673 96 192 81.673 192 64V64C192 46.327 177.673 32 160 32H96C42.981 32 0 74.981 0 128V384C0 437.019 42.981 480 96 480Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.73 273.451L360.629 409.451C353.654 416.029 343.428 417.826 334.625 414.045C325.822 410.248 320.115 401.576 320.115 391.998V319.998H192.023C174.336 319.998 160 305.672 160 287.998V223.998C160 206.326 174.336 191.998 192.023 191.998H320.115V119.998C320.115 110.42 325.822 101.748 334.625 97.951C343.428 94.17 353.654 95.967 360.629 102.545L504.73 238.545C514.332 247.607 514.332 264.389 504.73 273.451Z" })
    ]
  }
));
RightFromBracketDuotone.displayName = "RightFromBracketDuotone";
var RightFromBracket_default = RightFromBracketDuotone;
