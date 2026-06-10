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
var MugTeaSaucer_exports = {};
__export(MugTeaSaucer_exports, {
  default: () => MugTeaSaucer_default
});
module.exports = __toCommonJS(MugTeaSaucer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugTeaSaucerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H112C103.199 32 96 39.199 96 48V288C96 341.02 138.98 384 192 384H384C437.02 384 480 341.02 480 288H506.381C573.209 288 632.955 239.219 639.385 172.701C646.762 96.385 586.814 32 512 32ZM432 288C432 314.4 410.4 336 384 336H192C165.6 336 144 314.4 144 288V80H216V120L185.373 150.627C179.371 156.629 176 164.768 176 173.254V224C176 241.672 190.326 256 208 256H256C273.674 256 288 241.672 288 224V173.254C288 164.768 284.629 156.629 278.627 150.627L248 120V80H432V288ZM512 240H480V80H512C556.125 80 592 115.875 592 160S556.125 240 512 240ZM576 456C576 469.254 565.254 480 552 480H24C10.746 480 0 469.254 0 456C0 442.744 10.746 432 24 432H552C565.254 432 576 442.744 576 456Z" })
  }
));
MugTeaSaucerRegular.displayName = "MugTeaSaucerRegular";
var MugTeaSaucer_default = MugTeaSaucerRegular;
