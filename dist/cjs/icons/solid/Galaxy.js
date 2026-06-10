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
var Galaxy_exports = {};
__export(Galaxy_exports, {
  default: () => Galaxy_default
});
module.exports = __toCommonJS(Galaxy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GalaxySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M506.632 274.126C489.757 202.998 431.255 146.247 359.628 131.996C325.627 124.996 290.501 127.371 257.75 138.622C265.25 89.37 297.501 47.494 343.253 27.868C356.628 22.118 353.628 2.368 339.252 0.992C317.377 -1.258 295.376 0.367 274.126 5.368C202.998 22.243 146.247 80.745 131.996 152.372C124.996 186.373 127.371 221.499 138.622 254.25C89.37 246.75 47.494 214.499 27.868 168.747C22.118 155.372 2.367 158.372 0.992 172.748C-1.258 194.623 0.367 216.624 5.368 237.874C22.243 309.002 80.745 365.753 152.372 380.004C186.373 387.004 221.499 384.629 254.25 373.378C246.75 422.63 214.499 464.506 168.747 484.132C155.372 489.882 158.372 509.633 172.748 511.008C194.623 513.258 216.624 511.633 237.874 506.632C309.002 489.757 365.753 431.255 380.004 359.628C387.004 325.627 384.629 290.501 373.378 257.75C422.63 265.25 464.506 297.501 484.132 343.253C489.882 356.628 509.633 353.628 511.008 339.252C513.258 317.377 511.633 295.376 506.632 274.126ZM256 304.001C229.499 304.001 207.999 282.501 207.999 256S229.499 207.999 256 207.999S304.001 229.499 304.001 256S282.501 304.001 256 304.001Z" })
  }
));
GalaxySolid.displayName = "GalaxySolid";
var Galaxy_default = GalaxySolid;
