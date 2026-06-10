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
var BooksMedical_exports = {};
__export(BooksMedical_exports, {
  default: () => BooksMedical_default
});
module.exports = __toCommonJS(BooksMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BooksMedicalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160.002 0H96C78.375 0 64 14.375 64 32V96H192.002V32C192.002 14.375 177.627 0 160.002 0ZM64 480C64 497.625 78.375 512 96 512H160.002C177.627 512 192.002 497.625 192.002 480V416H64V480ZM224.002 480C224.002 497.625 238.377 512 256.004 512H320.004C337.623 512 351.988 497.641 352 480.016V416H224.002V480ZM337.082 56.703C333.508 43.297 339.244 29.805 350.045 22.359C345.891 9.5 334.215 0 320.004 0H256.004C238.377 0 224.002 14.375 224.002 32V96H347.561L337.082 56.703ZM550.252 362.805L427.52 395.848L435.74 426.68L558.475 393.633L550.252 362.805ZM476.26 85.32L353.525 118.367L361.748 149.195L484.48 116.156L476.26 85.32ZM224.002 384H352V128H224.002V384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M79.998 352H111.996C120.832 352 127.996 344.836 127.996 336V288.004H175.994C184.83 288.004 191.994 280.84 191.994 272.004V240.004C191.994 231.168 184.83 224.004 175.994 224.004H127.996V176.008C127.996 167.172 120.832 160.008 111.996 160.008H79.998C71.162 160.008 63.998 167.172 63.998 176.008V224.004H16C7.164 224.004 0 231.168 0 240.004V272.004C0 280.84 7.164 288.004 16 288.004H63.998V336C63.998 344.836 71.162 352 79.998 352ZM224.002 416H352V384H224.002V416ZM64 416H192.002V384H64V416ZM64 128H192.002V96H64V128ZM574.918 455.297L558.475 393.633L435.74 426.68L452.184 488.344C456.711 505.32 474.188 515.461 491.088 510.914L552.455 494.391C569.355 489.836 579.445 472.273 574.918 455.297ZM484.48 116.156L361.748 149.195L427.52 395.848L550.252 362.805L484.48 116.156ZM459.816 23.656C455.289 6.68 437.812 -3.461 420.912 1.086L359.545 17.609C342.645 22.164 332.555 39.727 337.082 56.703L347.561 96H224.002V128H352V112.648L353.525 118.367L476.26 85.32L459.816 23.656Z" })
    ]
  }
));
BooksMedicalDuotone.displayName = "BooksMedicalDuotone";
var BooksMedical_default = BooksMedicalDuotone;
