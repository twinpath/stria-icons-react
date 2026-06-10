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
var DownFromLine_exports = {};
__export(DownFromLine_exports, {
  default: () => DownFromLine_default
});
module.exports = __toCommonJS(DownFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownFromLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M314.406 272H256V156.828C256 132.109 235.906 112 211.188 112H172.812C148.094 112 128 132.109 128 156.828V272H69.594C54.594 272 41.062 280.906 35.062 294.75C29.125 308.547 31.938 324.531 42.125 335.297L164.656 468.5C171.531 475.812 181.5 480 192 480S212.469 475.812 219.5 468.344L341.719 335.453C352.062 324.531 354.875 308.547 348.937 294.688C342.938 280.906 329.406 272 314.406 272ZM318.312 313.641L196.094 446.531C194.344 448.344 189.5 448.187 188.062 446.687L65.531 313.484C64 311.844 63.562 309.453 64.438 307.438C65.344 305.344 67.375 304 69.594 304H160V156.828C160 149.75 165.75 144 172.812 144H211.188C218.25 144 224 149.75 224 156.828V304H314.406C316.625 304 318.656 305.344 319.562 307.375C320.438 309.453 320 311.844 318.312 313.641ZM368 32H16C7.156 32 0 39.156 0 48S7.156 64 16 64H368C376.844 64 384 56.844 384 48S376.844 32 368 32Z" })
  }
));
DownFromLineLight.displayName = "DownFromLineLight";
var DownFromLine_default = DownFromLineLight;
