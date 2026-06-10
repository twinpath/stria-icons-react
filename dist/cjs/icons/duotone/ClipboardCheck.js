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
var ClipboardCheck_exports = {};
__export(ClipboardCheck_exports, {
  default: () => ClipboardCheck_default
});
module.exports = __toCommonJS(ClipboardCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 64H256C291.346 64 320 92.652 320 128V144C320 152.836 312.836 160 304 160H80C71.164 160 64 152.836 64 144V128C64 92.652 92.654 64 128 64H48C21.49 64 0 85.492 0 112V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V112C384 85.492 362.51 64 336 64ZM282.875 278.812L194.873 390.812C190.826 395.969 184.857 399.25 178.342 399.875C177.561 399.969 176.779 400 175.998 400C170.295 400 164.748 397.969 160.373 394.219L104.373 346.219C94.311 337.594 93.154 322.437 101.779 312.375C110.389 302.312 125.545 301.156 135.623 309.781L172.607 341.469L245.125 249.187C253.313 238.75 268.422 236.969 278.828 245.125C289.25 253.312 291.062 268.406 282.875 278.812Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C256 28.652 227.346 0 192 0S128 28.652 128 64C92.654 64 64 92.652 64 128V144C64 152.836 71.164 160 80 160H304C312.836 160 320 152.836 320 144V128C320 92.652 291.346 64 256 64ZM192 88C178.746 88 168 77.254 168 64C168 50.742 178.746 40 192 40S216 50.742 216 64C216 77.254 205.254 88 192 88ZM245.125 249.188L172.607 341.469L135.623 309.781C125.545 301.156 110.389 302.312 101.779 312.375C93.154 322.438 94.311 337.594 104.373 346.219L160.373 394.219C164.748 397.969 170.295 400 175.998 400C176.779 400 177.561 399.969 178.342 399.875C184.857 399.25 190.826 395.969 194.873 390.813L282.875 278.813C291.063 268.406 289.25 253.313 278.828 245.125C268.422 236.969 253.312 238.75 245.125 249.188Z" })
    ]
  }
));
ClipboardCheckDuotone.displayName = "ClipboardCheckDuotone";
var ClipboardCheck_default = ClipboardCheckDuotone;
