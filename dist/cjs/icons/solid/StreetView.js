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
var StreetView_exports = {};
__export(StreetView_exports, {
  default: () => StreetView_default
});
module.exports = __toCommonJS(StreetView_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StreetViewSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 304L204.496 403.969C206.498 419.983 220.111 432 236.249 432H275.751C291.889 432 305.502 419.983 307.504 403.969L320 304C337.674 304 352 289.672 352 272V224C352 188.654 323.346 160 288 160H224C188.654 160 160 188.654 160 224V272C160 289.672 174.326 304 192 304ZM256 128C291.375 128 320 99.375 320 64S291.375 0 256 0S192 28.625 192 64S220.625 128 256 128ZM368 343.932V389.641C419.977 395.252 464 405.697 464 424C464 455.576 333.252 464 256 464C178.75 464 48 455.576 48 424C48 404.295 98.686 394.422 144 389.51V343.703C83.852 352.482 0 373.754 0 424C0 493.469 160.922 512 256 512S512 493.469 512 424C512 378.375 442.584 354.785 368 343.932Z" })
  }
));
StreetViewSolid.displayName = "StreetViewSolid";
var StreetView_default = StreetViewSolid;
