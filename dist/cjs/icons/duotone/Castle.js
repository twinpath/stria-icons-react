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
var Castle_exports = {};
__export(Castle_exports, {
  default: () => Castle_default
});
module.exports = __toCommonJS(Castle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CastleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 224.029V16.029C128 7.191 135.164 0.029 144 0.029H192C200.836 0.029 208 7.191 208 16.029V64.029H240V16.029C240 7.191 247.164 0.029 256 0.029H288C296.836 0.029 304 7.191 304 16.029V64.029H336V16.029C336 7.191 343.164 0.029 352 0.029H384C392.836 0.029 400 7.191 400 16.029V64.029H432V16.029C432 7.191 439.164 0.029 448 0.029H496C504.836 0.029 512 7.191 512 16.029V224.029H128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 176.029V480.029C640 497.701 625.674 512.029 608 512.029H384V384.029C384 348.681 355.346 320.029 320 320.029S256 348.681 256 384.029V512.029H32C14.326 512.029 0 497.701 0 480.029V176.029C0 167.191 7.164 160.029 16 160.029H64C72.836 160.029 80 167.191 80 176.029V224.029H560V176.029C560 167.191 567.164 160.029 576 160.029H624C632.836 160.029 640 167.191 640 176.029Z" })
    ]
  }
));
CastleDuotone.displayName = "CastleDuotone";
var Castle_default = CastleDuotone;
