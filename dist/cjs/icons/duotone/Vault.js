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
const VaultDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0H64C28.654 0 0 28.652 0 64V416C0 451.346 28.654 480 64 480H80L96 512H160L176 480H400L416 512H480L496 480H512C547.346 480 576 451.346 576 416V64C576 28.652 547.346 0 512 0ZM224 400C135.635 400 64 328.365 64 240S135.635 80 224 80S384 151.635 384 240S312.365 400 224 400ZM480 221.062V336C480 344.844 472.844 352 464 352S448 344.844 448 336V221.062C429.4 214.451 416 196.869 416 176C416 149.49 437.49 128 464 128S512 149.49 512 176C512 196.869 498.6 214.451 480 221.062Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 80C135.633 80 64 151.633 64 240C64 328.363 135.633 400 224 400S384 328.363 384 240C384 151.633 312.367 80 224 80ZM224 304C188.654 304 160 275.346 160 240C160 204.652 188.654 176 224 176S288 204.652 288 240C288 275.346 259.346 304 224 304ZM464 128C437.49 128 416 149.49 416 176C416 196.869 429.4 214.451 448 221.062V336C448 344.844 455.156 352 464 352S480 344.844 480 336V221.062C498.6 214.451 512 196.869 512 176C512 149.49 490.51 128 464 128Z" })
    ]
  }
));
VaultDuotone.displayName = "VaultDuotone";
var Vault_default = VaultDuotone;
