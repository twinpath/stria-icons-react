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
var FireExtinguisher_exports = {};
__export(FireExtinguisher_exports, {
  default: () => FireExtinguisher_default
});
module.exports = __toCommonJS(FireExtinguisher_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireExtinguisherDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64.002 480C64.002 497.672 78.328 512 96.001 512H256.001C273.675 512 288.001 497.672 288.001 480V416H64.002V480ZM128.001 108.047V58.812C69.589 69.32 20.5 110.617 1.236 168.406C-2.951 181 3.845 194.594 16.408 198.781C18.939 199.594 21.486 200 24.002 200C34.049 200 43.423 193.656 46.767 183.594C59.447 145.516 90.47 117.773 128.001 108.047ZM224.001 56V104H288.001V56H224.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.373 5.562C497.92 1.031 490.764 -0.844 483.702 0.375L307.702 32.375C296.296 34.469 287.999 44.406 287.999 56V104C287.999 115.594 296.296 125.531 307.702 127.625L483.702 159.625C485.139 159.875 486.577 160 487.999 160C493.577 160 499.03 158.062 503.373 154.438C508.842 149.875 511.998 143.125 511.998 136V24C511.998 16.875 508.842 10.125 503.373 5.562ZM223.999 139.191V32C223.999 14.326 209.673 0 192 0H160C142.326 0 128 14.326 128 32V139.191C90.264 157.205 64 195.396 64 240V416H287.999V240C287.999 195.396 261.736 157.205 223.999 139.191ZM176 96C167.164 96 160 88.836 160 80C160 71.162 167.164 64 176 64S192 71.162 192 80C192 88.836 184.836 96 176 96Z" })
    ]
  }
));
FireExtinguisherDuotone.displayName = "FireExtinguisherDuotone";
var FireExtinguisher_default = FireExtinguisherDuotone;
