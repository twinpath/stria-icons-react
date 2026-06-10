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
var Vault_exports = {};
__export(Vault_exports, {
  default: () => Vault_default
});
module.exports = __toCommonJS(Vault_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VaultLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 80C135.635 80 64 151.635 64 240C64 328.363 135.635 400 224 400S384 328.363 384 240C384 151.635 312.365 80 224 80ZM224 368C153.42 368 96 310.58 96 240S153.42 112 224 112S352 169.42 352 240S294.58 368 224 368ZM224 176C188.719 176 160 204.703 160 240S188.719 304 224 304S288 275.297 288 240S259.281 176 224 176ZM224 272C206.344 272 192 257.641 192 240S206.344 208 224 208S256 222.359 256 240S241.656 272 224 272ZM512 0H64C28.654 0 0 28.652 0 64V416C0 451.346 28.654 480 64 480V496C64 504.836 71.164 512 80 512S96 504.836 96 496V480H480V496C480 504.836 487.164 512 496 512S512 504.836 512 496V480C547.346 480 576 451.346 576 416V64C576 28.652 547.346 0 512 0ZM544 416C544 433.645 529.645 448 512 448H64C46.355 448 32 433.645 32 416V64C32 46.355 46.355 32 64 32H512C529.645 32 544 46.355 544 64V416ZM464 128C437.531 128 416 149.531 416 176C416 196.832 429.416 214.426 448 221.053V336C448 344.844 455.156 352 464 352S480 344.844 480 336V221.053C498.584 214.426 512 196.832 512 176C512 149.531 490.469 128 464 128ZM464 192C455.188 192 448 184.828 448 176S455.188 160 464 160S480 167.172 480 176S472.812 192 464 192Z" })
  }
));
VaultLight.displayName = "VaultLight";
var Vault_default = VaultLight;
