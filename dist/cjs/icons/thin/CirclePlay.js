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
var CirclePlay_exports = {};
__export(CirclePlay_exports, {
  default: () => CirclePlay_default
});
module.exports = __toCommonJS(CirclePlay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CirclePlayThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM228.516 147.527C224.684 145.188 220.35 144.012 216.006 144.012C202.197 144.012 192 155.314 192 168.004V344.004C192 356.807 202.307 368.004 216 368.004C220.344 368.004 224.68 366.824 228.516 364.48L372.516 276.48C379.648 272.121 384 264.363 384 256.004S379.648 239.887 372.516 235.527L228.516 147.527ZM364.172 262.828L220.174 350.826C218.914 351.596 217.471 352.004 216 352.004C211.059 352.004 208 347.852 208 344.004V168.004C208 164.16 211.061 160.012 216.006 160.012C217.48 160.012 218.924 160.418 220.172 161.18L364.172 249.18C366.533 250.623 368 253.238 368 256.004S366.533 261.385 364.172 262.828Z" })
  }
));
CirclePlayThin.displayName = "CirclePlayThin";
var CirclePlay_default = CirclePlayThin;
