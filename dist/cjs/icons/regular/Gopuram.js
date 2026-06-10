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
var Gopuram_exports = {};
__export(Gopuram_exports, {
  default: () => Gopuram_default
});
module.exports = __toCommonJS(Gopuram_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GopuramRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 352H480V240C480 231.163 472.837 224 464 224H448V144C448 135.163 440.837 128 432 128H416V24C416 10.75 405.25 0 392 0S368 10.75 368 24V32H320V24C320 10.75 309.25 0 296 0S272 10.75 272 24V32H240V24C240 10.75 229.25 0 216 0S192 10.75 192 24V32H144V24C144 10.75 133.25 0 120 0S96 10.75 96 24V128H80C71.163 128 64 135.163 64 144V224H48C39.163 224 32 231.163 32 240V352H16C7.163 352 0 359.163 0 368V488C0 501.255 10.745 512 24 512H24C37.255 512 48 501.255 48 488V400H96V496C96 504.8 103.2 512 112 512H112C120.8 512 128 504.8 128 496V400H384V496C384 504.8 391.2 512 400 512H400C408.8 512 416 504.8 416 496V400H464V488C464 501.255 474.745 512 488 512L488 512C501.255 512 512 501.255 512 488V368C512 359.163 504.837 352 496 352ZM144 80H368V128H144V80ZM264 200H248C239.125 200 232 207.125 232 216V224H192V176H320V224H280V216C280 207.125 272.875 200 264 200ZM112 176H160V224H112V176ZM128 352H80V272H128V352ZM352 352H288V320C288 311.125 280.875 304 272 304H240C231.125 304 224 311.125 224 320V352H160V272H352V352ZM352 224V176H400V224H352ZM432 352H384V272H432V352ZM288 432H224C215.163 432 208 439.163 208 448V496C208 504.837 215.163 512 224 512H288C296.837 512 304 504.837 304 496V448C304 439.163 296.837 432 288 432Z" })
  }
));
GopuramRegular.displayName = "GopuramRegular";
var Gopuram_default = GopuramRegular;
