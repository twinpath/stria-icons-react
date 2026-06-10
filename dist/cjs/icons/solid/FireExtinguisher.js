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
const FireExtinguisherSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64.002 480C64.002 497.672 78.328 512 96.001 512H256.001C273.675 512 288.001 497.672 288.001 480V448H64.002V480ZM503.375 5.562C497.922 1.031 490.766 -0.844 483.703 0.375L307.704 32.375C296.298 34.469 288.001 44.406 288.001 56H224.001V32C224.001 14.328 209.675 0 192.001 0H160.001C142.327 0 128.001 14.328 128.001 32V58.812C69.589 69.32 20.5 110.617 1.236 168.406C-2.951 181 3.845 194.594 16.408 198.781C18.939 199.594 21.486 200 24.002 200C34.049 200 43.423 193.656 46.767 183.594C59.447 145.516 90.47 117.773 128.001 108.047V139.191C90.267 157.207 64.002 195.398 64.002 240V416H288.001V240C288.001 195.398 261.735 157.207 224.001 139.191V104H288.001C288.001 115.594 296.298 125.531 307.704 127.625L483.703 159.625C485.141 159.875 486.578 160 488 160C493.578 160 499.031 158.062 503.375 154.438C508.844 149.875 512 143.125 512 136V24C512 16.875 508.844 10.125 503.375 5.562ZM176.001 96C167.165 96 160.001 88.836 160.001 80S167.165 64 176.001 64S192.001 71.164 192.001 80S184.837 96 176.001 96Z" })
  }
));
FireExtinguisherSolid.displayName = "FireExtinguisherSolid";
var FireExtinguisher_default = FireExtinguisherSolid;
