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
var NoteMedical_exports = {};
__export(NoteMedical_exports, {
  default: () => NoteMedical_default
});
module.exports = __toCommonJS(NoteMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NoteMedicalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.348 28.654 480 64 480H293.49C310.465 480 326.744 473.258 338.746 461.254L429.256 370.746C441.258 358.742 448 342.465 448 325.492V96C448 60.652 419.348 32 384 32ZM320 434.742V368C320 359.172 327.188 352 336 352H402.746L320 434.742ZM416 320H336C309.531 320 288 341.531 288 368V448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V320ZM304 192H256V144C256 135.164 248.836 128 240 128H208C199.164 128 192 135.164 192 144V192H144C135.164 192 128 199.164 128 208V240C128 248.836 135.164 256 144 256H192V304C192 312.836 199.164 320 208 320H240C248.836 320 256 312.836 256 304V256H304C312.836 256 320 248.836 320 240V208C320 199.164 312.836 192 304 192Z" })
  }
));
NoteMedicalLight.displayName = "NoteMedicalLight";
var NoteMedical_default = NoteMedicalLight;
