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
var SignHanging_exports = {};
__export(SignHanging_exports, {
  default: () => SignHanging_default
});
module.exports = __toCommonJS(SignHanging_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignHangingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 64H112V24C112 10.8 101.2 0 88 0H88C74.8 0 64 10.8 64 24V64H24C10.8 64 0 74.8 0 88V88C0 101.2 10.8 112 24 112H64V488C64 501.2 74.8 512 88 512H88C101.2 512 112 501.2 112 488V112H192V160C174.25 160 160 174.25 160 192V352C160 369.673 174.327 384 192 384H448C465.673 384 480 369.673 480 352V192C480 174.25 465.75 160 448 160V112H488C501.2 112 512 101.2 512 88V88C512 74.8 501.2 64 488 64ZM432 336H208V208H432V336ZM416 160H224V112H416V160Z" })
  }
));
SignHangingRegular.displayName = "SignHangingRegular";
var SignHanging_default = SignHangingRegular;
