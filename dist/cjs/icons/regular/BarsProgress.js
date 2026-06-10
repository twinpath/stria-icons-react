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
var BarsProgress_exports = {};
__export(BarsProgress_exports, {
  default: () => BarsProgress_default
});
module.exports = __toCommonJS(BarsProgress_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BarsProgressRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 32H24C10.75 32 0 44 0 59V133C0 148 10.75 160 24 160H488C501.25 160 512 148 512 133V59C512 44 501.25 32 488 32ZM464 112H352V80H464V112ZM488 352H24C10.75 352 0 364 0 379V453C0 468 10.75 480 24 480H488C501.25 480 512 468 512 453V379C512 364 501.25 352 488 352ZM464 432H288V400H464V432ZM488 192H24C10.75 192 0 204 0 219V293C0 308 10.75 320 24 320H488C501.25 320 512 308 512 293V219C512 204 501.25 192 488 192ZM464 272H160V240H464V272Z" })
  }
));
BarsProgressRegular.displayName = "BarsProgressRegular";
var BarsProgress_default = BarsProgressRegular;
