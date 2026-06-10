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
var RightFromLine_exports = {};
__export(RightFromLine_exports, {
  default: () => RightFromLine_default
});
module.exports = __toCommonJS(RightFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightFromLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 64H32C14.327 64 0 78.327 0 96V416C0 433.673 14.327 448 32 448H32C49.673 448 64 433.673 64 416V96C64 78.327 49.673 64 32 64ZM440.801 238.547L296.697 102.547C289.723 95.969 279.498 94.172 270.693 97.953C261.891 101.75 256.184 110.422 256.184 120V192H128.092C110.406 192 96.068 206.328 96.068 224V288C96.068 305.674 110.406 320 128.092 320H256.184V392C256.184 401.578 261.891 410.25 270.693 414.047C279.498 417.828 289.723 416.031 296.697 409.453L440.801 273.453C450.4 264.391 450.4 247.609 440.801 238.547Z" })
  }
));
RightFromLineSolid.displayName = "RightFromLineSolid";
var RightFromLine_default = RightFromLineSolid;
