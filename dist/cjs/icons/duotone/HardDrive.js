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
var HardDrive_exports = {};
__export(HardDrive_exports, {
  default: () => HardDrive_default
});
module.exports = __toCommonJS(HardDrive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HardDriveDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 32H48C21.5 32 0 53.5 0 80V336C0 309.5 21.5 288 48 288H464C490.5 288 512 309.5 512 336V80C512 53.5 490.5 32 464 32ZM320 352C302.375 352 288 366.375 288 384S302.375 416 320 416S352 401.625 352 384S337.625 352 320 352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 288H48C21.5 288 0 309.5 0 336V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V336C512 309.5 490.5 288 464 288ZM320 416C302.375 416 288 401.625 288 384S302.375 352 320 352S352 366.375 352 384S337.625 416 320 416ZM416 416C398.375 416 384 401.625 384 384S398.375 352 416 352S448 366.375 448 384S433.625 416 416 416Z" })
    ]
  }
));
HardDriveDuotone.displayName = "HardDriveDuotone";
var HardDrive_default = HardDriveDuotone;
