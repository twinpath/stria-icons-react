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
var Memory_exports = {};
__export(Memory_exports, {
  default: () => Memory_default
});
module.exports = __toCommonJS(Memory_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MemoryRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 162.938V112C576 85.49 554.51 64 528 64H48C21.49 64 0 85.49 0 112V162.938C18.6 169.549 32 187.131 32 208S18.6 246.451 0 253.062V416C0 433.674 14.328 448 32 448H544C561.674 448 576 433.674 576 416V253.062C557.4 246.451 544 228.869 544 208S557.4 169.549 576 162.938ZM528 400H472C472 386.75 461.25 376 448 376S424 386.75 424 400H392C392 386.75 381.25 376 368 376S344 386.75 344 400H312C312 386.75 301.25 376 288 376S264 386.75 264 400H232C232 386.75 221.25 376 208 376S184 386.75 184 400H152C152 386.75 141.25 376 128 376S104 386.75 104 400H48V352H528V400ZM528 136.672C508.08 154.516 496 180.285 496 208C496 235.713 508.08 261.484 528 279.328V304H48V279.328C67.922 261.484 80 235.713 80 208C80 180.285 67.922 154.516 48 136.672V112H528V136.672ZM160 272C173.25 272 184 261.25 184 248V168C184 154.75 173.25 144 160 144S136 154.75 136 168V248C136 261.25 146.75 272 160 272ZM288 272C301.25 272 312 261.25 312 248V168C312 154.75 301.25 144 288 144S264 154.75 264 168V248C264 261.25 274.75 272 288 272ZM416 272C429.25 272 440 261.25 440 248V168C440 154.75 429.25 144 416 144S392 154.75 392 168V248C392 261.25 402.75 272 416 272Z" })
  }
));
MemoryRegular.displayName = "MemoryRegular";
var Memory_default = MemoryRegular;
