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
var SuitcaseRolling_exports = {};
__export(SuitcaseRolling_exports, {
  default: () => SuitcaseRolling_default
});
module.exports = __toCommonJS(SuitcaseRolling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SuitcaseRollingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 48H240V128H288V48C288 21.5 266.5 0 240 0H144C117.5 0 96 21.5 96 48V128H144V48ZM64 496C64 504.875 71.125 512 80 512H112C120.875 512 128 504.875 128 496V480H64V496ZM256 496C256 504.875 263.125 512 272 512H304C312.875 512 320 504.875 320 496V480H256V496ZM304 352H80C71.199 352 64 359.199 64 368C64 376.799 71.199 384 80 384H304C312.801 384 320 376.799 320 368C320 359.199 312.801 352 304 352ZM80 256H304C312.801 256 320 248.799 320 240C320 231.199 312.801 224 304 224H80C71.199 224 64 231.199 64 240C64 248.799 71.199 256 80 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 128H48C21.5 128 0 149.5 0 176V432C0 458.5 21.5 480 48 480H336C362.5 480 384 458.5 384 432V176C384 149.5 362.5 128 336 128ZM304 384H80C71.199 384 64 376.799 64 368C64 359.199 71.199 352 80 352H304C312.801 352 320 359.199 320 368C320 376.799 312.801 384 304 384ZM304 256H80C71.199 256 64 248.799 64 240C64 231.199 71.199 224 80 224H304C312.801 224 320 231.199 320 240C320 248.799 312.801 256 304 256Z" })
    ]
  }
));
SuitcaseRollingDuotone.displayName = "SuitcaseRollingDuotone";
var SuitcaseRolling_default = SuitcaseRollingDuotone;
