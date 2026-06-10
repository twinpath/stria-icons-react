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
var MugTea_exports = {};
__export(MugTea_exports, {
  default: () => MugTea_default
});
module.exports = __toCommonJS(MugTea_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugTeaThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 64H56C49.625 64 43.5 66.5 39 71S32 81.625 32 88V352C32 405 75 448 128 448H320C373 448 416 405 416 352V288H464C525.75 288 576 237.75 576 176S525.75 64 464 64ZM400 352C400 396.111 364.111 432 320 432H128C83.889 432 48 396.111 48 352V88C48 82.871 52.172 80 56 80H152V120L105.373 166.627C99.371 172.629 96 180.768 96 189.254V256C96 273.674 110.328 288 128 288H192C209.674 288 224 273.674 224 256V189.254C224 180.768 220.629 172.629 214.629 166.627L168 120V80H400V352ZM160 134.627L203.312 177.939C206.336 180.963 208 184.98 208 189.254V256C208 264.822 200.822 272 192 272H128C119.178 272 112 264.822 112 256V189.254C112 184.98 113.666 180.963 116.686 177.941L160 134.627ZM464 272H416V80H464C516.938 80 560 123.062 560 176S516.938 272 464 272Z" })
  }
));
MugTeaThin.displayName = "MugTeaThin";
var MugTea_default = MugTeaThin;
