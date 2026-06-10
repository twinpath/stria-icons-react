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
var BellExclamation_exports = {};
__export(BellExclamation_exports, {
  default: () => BellExclamation_default
});
module.exports = __toCommonJS(BellExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellExclamationThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 440C275.594 440 272 443.578 272 448C272 474.469 250.469 496 224 496S176 474.469 176 448C176 443.578 172.406 440 168 440S160 443.578 160 448C160 483.297 188.719 512 224 512S288 483.297 288 448C288 443.578 284.406 440 280 440ZM439.375 362.25C420.125 341.5 383.875 310.25 383.875 208C383.875 130.25 329.5 68.125 256 52.875V32C256 14.375 241.625 0 224 0S192 14.375 192 32V52.875C118.5 68.125 64.125 130.25 64.125 208C64.125 310.25 27.875 341.5 8.625 362.25C2.625 368.75 0 376.5 0 384C0.125 400.375 13 416 32.125 416H415.875C435 416 447.875 400.375 448 384C448 376.5 445.375 368.75 439.375 362.25ZM415.875 400H32.125C22.109 400 16.061 391.803 16 384C16 377.023 19.822 373.695 24.092 369.166C45.049 347.088 80.125 310.137 80.125 208C80.125 143.277 119.844 84.182 208 65.896V32C208 23.178 215.178 16 224 16S240 23.178 240 32V65.896C328.752 84.305 367.875 144.066 367.875 208C367.875 310.137 402.951 347.088 423.908 369.166C427.789 373.285 432 376.914 432 383.877C431.939 391.803 425.891 400 415.875 400ZM224 304C215.178 304 208 311.18 208 320S215.178 336 224 336S240 328.82 240 320S232.822 304 224 304ZM223.938 271.959C228.344 271.959 231.938 268.365 231.938 263.959V135.959C231.938 131.553 228.344 127.959 223.938 127.959S215.938 131.553 215.938 135.959V263.959C215.938 268.365 219.531 271.959 223.938 271.959Z" })
  }
));
BellExclamationThin.displayName = "BellExclamationThin";
var BellExclamation_default = BellExclamationThin;
