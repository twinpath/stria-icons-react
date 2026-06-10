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
var PalletBoxes_exports = {};
__export(PalletBoxes_exports, {
  default: () => PalletBoxes_default
});
module.exports = __toCommonJS(PalletBoxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PalletBoxesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 496H552V368H632C636 368 640 364 640 360S636 352 632 352H8C4 352 0 356 0 360S4 368 8 368H88V496H8C4 496 0 500 0 504S4 512 8 512H632C636 512 640 508 640 504S636 496 632 496ZM312 496H104V368H312V496ZM536 496H328V368H536V496ZM112 288H272C298 288 320 266 320 240V48C320 22 298 0 272 0H112C86 0 64 22 64 48V240C64 266 86 288 112 288ZM80 48C80 30 94 16 112 16H272C290 16 304 30 304 48V240C304 258 290 272 272 272H112C94 272 80 258 80 240V48ZM432 288H528C554 288 576 266 576 240V112C576 86 554 64 528 64H432C406 64 384 86 384 112V240C384 266 406 288 432 288ZM400 112C400 94 414 80 432 80H528C546 80 560 94 560 112V240C560 258 546 272 528 272H432C414 272 400 258 400 240V112Z" })
  }
));
PalletBoxesThin.displayName = "PalletBoxesThin";
var PalletBoxes_default = PalletBoxesThin;
