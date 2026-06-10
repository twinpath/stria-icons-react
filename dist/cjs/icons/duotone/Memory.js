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
const MemoryDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 146.938V112C576 85.492 554.51 64 528 64H48C21.49 64 0 85.492 0 112V146.938C18.6 153.547 32 171.133 32 192S18.6 230.453 0 237.062V320H576V237.062C557.4 230.453 544 212.867 544 192S557.4 153.547 576 146.938ZM192 240C192 248.836 184.838 256 176 256H144C135.164 256 128 248.836 128 240V144C128 135.164 135.164 128 144 128H176C184.838 128 192 135.164 192 144V240ZM320 240C320 248.836 312.838 256 304 256H272C263.164 256 256 248.836 256 240V144C256 135.164 263.164 128 272 128H304C312.838 128 320 135.164 320 144V240ZM448 240C448 248.836 440.838 256 432 256H400C391.164 256 384 248.836 384 240V144C384 135.164 391.164 128 400 128H432C440.838 128 448 135.164 448 144V240Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 256H432C440.838 256 448 248.836 448 240V144C448 135.164 440.838 128 432 128H400C391.164 128 384 135.164 384 144V240C384 248.836 391.164 256 400 256ZM272 256H304C312.838 256 320 248.836 320 240V144C320 135.164 312.838 128 304 128H272C263.164 128 256 135.164 256 144V240C256 248.836 263.164 256 272 256ZM144 256H176C184.838 256 192 248.836 192 240V144C192 135.164 184.838 128 176 128H144C135.164 128 128 135.164 128 144V240C128 248.836 135.164 256 144 256ZM0 320V448H80V416C80 407.164 87.164 400 96 400C104.838 400 112 407.164 112 416V448H208V416C208 407.164 215.164 400 224 400C232.838 400 240 407.164 240 416V448H336V416C336 407.164 343.164 400 352 400C360.838 400 368 407.164 368 416V448H464V416C464 407.164 471.164 400 480 400C488.838 400 496 407.164 496 416V448H576V320H0Z" })
    ]
  }
));
MemoryDuotone.displayName = "MemoryDuotone";
var Memory_default = MemoryDuotone;
