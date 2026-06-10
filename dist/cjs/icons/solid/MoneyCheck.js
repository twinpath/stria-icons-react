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
var MoneyCheck_exports = {};
__export(MoneyCheck_exports, {
  default: () => MoneyCheck_default
});
module.exports = __toCommonJS(MoneyCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyCheckSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 64H48C21.6 64 0 85.6 0 112V400C0 426.51 21.49 448 48 448H528C554.51 448 576 426.51 576 400V112C576 85.49 554.51 64 528 64ZM256 336C256 344.837 248.837 352 240 352H80C71.163 352 64 344.837 64 336V336C64 327.163 71.163 320 80 320H240C248.837 320 256 327.163 256 336V336ZM320 240C320 248.837 312.837 256 304 256H80C71.163 256 64 248.837 64 240V240C64 231.163 71.163 224 80 224H304C312.837 224 320 231.163 320 240V240ZM512 336C512 344.837 504.837 352 496 352H400C391.163 352 384 344.837 384 336V336C384 327.163 391.163 320 400 320H496C504.837 320 512 327.163 512 336V336ZM512 240C512 248.836 504.836 256 496 256H400C391.164 256 384 248.836 384 240V208C384 199.162 391.164 192 400 192H496C504.836 192 512 199.162 512 208V240Z" })
  }
));
MoneyCheckSolid.displayName = "MoneyCheckSolid";
var MoneyCheck_default = MoneyCheckSolid;
