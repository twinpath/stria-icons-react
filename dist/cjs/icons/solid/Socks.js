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
var Socks_exports = {};
__export(Socks_exports, {
  default: () => Socks_default
});
module.exports = __toCommonJS(Socks_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SocksSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.994 32C287.994 21 291.119 10.75 295.994 1.625C293.369 0.875 290.869 0 287.994 0H159.99C142.365 0 127.99 14.375 127.99 32V64H287.994V32ZM214.617 311L287.994 256V96H127.99V272L41.363 336.625C1.986 366.125 -12.514 421 12.111 463.625C30.363 495.25 63.238 512 96.115 512C116.115 512 136.365 505.75 153.615 492.75L175.492 476.375C145.615 421 161.867 350.625 214.617 311ZM319.996 272L233.867 336.625C194.492 366.125 179.992 421 204.617 463.625C222.867 495.25 255.244 512 288.119 512C308.119 512 328.371 505.75 345.621 492.75L460.75 406.375C493 382.25 512 344.25 512 304V96H319.996V272ZM480 0H351.996C334.371 0 319.996 14.375 319.996 32V64H512V32C512 14.375 497.625 0 480 0Z" })
  }
));
SocksSolid.displayName = "SocksSolid";
var Socks_default = SocksSolid;
