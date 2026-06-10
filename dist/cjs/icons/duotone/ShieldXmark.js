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
var ShieldXmark_exports = {};
__export(ShieldXmark_exports, {
  default: () => ShieldXmark_default
});
module.exports = __toCommonJS(ShieldXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShieldXmarkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M466.5 83.68L274.5 3.672C269.625 1.641 261.344 0 256.062 0C250.75 0 242.5 1.641 237.594 3.672L45.594 83.68C27.688 91.07 16 108.574 16 127.984C16 385.157 205.164 512 255.953 512C307.975 512 496 383.813 496 127.984C496 108.574 484.312 91.07 466.5 83.68ZM336.969 303.031C341.656 307.719 344 313.859 344 320C344 333.697 332.798 344 320.001 344C313.859 344 307.719 341.655 303.031 336.969L256 289.938L208.969 336.969C204.279 341.657 198.14 344 192.001 344C178.317 344 168 332.817 168 320C168 313.859 170.344 307.719 175.031 303.031L222.062 256L175.031 208.969C170.344 204.281 168 198.141 168 192C168 179.21 178.298 168 192 168C198.141 168 204.281 170.344 208.969 175.031L256 222.062L303.031 175.031C307.719 170.344 313.859 168 320 168C333.709 168 344 179.21 344 192C344 198.141 341.656 204.281 336.969 208.969L289.938 256L336.969 303.031Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.969 303.031C341.656 307.719 344 313.859 344 320C344 333.697 332.798 344 320.001 344C313.859 344 307.719 341.655 303.031 336.969L256 289.938L208.969 336.969C204.279 341.657 198.14 344 192.001 344C178.317 344 168 332.817 168 320C168 313.859 170.344 307.719 175.031 303.031L222.062 256L175.031 208.969C170.344 204.281 168 198.141 168 192C168 179.21 178.298 168 192 168C198.141 168 204.281 170.344 208.969 175.031L256 222.062L303.031 175.031C307.719 170.344 313.859 168 320 168C333.709 168 344 179.21 344 192C344 198.141 341.656 204.281 336.969 208.969L289.938 256L336.969 303.031Z " })
    ]
  }
));
ShieldXmarkDuotone.displayName = "ShieldXmarkDuotone";
var ShieldXmark_default = ShieldXmarkDuotone;
