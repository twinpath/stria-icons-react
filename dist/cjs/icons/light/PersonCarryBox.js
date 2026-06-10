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
var PersonCarryBox_exports = {};
__export(PersonCarryBox_exports, {
  default: () => PersonCarryBox_default
});
module.exports = __toCommonJS(PersonCarryBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonCarryBoxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M88 112C118.875 112 144 86.875 144 56S118.875 0 88 0S32 25.125 32 56S57.125 112 88 112ZM88 32C101.234 32 112 42.766 112 56S101.234 80 88 80S64 69.234 64 56S74.766 32 88 32ZM16 352C7.156 352 0 359.156 0 368V496C0 504.844 7.156 512 16 512S32 504.844 32 496V368C32 359.156 24.844 352 16 352ZM336 96H240C213.531 96 192 117.531 192 144V240C192 245.637 193.154 250.971 194.947 256H179.781C173.672 256 168.188 252.609 165.469 247.156L123.984 164.172C112.828 141.859 90.391 128 65.438 128C29.359 128 0 157.359 0 193.438V285.422C0 302.594 9.266 318.578 24.188 327.109L114.141 378.5L144.484 499.875C146.297 507.156 152.812 512 159.984 512C161.266 512 162.578 511.844 163.875 511.516C172.453 509.375 177.672 500.688 175.516 492.125L143.516 364.125C142.469 359.891 139.719 356.266 135.937 354.109L40.078 299.328C35.094 296.484 32 291.156 32 285.422V193.438C32 175 47 160 65.438 160C78.188 160 89.656 167.078 95.359 178.484L136.844 261.469C145.031 277.828 161.484 288 179.781 288H336C362.469 288 384 266.469 384 240V144C384 117.531 362.469 96 336 96ZM352 240C352 248.828 344.828 256 336 256H240C231.172 256 224 248.828 224 240V144C224 135.172 231.172 128 240 128H336C344.828 128 352 135.172 352 144V240Z" })
  }
));
PersonCarryBoxLight.displayName = "PersonCarryBoxLight";
var PersonCarryBox_default = PersonCarryBoxLight;
