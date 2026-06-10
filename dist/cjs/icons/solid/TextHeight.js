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
var TextHeight_exports = {};
__export(TextHeight_exports, {
  default: () => TextHeight_default
});
module.exports = __toCommonJS(TextHeight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextHeightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 32H40C17.906 32 0 49.906 0 72V120C0 142.094 17.906 160 40 160S80 142.094 80 120V112H120.643C120.551 113.107 120 114.057 120 115.188V416H96C78.328 416 64 430.312 64 448S78.328 480 96 480H224C241.672 480 256 465.688 256 448S241.672 416 224 416H200V115.188C200 114.057 199.449 113.107 199.357 112H240V120C240 142.094 257.906 160 280 160S320 142.094 320 120V72C320 49.906 302.094 32 280 32ZM559.996 368.031H511.998V143.969H559.996C574.246 143.969 581.371 126.713 571.246 116.711L491.25 36.688C485 30.438 475.002 30.438 468.752 36.688L388.754 116.711C379.379 125.963 384.379 143.969 400.004 143.969H448.002V368.031H400.004C385.754 368.031 378.629 385.285 388.754 395.289L468.752 475.311C475.002 481.562 485 481.562 491.25 475.311L571.246 395.289C580.621 386.035 575.621 368.031 559.996 368.031Z" })
  }
));
TextHeightSolid.displayName = "TextHeightSolid";
var TextHeight_default = TextHeightSolid;
